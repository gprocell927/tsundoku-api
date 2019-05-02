import express from 'express';
import db from '../db/db';
// import controller and use it's methods as callbacks
import TodoController from '../todosControllers/todos';

const router = express.Router(); // Creates a route handler

router.get('/api/v1/todos', TodoController.getAllTodos);
router.get('/api/v1/todos/:id', TodoController.getTodo);
router.post('/api/v1/todos', TodoController.createTodo);
router.put('api/v1/todos/:id', TodoController.updateTodo);
router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

export default router;