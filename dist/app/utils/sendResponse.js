"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRes = void 0;
const sendRes = (res, data) => {
    res.status(data.statusCode).json({
        statusCode: data.statusCode,
        success: data.success,
        message: data.message,
        data: data.data,
        meta: data.meta,
    });
};
exports.sendRes = sendRes;
//# sourceMappingURL=sendResponse.js.map