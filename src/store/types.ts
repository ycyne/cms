import type { LoginStateType } from "./login/types";
// import type {SystemStateType} from

export interface RootStateType {
  departmentList: any[];
  departmentCount: number;
  roleList: any[];
  roleCount: number;
  menuList: any[];
}

interface ModuleType {
  login: LoginStateType;
}

export type RootWithModule = RootStateType & ModuleType;
