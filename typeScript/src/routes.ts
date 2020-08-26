import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
    const user = createUser({
        name: 'Rafael',
        email: 'Rafael@email.com',
        password: 123456,
        techs: [
            'NodeJs',
            'ReactJs',
            'ReactNative',
            { title: 'JavaScript', experience: 100 }
        ],
        techsStr: [
            'NodeJs',
            'ReactJs',
            'ReactNative'
        ]
    });

    console.log(user.email);

    return res.json({ message: 'Hello world' });
}