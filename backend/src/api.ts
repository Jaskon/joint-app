/**
 * This is an API express router
 */
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello api!');
});

export default router;
