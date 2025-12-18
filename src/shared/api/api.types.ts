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

export type Loadable<Data> = {
  data: Data | undefined;
  isLoading: boolean;
  isError: boolean;
};

export type Mutation<Params, Data> = {
  mutate: (params: Params) => Promise<Data>;
} & Loadable<Data>;
