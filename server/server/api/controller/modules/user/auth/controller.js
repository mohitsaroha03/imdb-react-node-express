import Async from 'async';
import Joi from 'joi';
import Boom from 'boom';
import _ from 'lodash';
import Response from '../../../common/response';
export class AuthController {
    login(request, response, next) {
        const validationSchema = {
            // LoginId: Joi.string().required(),
            // Password: Joi.string().required().trim(),
        };

        // const validationStatus = Joi.validate(request.body, validationSchema);
        // if (validationStatus.error) return next(Boom.badData(validationStatus.error.details[0].message));

        Async.waterfall([
            cb => {
                // DAO call to validate userQuery
                // but in this case we are not using any DB
                cb(null, {});
            },
        ], (err, result) => {
            if (err) return next(err);
            return response.json(new Response(result, 'User Successfully LoggedIn'));
        });
    }
}

export default new AuthController();
