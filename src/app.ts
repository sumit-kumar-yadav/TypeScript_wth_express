import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const port = process.env.PORT || 8000;

const add = (a: number, b: number): number => a+b;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log(add(5, 5));
    res.send("Hey!!! It's running fine...");
});

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
}).on("error", (err) => {
    console.log(err);
})