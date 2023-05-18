import { UserInfoShape } from "../../interfaces/userInfo";

declare module 'Express' {
    export interface Request {
        // @ts-ignore
        userInfo?: any
    }
}