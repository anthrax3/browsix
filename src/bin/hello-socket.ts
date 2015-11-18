/// <reference path="../../typings/node/node.d.ts" />

'use strict';

import { createServer, Socket } from 'net';

function main(): void {
	let server = createServer((socket: Socket) => {

		console.log("Connection from " + socket.remoteAddress);
		socket.end("Hello World\n");
		setTimeout(process.exit, 0);
	});

	// Fire up the server bound to port 7000 on localhost
	server.listen(7000, "localhost");

	// Put a friendly message on the terminal
	console.log("TCP server listening on port 7000 at localhost.");
}

main();
