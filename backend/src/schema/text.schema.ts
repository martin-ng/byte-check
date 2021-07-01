import { object, string } from 'yup';

const payload = {
    body: object({
        originalText: string().required('Text is required.'),
        newText: string().required('Text is required.')
    })
};

const params = {
    params: object({
        textId: string().required('textId is required.')
    })
};

export const createTextSchema = object({
    ...payload
});
