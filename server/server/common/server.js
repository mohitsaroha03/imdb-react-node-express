import * as bodyParser from 'body-parser';

import helmet from 'helmet';
import cors from 'cors';

import Express from 'express';
import _ from 'lodash';

const app = new Express();

export default class ExpressServer {
    constructor() {
        this.listen = this.listen.bind(this);
        app.use(cors());
        app.use(bodyParser.text());
        app.use(bodyParser.json({
            limit: '50mb',
        }));
        app.use(bodyParser.urlencoded({
            limit: '50mb',
            extended: true,
        }));
        app.set('view engine', 'ejs');
        app.use(helmet());
    }

    router(routes) {
        routes(app);
        return this;
    }

    listen(port) {
        app.listen(port, () => {
            console.log(`app is listening at port ${port}`);
        });
        return this;
    }
    Sqldb() {
        return new Promise((resolve, reject) => {
            return resolve(this);
        });
    }
}
