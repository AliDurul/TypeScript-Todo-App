import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface ITodoList {
  todos: Todotype[];
}

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  const progressTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);
console.log(completedTodos);
  return (
    <Grid container gap={2} justifyContent={"center"} alignItems={"center"}>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}
      >
        <Typography variant="h4" color="secondary">
          InProgress Todos
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid green",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}
      >
        <Typography variant="h4" color="green">
          Completed Todos
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TodoList;
