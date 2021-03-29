import React, { useState, useEffect } from 'react';
import Todo from '../../Components/Todo/Todo';
import './TodoList.css';
import { TextField, Button, Typography, Grid, List } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { db } from '../../firebase';
import AddIcon from '@material-ui/icons/Add';
import firebase from 'firebase';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput('');
  };

  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo })));
      });
  }, []);

  return (
    <div className="todolist">
      <div className="todolist__inner">
        <Typography variant="h3" className="todolist__title">
          <AssignmentIcon fontSize="large" />
          Todo list
        </Typography>

        {/*-----add todo form-----*/}
        <div className="todolist__form">
          <form>
            <Grid container>
              <Grid xs={10}>
                <TextField
                  multiline
                  fullWidth
                  variant="standard"
                  label="Add your task"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
              </Grid>
              <Grid xs={2}>
                <Button
                  // type="submit"
                  startIcon={<AddIcon />}
                  disabled={!input}
                  onClick={addTodo}
                  variant="contained"
                  color="primary"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>

        {/*-----todo item component rendering----- */}
        <div className="todolist__items">
          {todos.map((todo, index) => (
            <List>
              <Todo key={index} task={todo} />
            </List>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
