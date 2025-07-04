"use server";

import { SignJWT, jwtVerify } from "jose";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.NEXT_PUBLIC_SECRET || "secret";
const key = new TextEncoder().encode(secretKey);
const expiteTime = 30 * 24 * 60 * 60 * 1000; // 30 days

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(Date.now() + expiteTime)
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(token: string, redirectValues?: string) {
  const expires = new Date(Date.now() + expiteTime);
  const session = await encrypt({ token, expires });

  // Save the session in a cookie
  (await cookies()).set("sessionChildreanAboard", session, {
    expires,
    secure: false,
    httpOnly: true,
    path: "/",
    sameSite: "lax", // Try "lax" instead of "strict"
  });
  redirect(`/${redirectValues}`);
}

export async function logout() {
  // Destroy the session
  (await cookies()).set("sessionChildreanAboard", "", {
    expires: new Date(-1),
    secure: false,
  });
  redirect("/sign-in");
}

export async function getSession() {
  const session = (await cookies()).get("sessionChildreanAboard")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("sessionChildreanAboard")?.value;

  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);

  parsed.expires = new Date(Date.now() + expiteTime);

  const res = NextResponse.next();
  res.cookies.set({
    name: "sessionChildreanAboard",
    value: await encrypt(parsed),
    expires: parsed.expires,
    secure: false,
  });

  return res;
}

export async function getCookieData(key: string) {
  const value = (await cookies()).get(key)?.value;
  return value;
}

export async function setCookieData(
  key: string,
  value: string,
  expireTime: number
) {
  (await cookies()).set(key, value, {
    expires: new Date(Date.now() + expireTime),
    path: "/",
  });
}
