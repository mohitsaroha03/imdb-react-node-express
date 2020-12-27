import Config from 'config';
import Routes from './routes';
import ExpressServer from './common/server';


export default new ExpressServer()
    .router(Routes)
    .Sqldb() // connection to DB, if any.
    .then(server => {
        return server.listen(Config.get('port'));
    })
