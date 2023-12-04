import accountRouter from './account';

function route(app) {
    // app.use('/', siteRouter);
    app.use('/', accountRouter);
}

module.exports = route;
