import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useReducer, useState } from "react";

const enum TodoActionKind {
  ADD = "ADD",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
}

interface Todo {
  isCompleted: boolean;
  todo: string;
  id: number;
}

interface TodoState {
  todo: Todo[];
}

const reducer = (
  state: TodoState,
  actions: { payload: unknown; type: TodoActionKind }
) => {
  const { payload, type } = actions;
  switch (type) {
    case TodoActionKind.ADD:
      return state;
    case TodoActionKind.DELETE:
      const newState = state.todo.filter(
        (singleTodo) => singleTodo.id !== payload
      );
      return { ...state, todo: newState };
    case TodoActionKind.UPDATE:
      return state;
    default:
      return state;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, {
    todo: [
      { todo: "danish is on another level", isCompleted: false, id: 1 },
      { todo: "danish is on second level", isCompleted: false, id: 2 },
      { todo: "danish is on third level", isCompleted: false, id: 3 },
    ],
  });
  return (
    <motion.ul layout>
      <AnimatePresence>
        {state.todo.map((singleTodo) => (
          <List {...singleTodo} dispatch={dispatch} key={singleTodo.id} />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};

const List = ({
  id,
  todo,
  dispatch,
}: {
  id: number;
  todo: string;
  dispatch: Function;
}) => {
  const [isPresent, setIsPresent] = useState(true);
  return (
    <motion.li
      className="m-3"
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ position: isPresent ? "static" : "absolute" }}
    >
      <p>{todo}</p>
      <button
        onClick={() => {
          setIsPresent(false);
          dispatch({
            payload: id,
            type: TodoActionKind.DELETE,
          });
        }}
        className="m-2 rounded bg-red-400 p-4"
      >
        Delete
      </button>
    </motion.li>
  );
};

export default Todo;
