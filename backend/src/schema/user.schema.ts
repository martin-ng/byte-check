import { object, string, ref } from 'yup';

export const createUserSchema = object({
    body: object({
        name: string().required('Name is required.'),
        password: string()
            .required('Password is required.')
            .min(6, 'Password needs to have at least 6 characters.')
            .matches(/^[a-zA-Z0-9_.-]*$/, 'Need to have valid characters.'),

        passwordConfirmation: string().oneOf([ref('password'), null], 'Password must match'),

        email: string().email('Must be a valid email.').required('Email is required.')
    })
});

export const createUserSessionSchema = object({
    body: object({
        password: string()
            .required('Password is required.')
            .min(6, 'Password needs to have at least 6 characters.')
            .matches(/^[a-zA-Z0-9_.-]*$/, 'Need to have valid characters.'),

        email: string().email('Must be a valid email.').required('Email is required.')
    })
});
