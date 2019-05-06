// Hold all callback functions as methods
// When we need to make use of any of the methods we'll create an instance
// of the class and get the method we need.

import db from '../db/db';
import pool from '../queries';

class UserController {
  getAllUsers(req, res) {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows)
    })
    // return res.status(200).send({
    //   success: 'true',
    //   message: 'todos retrieved successfully',
    //   todos: db,
    // });
  }

  getUser(req, res) {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows)
    })
    // const id = parseInt(req.params.id, 10);
    // db.map((todo) => {
    //   if (todo.id === id) {
    //     return res.status(200).send({
    //       success: 'true',
    //       message: 'todo retrieved successfully',
    //       todo,
    //     });
    //   }
    // });
    // return res.status(404).send({
    //   success: 'false',
    //   message: 'todo does not exist',
    // });
  }

  createUser(req, res) {
    const { name, email } = req.body;
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if(error){
        throw error;
      }
      res.status(201).send('User added with ID: ${result.insertId}')
    })
    // if (!req.body.title) {
    //   return res.status(400).send({
    //     success: 'false',
    //     message: 'title is required',
    //   });
    // }
    // const todo = {
    //   id: db.length + 1,
    //   title: req.body.title,
    //   description: req.body.description,     
    // };
    // return res.status(201).send({
    //   success: 'true',
    //   message: 'todo added successfully',
    //   todo,
    // });
  }

  updateUser(req, res) {
    const id = parseInt(req.params.id, 10);
    const { name, email } = req.body;

    pool.query(
      'UPDATE users SET name = $1, email =$2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`User modified with ID: ${id}`)
      }
    )
    // let todoFound;
    // let itemIndex;
    // db.map((todo, index) => {
    //   if (todo.id === id) {
    //     todoFound = todo;
    //     itemIndex = index;
    //   }
    // });

    // if (!todoFound) {
    //   return res.status(404).send({
    //     success: 'false',
    //     message: 'todo not found',
    //   });
    // }

    // if(!req.body.title){
    //   return res.status(400).send({
    //     success: 'false',
    //     message: 'title is required',
    //   });
    // } else if (!req.body.description) {
    //   return res.status(400).send({
    //     success: 'false',
    //     message: 'description is required',
    //   });
    // }
    
    // const newTodo = {
    //   id: todoFound.id,
    //   title: req.body.title || todoFound.title,
    //   description: req.body.description || todoFound.description,
    // };

    // db.splice(itemIndex, 1, newTodo);

    // return res.status(201).send({
    //   success: 'true',
    //   message: 'todo added successfully',
    //   newTodo,
    // });
  }

  deleteUser(req, res) {
    const id = parseInt(req.params.id, 10);

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User deleted with ID: ${id}`)
    })
    // let todoFound;
    // let itemIndex;
    // db.map((todo, index) => {
    //   if(todo.id === id) {
    //     todoFound = todo;
    //     itemIndex = index;
    //   }
    // });

    // if (!todoFound) {
    //   return res.status(404).send({
    //     success: 'false',
    //     message: 'todo not found',
    //   });
    // }
    // db.splice(itemIndex, 1);

    // return res.status(200).send({
    //   success: 'true',
    //   message: 'Todo deleted successfully',
    // });
  // }
}
}

const UsersController = new UserController();  // create an instance of this class and export it to use it
export default UsersController;