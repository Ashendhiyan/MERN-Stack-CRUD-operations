const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/users',controller.getUsers);
router.post('/save',controller.addUser);
router.put('/update/:id',controller.updateUser);
router.delete('/delete/:id',controller.deleteUser);

router.get("/getUsers/:id",controller.getUserById);

module.exports = router;