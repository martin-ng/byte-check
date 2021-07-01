import { Request, Response } from 'express';
import { get } from 'lodash';

import { createText, findText, findAndUpdateText } from '../service/text.service';

export async function createTextController(req: Request, res: Response) {
    const userId = get(req, 'user._id');

    const body = req.body;

    const text = await createText({ ...body, user: userId });

    return res.send(text);
}

export async function updateTextController(req: Request, res: Response) {
    const userId = get(req, 'user._id');
    const textId = get(req, 'params.textId');
    const update = req.body;

    const text = await findText({ textId });

    if (!text) {
        return res.sendStatus(404);
    }
    console.log('text', text);
    if (String(text.user) !== userId) {
        return res.sendStatus(401);
    }

    const updatedText = await findAndUpdateText({ textId }, update, { new: true });
    console.log('updatedText', updatedText);
    return res.send(updatedText);
}
