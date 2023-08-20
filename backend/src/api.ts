/**
 * This is an API express router
 */
import express from 'express';
import { getCollection, getCollections } from './connections/mongo';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello api!');
});

// Get all data from mongodb
router.get('/collections', (req, res) => {
    getCollections().then((collections) => {
        res.json(collections);
    });
});

router.get('/collections/:collectionName', (req, res) => {
    getCollection(req.params.collectionName).then((collection) => {
        res.json(collection);
    });
});

export default router;
