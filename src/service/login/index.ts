import { ycRequest } from "../index";

import { ResultType } from "../types";
import { AccountLoginType, AccountLoginResultType } from "./types";

enum AccountLoginAPI {
  ACCOUNT_LOGIN = "/login",
  USER_INFO = "/users/",
  USER_MENU = "role/"
}
export function accountLoginRequest(account: AccountLoginType) {
  return ycRequest.post<ResultType<AccountLoginResultType>>({
    url: AccountLoginAPI.ACCOUNT_LOGIN,
    data: {
      ...account,
      name: "coderwhy"
    }
  });
}

export function userInfoRequest(id: number) {
  return ycRequest.get<ResultType>({
    url: AccountLoginAPI.USER_INFO + id
  });
}
export function userMenuRequest(id: number) {
  return ycRequest.get<ResultType>({
    url: AccountLoginAPI.USER_MENU + id + "/menu"
  });
}
