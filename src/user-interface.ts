import { Request } from "express"
import { UserInfoShape } from "./interfaces/userInfo"

export interface UserInfo extends Request {
  userInfo: UserInfoShape
}