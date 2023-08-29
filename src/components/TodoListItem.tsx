import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";
import axios from "axios";

interface ITodoListItem {
  todo: Todotype;
  getTodos: GetFn
}

const TodoListItem: FC<ITodoListItem> = ({ todo,getTodos }) => {
  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/${id}`);
    } catch (error) {
      console.log(error);
    }
    finally{
        getTodos()
    }
  };

  return (
    <ListItem
      disableGutters
      sx={{ cursor: "pointer", overflow: "hidden" }}
      secondaryAction={
        <IconButton aria-label="comment" sx={{ "&:hover": { color: "red" } }}
        onClick={()=>deleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={todo.todo} sx={{ wordWrap: "break-word" }} />
    </ListItem>
  );
};

export default TodoListItem;
