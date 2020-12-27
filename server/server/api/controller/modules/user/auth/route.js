import Express from 'express';
import controller from './controller';
// import {
//     authenticationMiddleware,
// } from '../../../common/passportStrategy';

export default Express
    .Router()
    .post('/login', controller.login);
