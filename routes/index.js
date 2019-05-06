import express from 'express';
import db from '../db/db';
// import controller and use it's methods as callbacks
import UsersController from '../userControllers/user';

const router = express.Router(); // Creates a route handler

router.get('/api/v1/users', UsersController.getAllusers);
router.get('/api/v1/users/:id', UsersController.getUser);
router.post('/api/v1/users', UsersController.createUser);
router.put('api/v1/users/:id', UsersController.updateUser);
router.delete('/api/v1/users/:id', UsersController.deleteUser);

export default router;