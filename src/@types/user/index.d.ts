//@ts-nocheck
import { UserInfoShape } from "../../interfaces/userInfo";

declare module 'Express' {
    export interface Request {
        userInfo?: any
    }
}