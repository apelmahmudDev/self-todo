import TodoContainer from "./components/TodoContainer/TodoContainer";
import TodoContextProvider from "./contexts/TodoContext";

const App = () => {
  return (
    <div className="App">
      <TodoContextProvider>
        <TodoContainer />
      </TodoContextProvider>
    </div>
  );
};

export default App;
