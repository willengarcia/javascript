import { Router } from 'express';
import { uploadImage, confirmMeasure, listMeasures } from './services';
import path from 'path';

const router = Router();

router.post('/upload', uploadImage);
router.patch('/confirm', confirmMeasure);

router.get('/:customer_code/list', listMeasures);

export default router;
