import { Router } from 'express';

import * as ServiceController from '../controllers/serviceController';

const router = Router();

router.get('/service', ServiceController.getAll);
router.post('/service', ServiceController.add);
router.delete('/service', ServiceController.del);

export default router;
