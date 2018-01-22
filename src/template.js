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
				<meta name="author" content="Mike Hudson">
				<meta name="viewport" content="width=device-width, maximum-scale=1">
				<meta name="description" content="I work with clients, agencies and teams to find intuitive solutions to complex problems and build sustainable and clean software. My skills include various technologies in the different web stack layers.">
				<meta property="og:description" content="I work with clients, agencies and teams to find intuitive solutions to complex problems and build sustainable and clean software. My skills include various technologies in the different web stack layers.">
				<meta property="og:site_name" content="EBEN">
				<meta property="og:type" content="website">
				<meta property="og:image" content="http://eben.co.nz:8080/storage/uploads/00000000031.png">
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
