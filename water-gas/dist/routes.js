"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_1 = require("./services");
const router = (0, express_1.Router)();
router.post('/upload', services_1.uploadImage);
router.patch('/confirm', services_1.confirmMeasure);
router.get('/:customer_code/list', services_1.listMeasures);
exports.default = router;
