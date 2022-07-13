import { createContext, useState } from "react";

export const MyRoutineContext = createContext([]);

export const MyRoutineProvider = ({ children }) => {
  const [isMove, setIsMove] = useState(true);

  const [minhasTarefas, setMinhasTarefas] = useState([]);

  const spyOnMove = () => {
    return isMove === true ? setIsMove(false) : setIsMove(true);
  };

  return (
    <MyRoutineContext.Provider
      value={{ setIsMove, isMove, spyOnMove, minhasTarefas, setMinhasTarefas }}
    >
      {children}
    </MyRoutineContext.Provider>
  );
};

// export default MyRoutineProvider;
