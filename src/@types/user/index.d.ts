// import { UserInfoShape } from "../../interfaces/userInfo";

// declare module 'Express' {
//    export interface Request {
//        userInfo?: UserInfoShape
//    }
// }
import express from 'express';

declare global {
    namespace Express {
        interface Request {
            userInfo?: any
        }
    }
}