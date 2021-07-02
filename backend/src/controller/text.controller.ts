import { Request, Response } from 'express';
import { get } from 'lodash';

import { createText, findText, findAndUpdateText, deleteText } from '../service/text.service';

export async function createTextController(req: Request, res: Response) {
    const userId = get(req, 'user._id');

    const body = req.body;

    const text = await createText({ ...body, user: userId });

    return res.send(text);
}

export async function updateTextController(req: Request, res: Response) {
    const userId = get(req, 'user._id');
    const textId = get(req, 'params.textId');

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

export async function getTextController(req: Request, res: Response) {
    const textId = get(req, 'params.textId');
    const text = await findText({ textId });

    if (!text) {
        return res.sendStatus(404);
    }

    return res.send(text);
}

export async function deleteTextController(req: Request, res: Response) {
    const userId = get(req, 'user._id');
    const textId = get(req, 'params.textId');
    const update = req.body;

    const text = await findText({ textId });

    if (!text) {
        return res.sendStatus(404);
    }

    if (String(text.user) !== String(userId)) {
        return res.sendStatus(401);
    }

    await deleteText({ textId });
}
