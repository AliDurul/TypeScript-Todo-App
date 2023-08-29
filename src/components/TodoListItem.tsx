import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";
import axios from "axios";
import { purple, green } from "@mui/material/colors";

interface ITodoListItem {
  todo: Todotype;
  getTodos: GetFn;
}

const TodoListItem: FC<ITodoListItem> = ({ todo, getTodos }) => {
  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };

  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${import.meta.env.VITE_BASE_URL}/${todo.id}`, {
        ...todo,
        isDone: !todo.isDone,
      });
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };

  return (
    <ListItem
      disableGutters
      sx={{
        cursor: "pointer",
        overflow: "hidden",
        mb: "5px",
        "&:hover": {
          backgroundColor: todo.isDone ? green[50] : purple[50],
          ".MuiSvgIcon-root": { color: todo.isDone ? "green" : "purple" },
          ".MuiListItemText-root": { color: todo.isDone ? "green" : "purple" },
        },
      }}
      secondaryAction={
        <IconButton aria-label="comment" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={todo.todo}
        sx={{wordWrap: "break-word", textTransform:"uppercase"}}
        onClick={() => toggleTodo(todo)}
      />
    </ListItem>
  );
};

export default TodoListItem;
