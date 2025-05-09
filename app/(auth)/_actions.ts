"use server";

import { EndPoints } from "@/lib/routes/EndPoints";
import axios from "axios";
import { loginSchemaType } from "./_component/lib";

export async function loginAction(data: loginSchemaType) {
  try {
    const res = await axios.post(EndPoints.login, { ...data });
    if (res.status === 200) {
      const permissions = res.data.permissions as Record<string, boolean>;

      // Filter the permissions that are true and start with "بینینەوەی"
      const filteredPermissions = Object.keys(permissions).filter(
        (key) => permissions[key] && key.startsWith("بینینەوەی")
      );

      // Translate the permissions to the correct route
      const categoryTranslation = {
        "بینینەوەی بەکارهێنەر": "setting/users",
        "بینینەوەی ئەرک": "setting/roles",
        "بینینەوەی بەش": "setting/roles",
        "بینینەوەی قاصە": "setting/roles",
        "بینینەوەی خەرجی": "setting/expenses",
        "بینینەوەی قەرز": "setting/debts",
        "بینینەوەی پسوڵە": "setting/invoices",
        "بینینەوەی ڕاپۆرت": "report",
        "بینینەوەی مێز": "table",
        "بینینەوەی خواردن": "foods",
        "بینینەوەی ماددە": "setting/roles",
        "بینینەوەی داواکاری": "setting/invoices?type=order",
        "بینینەوەی لایەنەکان": "setting/invoices?type=sale",
      };

      // Translate the permissions
      const permissionsTranslation = filteredPermissions.map(
        (perm) => categoryTranslation[perm as keyof typeof categoryTranslation]
      );

      // Get the first permission
      const userFirstPermission = filteredPermissions[0];
      // Determine the redirect route
      // const redirect =
      //   categoryTranslation[
      //     userFirstPermission as keyof typeof categoryTranslation
      //   ];
      const redirect = "main";
      // Create the token with permissions
      const token =
        res.data?.token.trim() +
        ",between," +
        JSON.stringify(permissionsTranslation);

      // console.log(res.data);

      return {
        success: true,
        message: "بە سەرکەوتوویی چوویتەژوورەوە",
        data: {
          token,
          redirect,
        },
      };
    }
  } catch (error: any) {
    const message = error?.response?.data[Object.keys(error.response.data)[0]];
    return {
      success: false,
      message,
    };
  }
}

// export type loginType = {
//   token: string;
//   permissions: {
//     "زیادکردنی بەکارهێنەر": boolean;
//     "سڕینەوەی بەکارهێنەر": boolean;
//     "نوێکردنەوەی زانیاریەکانی بەکارهێنەر": boolean;
//     "بینینەوەی بەکارهێنەر": boolean;
//     "زیادکردنی ئەرک": boolean;
//     "سڕینەوەی ئەرک": boolean;
//     "نوێکردنەوەی ئەرک": boolean;
//     "بینینەوەی ئەرک": boolean;
//     "زیادکردنی مێز": boolean;
//     "سڕینەوەی مێز": boolean;
//     "گرتنی مێز": boolean;
//     "زیادکردنی بەش": boolean;
//     "بینینەوەی بەش": boolean;
//     "زیادکردنی خواردن": boolean;
//     "گۆڕینی خواردن": boolean;
//     "سڕینەوەی خواردن": boolean;
//     "زیادکردنی بژاردە": boolean;
//     "سڕینەوەی بژاردە": boolean;
//     "زیادکردنی ماددە": boolean;
//     "سڕینەوەی ماددە": boolean;
//     "نوێکردنەوەی ماددە": boolean;
//     "زیادکردنی داواکاری": boolean;
//     "هەڵوەشاندنەوەی داواکاری": boolean;
//     "پارە وەرگرتن": boolean;
//     "زیادکردنی کارمەند": boolean;
//     "نوێکردنەوەی کارمەند": boolean;
//     "سڕینەوەی کاردمەند": boolean;
//     "بینینەوەی کاردمەند": boolean;
//     "پێدانی موچە": boolean;
//     "زیادکردنی پسوڵە": boolean;
//     "وەرگرتنەوەی قەرز": boolean;
//     "دانەوەی قەرز": boolean;
//     "زیادکردنی خەرجی": boolean;
//     "بینینەوەی قاصە": boolean;
//     "بینینەوەی خەرجی": boolean;
//     "زیادکردنی بابەتی خەرجی": boolean;
//     "بینینەوەی قەرز": boolean;
//     "نوێکردنەوەی نرخی دراو": boolean;
//     "بینینەوەی پسوڵە": boolean;
//     "بینینەوەی ڕاپۆرت": boolean;
//     "نوێکردنەوەی مێز": boolean;
//     "بینینەوەی مێز": boolean;
//     "بینینەوەی خواردن": boolean;
//     "بینینەوەی ماددە": boolean;
//     "بینینەوەی داواکاری": boolean;
//     "بینینەوەی لایەنەکان": boolean;
//   };
// };
