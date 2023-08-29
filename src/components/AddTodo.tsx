import { Box, Button, Container, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

const AddTodo = () => {
  const [text, setText] = useState("");

  const handleClick = () => {
    console.log(text);
    setText("");
  };

  
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "center",
          m: { xs: 4, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}
      >
        <TextField
          id="todo"
          label="New Todo"
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
          inputProps={{ maxLength: 40 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
          variant="contained"
          color="primary"
          onClick={handleClick}
          endIcon={<SaveIcon />}
        >
          Save Todo
        </Button>
      </Box>
    </Container>
  );
};

export default AddTodo;
