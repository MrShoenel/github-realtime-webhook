#Github Realtime Webhook
This app is a generic webhook for Github that forwards any messages received from Github to all connected WebSocket clients.

## How that works
It connects Github and *realtime*-clients through a page or a page-id.
As an example, let's assume our page-id was *http://example.com/my-hook-id*. Then you'd use that as URL for your Github-Webhook **and** as connection-string in your WebSocket.

The app supports two routes:
* [***/webhook/:page-id***](#) for **Github** to call-back with some POST payload. This payload will be forwarded to all clients *as is*.
* [***/ws-notify?page=&lt;page-id&gt;***](#) for your **WebSocket** clients. Every client will receive Github's payload.
