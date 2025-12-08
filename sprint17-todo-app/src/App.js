import React, { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
import TodoItem from "./components/todo-item/TodoItem";
import Modal from "./components/modal/Modal";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS_MOCK);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    if (!formData.title.trim()) {
      alert("Te rog completează titlul!");
      return;
    }

    if (editingId) {
      setTodos(todos.map((todo) => (todo.id === editingId ? { ...todo, title: formData.title, description: formData.description } : todo)));
      setEditingId(null);
      setIsModalOpen(false);
    } else {
      const newTodo = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    setFormData({ title: "", description: "" });
  };

  const openAddModal = () => {
    setFormData({ title: "", description: "" });
    setEditingId(null);
    setIsModalOpen(true);
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setFormData({
      title: todoToEdit.title,
      description: todoToEdit.description,
    });
    setEditingId(id);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Ești sigur că vrei să ștergi acest todo?");
    if (confirmed) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const handleToggle = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="App">
      <div className="app-container">
        <Card>
          <h2>Create Todo</h2>
          <div>
            <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Title" type="text" />
            <TextArea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Description" />
            <Button onClick={handleSubmit} className="create-button">
              Create
            </Button>
          </div>
        </Card>

        <Card>
          <h1>My todos</h1>
          <Button onClick={openAddModal}>Add +</Button>

          <div className="list-container">
            {activeTodos.map((todo) => (
              <TodoItem key={todo.id} id={todo.id} title={todo.title} description={todo.description} completed={todo.completed} onToggle={handleToggle} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
            {activeTodos.length === 0 && <p style={{ color: "#999" }}>Nu ai todos active</p>}
          </div>

          <div className="separator"></div>
          <h2>Completed</h2>

          <div className="list-container">
            {completedTodos.map((todo) => (
              <TodoItem key={todo.id} id={todo.id} title={todo.title} description={todo.description} completed={todo.completed} onToggle={handleToggle} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
            {completedTodos.length === 0 && <p style={{ color: "#999" }}>Nu ai todos completate</p>}
          </div>
        </Card>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Card>
            <h2>{editingId ? "Edit Todo" : "Create Todo"}</h2>
            <div>
              <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Title" type="text" />
              <TextArea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Description" />
              <Button onClick={handleSubmit}>{editingId ? "Update" : "Create"}</Button>
            </div>
          </Card>
        </Modal>
      </div>
    </div>
  );
}

export default App;
