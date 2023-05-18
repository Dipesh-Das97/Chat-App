import express, {Express, Request, Response} from 'express';
import { addUserInfoToReq } from './middleware';


const app: Express = express();
const port = 3000;

app.use(express.json());
app.get('/', (req: Request, res: Response)=>{
    res.send('Hello, this is Express + TypeScript');
});

app.post('/user', addUserInfoToReq , (req: Request, res: Response) => {
    const lastName = req?.body.lastName;
    //@ts-ignore
    let userInfo = req?.userInfo;
    res.send({...userInfo, name: userInfo?.firstName + ' ' + lastName});
});

app.listen(port, ()=> {
console.log(`[Server]: I am running at http://localhost:${port}`);
});