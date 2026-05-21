"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = require("./app/middleware/globalErrorHandler");
const opinion_route_1 = require("./app/modules/opinion/opinion.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["https://juwel-r.web.app", "http://localhost:5173"],
    credentials: true,
}));
app.use("/api/opinion", opinion_route_1.OpinionRouter);
app.get("/", (req, res) => {
    res.send("Backend Server of 2020 Police Batch is okay.");
});
app.use(globalErrorHandler_1.globalErrorHandler);
app.use((req, res) => {
    res.send("Route not found");
});
exports.default = app;
//# sourceMappingURL=app.js.map