import imdbRouter from './api/controller/modules/imdb/route';
import authRouter from './api/controller/modules/user/auth/route';

export default function routes(app) {
    app.use('/imdb', imdbRouter);
    app.use('/auth', authRouter);
    return app;
}
