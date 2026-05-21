"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueSlug = void 0;
const generateUniqueSlug = (model, baseSlug, id) => __awaiter(void 0, void 0, void 0, function* () {
    let slug = baseSlug;
    let counter = 1;
    while (true) {
        const existing = yield model.findOne({ slug });
        if (!existing || existing._id.toString() === id) {
            return slug;
        }
        slug = `${baseSlug}-${counter}`;
        counter++;
    }
});
exports.generateUniqueSlug = generateUniqueSlug;
//# sourceMappingURL=slug-generator.js.map