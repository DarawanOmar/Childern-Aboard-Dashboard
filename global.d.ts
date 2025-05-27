type searchParamsType = Promise<{
  [key: string]: string | string[] | undefined;
}>;

type paramsType = Promise<{
  [key: string]: string | string[] | undefined;
}>;

type SearchParamsTypeUse = {
  searchParams: searchParamsType;
};

type ResponseData<T> = {
  data: T;
  meta: {
    total: number;
    page: number;
    limit: number;
    pageCount: number;
  };
};
