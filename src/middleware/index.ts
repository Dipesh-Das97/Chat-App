import {Express, Request, Response, NextFunction} from 'express';
import { user } from '../constants';

export function addUserInfoToReq(req: Request, res: Response, next: NextFunction): void {
  req.userInfo = user;
  next();
}