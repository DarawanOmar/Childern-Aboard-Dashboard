import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCategoriesData } from "../../category/_lib";
import { getDetailCategoriesData } from "../../details/_lib";
import { getAlphabetData } from "../../alpha-bets/_lib";
import { getUsersData } from "../../users/_lib";
import { getFeedbackData } from "../../feedback/_lib";
import { getAdminData } from "../../admin/_lib";

export async function SectionCards() {
  const [
    categoriesData,
    detailCategoriesData,
    alphabetData,
    usersData,
    feedbackData,
    adminData,
  ] = await Promise.all([
    getCategoriesData(),
    getDetailCategoriesData(""),
    getAlphabetData(),
    getUsersData(),
    getFeedbackData(""),
    getAdminData(),
  ]);

  const cardData = [
    {
      title: "کۆی کاتیگۆری",
      value: categoriesData.length,
      description: "کۆی ئەو کاتیگۆریانەی لە ئێستایە",
      color: "text-green-500",
    },
    {
      title: "کۆی ئایتمی کاتیگۆریەکان",
      value: detailCategoriesData.length,
      description: "کۆی ئەو ئایتمی کاتیگۆریانەی لە ئێستایە",
      color: "text-purple-500",
    },

    {
      title: "کۆی پیتی ئەلفوبێ",
      value: alphabetData.length,
      description: "کۆی پیتی ئەلفوبێ لە ئێستایە",
      color: "text-blue-500",
    },
    {
      title: "کۆی بەکارهێنەران",
      value: usersData.length,
      description: "کۆی بەکارهێنەرانی لە ئێستایە",
      color: "text-yellow-500",
    },
    {
      title: "کۆی فیدباکەکان",
      value: usersData.length,
      description: "کۆی فیدباکەکانی لە ئێستایە",
      color: "text-yellow-500",
    },
    {
      title: "کۆی ئەدمینەکان",
      value: usersData.length,
      description: "کۆی بئەدمینەکانی لە ئێستایە",
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cardData.map((card, index) => (
        <Card key={index} className="bg-card">
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardTitle className="@[250px]/card:text-3xl text-3xl font-semibold ">
              {card.value}
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm text-muted-foreground">
            <div>{card.description}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
