import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
//import {StaticRouter} from "react-router-dom";
import App from '../src/App';

// create express application
const app = express();
// обслуживание статических ресурсов
app.get( /\.(js|css|map|ico)$/, express.static( path.resolve( __dirname, '../build' ) ) );
// в ответ на любые другие запросы отправляем 'index.html'
app.use( '*', ( req, res ) => {
// читаем файл `index.html`
    let indexHTML = fs.readFileSync( path.resolve( __dirname, '../build/index.html' ), {
        encoding: 'utf8',
    } );

// получаем HTML строку из компонента 'App'
    let appHTML = ReactDOMServer.renderToString(
        // <StaticRouter location={ req.originalUrl }>
            <App />
        //</StaticRouter>
    );

// заполняем элемент '#app' содержимым из 'appHTML'
    indexHTML = indexHTML.replace( '<div id="root"></div>', `<div id="root">${ appHTML }</div>` );

// устанавливаем заголовок и статус
    res.contentType( 'text/html' );
    res.status( 200 );

    return res.send( indexHTML );

} );
// запускаем сервер на порту 9000
app.listen( '9000', () => {
    console.log( 'Express server started at <http://localhost:9000>' );
} );