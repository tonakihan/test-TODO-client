import { useParams } from "react-router";

function TodoItemPage() {
  const { id } = useParams();

  return <p>ID: {id}</p>;
}

export default TodoItemPage;
