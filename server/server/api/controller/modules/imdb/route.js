import Express from 'express';
import controller from './controller';
// import {
//     authenticationMiddleware,
// } from '../../../common/passportStrategy';

export default Express
    .Router()
    .get('/movies', controller.getTop100)
    .get('/movies/:movieId', controller.get);
