"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const path = require("path");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
// Configure o middleware cors
app.use((0, cors_1.default)({
    origin: 'http://localhost:3002', // Permite requisições somente do frontend
}));
app.use(body_parser_1.default.json({ limit: '500mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '500mb', extended: true }));
app.use('/uploads', express_1.default.static(path.join(__dirname, 'uploads')));
app.use('/', routes_1.default);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
