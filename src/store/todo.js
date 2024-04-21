import create from "zustand";

// Initial state
const initialState = {
  todos: [],
};

// Store
const useTodoStore = create((set) => ({
  state: { ...initialState },
  actions: {
    // Todo ekleme
    addTodo: (text) =>
      set((state) => ({
        todos: [...state.todos, { id: Date.now(), text, completed: false }],
      })),
    // Todo durumunu değiştirme
    toggleTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      })),
    // Todo silme
    deleteTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),
  },
}));

export default useTodoStore;
