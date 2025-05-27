import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCategoriesData } from "../../category/_lib";
import { getDetailCategoriesData } from "../../details/_lib";
export async function SectionCards() {
  const [categoriesData, detailCategoriesData] = await Promise.all([
    getCategoriesData(),
    getDetailCategoriesData(""),
  ]);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Card className=" bg-card !text-green-500">
        <CardHeader className="relative">
          <CardDescription className="text-green-500">
            کۆی کاتیگۆری
          </CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {categoriesData.length}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="text-green-500">کۆی ئەو کاتیگۆریانەی لە ئێستایە</div>
        </CardFooter>
      </Card>
      <Card className="bg-card !text-purple-500">
        <CardHeader className="relative">
          <CardDescription className="text-purple-500">
            کۆی ئایتمی کاتیگۆریەکان
          </CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {detailCategoriesData.length}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="text-purple-500">
            کۆی ئەو ئایتمی کاتیگۆریانەی لە ئێستایە
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
