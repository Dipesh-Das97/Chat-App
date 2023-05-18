// import { UserInfoShape } from "../../interfaces/userInfo";

// @ts-ignore
declare module 'Express' {
    // @ts-ignore
    export interface Request {
        // @ts-ignore
        userInfo?: any
    }
}