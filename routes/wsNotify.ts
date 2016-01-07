/// <reference path="../typings/express/express.d.ts" />
/// <reference path="../typings/express-ws/express-ws.d.ts" />
import Express = require('express');
import ExpressWs = require('express-ws');

import WebSocketClientManager = require('../modules/WebSocketClientManager');

export function configure(expressWsApp: ExpressWs.ExpressWsApplication) {
	/**
	 * This route add the connecting client to the requested page.
	 */
	expressWsApp.app.ws('/ws-notify', (exWs: ExpressWs.ExpressWebSocket, req: Express.Request) => {
		WebSocketClientManager.addClient(decodeURIComponent(req.query['page']), exWs);
	});
};
