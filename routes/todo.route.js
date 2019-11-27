const express = require('express');
const router = express.Router();

const controller = require('../controllers/todo.controller');

router.get('/todos',controller.getall);
router.post('/add',controller.add);
router.delete('/:id/delete',controller.delete);
router.put('/:id/update',controller.update);

module.exports = router;