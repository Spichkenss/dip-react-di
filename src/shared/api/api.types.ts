import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { AxiosRequestHeaders } from "axios";

type BaseResponse = {
  httpStatus: 200;
  created_at: string;
};

export interface AxiosBaseQueryArgs<Meta, Response = BaseResponse> {
  meta?: Meta;
  prepareHeaders?: (
    headers: AxiosRequestHeaders,
    api: BaseQueryApi
  ) => AxiosRequestHeaders;
  transformResponse?: (response: Response) => unknown;
}

export interface ServiceExtraOptions {
  authRequired?: boolean;
}
