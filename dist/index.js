"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.LoopBackApplication = application_1.LoopBackApplication;
async function main(options = {}) {
    const app = new application_1.LoopBackApplication(options);
    await app.boot();
    await app.migrateSchema();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map