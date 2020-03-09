// 这里都声明type是函数类型的，整体声明函数的输入输出
declare namespace Keepsmiling {
  export type StorageName = string;
  export type StringCapitalizeEveryWord = (str: string) => string;
  export type SetLocalStorage = (name: StorageName, content: string) => void;
  export type GetLocalStorage = (name: StorageName) => string | null;
  export type RemoveLocalStorage = (name: StorageName) => void;
  export type SetCookie = (cname: string, cvalue: number | string, exdays: number) => void;
  export type GetCookie = (cname: string) => string;
  export type RemoveCookie = (name: string) => void;
}
