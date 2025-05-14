import axios, {type AxiosRequestConfig} from "axios";
import type {DefaultResponse} from "@/models/response/default-response.model.ts";
import {RequestError} from "@/models/errors/request.error.ts";

type GetOptions = {
    method: "get",
    url: string,
    opts?: AxiosRequestConfig
}

type OtherTypeOptions = {
    method: "post" | "patch" | "put" | "delete",
    url: string,
    data?: object,
    opts?: AxiosRequestConfig
}

type RequestOptions = OtherTypeOptions | GetOptions

export async function makeBackendRequest<R>({method, url, opts, ...config}: RequestOptions) {
    // @ts-ignore
    const {data} = method === "get" ? await axios[method]<DefaultResponse>(url, opts) : await axios[method]<DefaultResponse>(url, config.data, opts);
    if (data.status === "fail") throw new RequestError(`Request failed! ${data.error}`);

    return {...data, data: data.data as R};
}