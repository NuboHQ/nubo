"use strict";
exports.__esModule = true;
exports.config = void 0;
var website = {
    url: process.env['PUBLIC_NUBO_WEBSITE_URL'] || 'http://localhost:5000'
};
var api = {
    allowedUrls: [website.url],
    url: process.env['PUBLIC_NUBO_API_URL'] || 'http://localhost:5003'
};
exports.config = {
    secretKey: process.env['SECRET_KEY'] || 'nubo',
    website: website,
    api: api
};
