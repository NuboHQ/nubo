"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const website = {
    url: process.env['PUBLIC_NUBO_WEBSITE_URL'] || 'http://localhost:5000',
};
const api = {
    url: process.env['PUBLIC_NUBO_API_URL'] || 'http://localhost:5003',
};
exports.config = {
    secretKey: process.env['SECRET_KEY'] || 'nubo',
    website,
    api,
};
