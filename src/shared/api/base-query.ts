import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import {
  type AxiosRequestConfig,
  AxiosRequestHeaders,
  isAxiosError,
} from "axios";
import { httpClient } from "./httpClient";
import { AxiosBaseQueryArgs, ServiceExtraOptions } from "./api.types";

const getRequestConfig = (args: string | AxiosRequestConfig) => {
  if (typeof args === "string") {
    return { url: args };
  }

  return args;
};

export const axiosBaseQuery = <
  Args extends AxiosRequestConfig | string = AxiosRequestConfig,
  Result = unknown,
  DefinitionExtraOptions extends ServiceExtraOptions = Record<string, unknown>,
  Meta = Record<string, unknown>
>({
  prepareHeaders,
  meta,
  transformResponse,
}: AxiosBaseQueryArgs<Meta> = {}): BaseQueryFn<
  Args,
  Result,
  unknown,
  DefinitionExtraOptions,
  Meta
> => {
  return async (args, api, extraOptions) => {
    try {
      const requestConfig = getRequestConfig(args);

      const result = await httpClient({
        ...requestConfig,
        headers: prepareHeaders
          ? prepareHeaders(
              (requestConfig.headers || {}) as AxiosRequestHeaders,
              api
            )
          : requestConfig.headers,
        signal: api.signal,
        ...extraOptions,
      });

      return {
        data: transformResponse ? transformResponse(result.data) : result.data,
      };
    } catch (err) {
      if (!isAxiosError(err)) {
        return {
          error: err,
          meta,
        };
      }

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
        meta,
      };
    }
  };
};
