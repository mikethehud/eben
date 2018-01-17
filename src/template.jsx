import React from "react";

export default ({ markup, helmet, stylesheet, initialData }) => {

	return `
		<!doctype html>
    <html class="rainbow">
      <head>
				<meta charset="utf-8">
				<link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png">
				<link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png">
				<link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png">
				<link rel="manifest" href="/static/favicons/manifest.json">
				<link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#0040e3">
				<link rel="shortcut icon" href="/static/favicons/favicon.ico">
				<meta name="apple-mobile-web-app-title" content="eben.co.nz">
				<meta name="application-name" content="eben.co.nz">
				<meta name="msapplication-config" content="/static/favicons/browserconfig.xml">
				<meta name="theme-color" content="#0040e3">
				<link href="https://fonts.googleapis.com/css?family=Poppins:300,600,900" rel="stylesheet">
				${helmet.title.toString()}
				${helmet.meta.toString()}
				${helmet.link.toString()}
				${stylesheet}
      </head>
      <body>
      	<div id="root">${markup}</div>
				<script>window.__PROPS__ = ${initialData}</script>
      	<script src="/static/client.js" async></script>
      </body>
    </html>
	`;
};
