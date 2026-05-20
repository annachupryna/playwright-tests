import { randomLetters } from '../../helpers/utils';

export const users = {
    standardUser: {
        username: 'standard_user',
        password: 'secret_sauce',
    },

    lockedOutUser: {
        username: 'locked_out_user',
        password: 'secret_sauce',
    },

    invalidUser: {
        username: 'wrong_user',
        password: 'wrong_password',
    },

    newUser: {
        name: randomLetters(9),
        lastName: randomLetters(9),
        email: `${randomLetters(5)}@example.com`,
        password: 'Password123!',
    }
};