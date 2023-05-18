import { UserInfoShape } from "../../interfaces/userInfo";

// @ts-expect-error
declare module 'Express' {
    // @ts-expect-error
    export interface Request {
        // @ts-expect-error
        userInfo?: UserInfoShape
    }
}