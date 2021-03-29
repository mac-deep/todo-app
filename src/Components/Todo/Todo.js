import React, { useState } from 'react';
import './Todo.css';
import { db } from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Paper, Grid, Checkbox, Modal, Button, FormControl, TextField, IconButton } from '@material-ui/core';
import { ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@material-ui/core';

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection('todos').doc(props.task.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    console.log('clicked');
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)} className="todo__modal">
        <div className={classes.paper}>
          <h1>I am a modal</h1>
          <p></p>
          <FormControl component="form">
            <TextField placeholder={props.task.todo} value={input} onChange={(event) => setInput(event.target.value)} />
            <Button
              // type="submit"
              // component="button"
              variant="contained"
              onClick={updateTodo}
              icon={<AddIcon />}
            >
              Update
            </Button>
          </FormControl>
        </div>
      </Modal>
      <Paper elevation={2}>
        <ListItem role={undefined} dense button>
          <Grid container>
            <Grid item xs={1}>
              <ListItemIcon justify="center">
                <Checkbox edge="start" tabIndex={-1} disableRipple color="primary" />
              </ListItemIcon>
            </Grid>
            <Grid item xs={9}>
              <ListItemText primary={props.task.todo} />
            </Grid>
            <Grid item xs={2}>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments" onClick={(e) => setOpen(true)}>
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={(event) => {
                    db.collection('todos').doc(props.task.id).delete();
                    console.log('clicked');
                  }}
                >
                  <DeleteIcon color="action" />
                </IconButton>
              </ListItemSecondaryAction>
            </Grid>
          </Grid>
        </ListItem>
      </Paper>
    </>
  );
}

export default Todo;
