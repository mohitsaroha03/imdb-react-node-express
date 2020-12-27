import Async from 'async';
import Joi from 'joi';
import Boom from 'boom';
import _ from 'lodash';

import Request from 'request';
import Config from 'config';
import Response from '../../common/response';
// const root = path.normalize(`${__dirname}/../../../..`);


export class ImdbController {

    getTop100(request, response, next) {
        Async.waterfall([
            cb => {
                Request.get({
                    url: `${Config.get('imdbTop100movies')}`,
                }, (error, res, body) => {
                    if (res.statusCode !== 200) return next(Boom.badImplementation(res.statusMessage));
                    body = JSON.parse(body)
                    cb(null,body.results);
                });
            },
        ], (err, result, message = 'success', status = 200) => {
            if (err) return next(err);
            return response.json(new Response(result, message, status));
        });
    }

    get(request, response, next) {
        const validationSchema = {
            movieId: Joi.number().required(),
        };

        const validationStatus = Joi.validate(request.params, validationSchema);
        if (validationStatus.error) return next(Boom.badData(validationStatus.error.details[0].message));

        Async.waterfall([
            cb => {
                console.log(`${Config.get('imdbMovieDetail')}/${request.params.movieId}/`);
                Request.get({
                    url: `${Config.get('imdbMovieDetail')}/${request.params.movieId}/`,
                }, (error, res, body) => {
                    if (res.statusCode !== 200) return next(Boom.badImplementation(res.statusMessage));
                    cb(null,JSON.parse(body));
                });
            },
        ], (err, result, message = 'success', status = 200) => {
            if (err) return next(err);
            return response.json(new Response(result, message, status));
        });
    }

}

export default new ImdbController();
