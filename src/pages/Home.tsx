import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AddTodo from "../components/AddTodo";
import { useEffect, useState } from "react";
import axios from "axios"

const Home = () => {
  const [todos, setTodos] = useState<Todotype[]>([]);
  const url: string = import.meta.env.VITE_BASE_URL;
 
 const getTodos = async () => {
   try {
    const {data} = await axios<Todotype[]>(url)
    console.log(data);
    setTodos(data)
   } catch (error) {
    console.log(error);
   }
 }
 



 useEffect(() => {
  getTodos()
 }, [])
 
 
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" color="error" align="center">
        Todo App with Typescript
      </Typography>
      <AddTodo />
    </Container>
  );
};

export default Home;
