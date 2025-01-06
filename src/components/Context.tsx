import React, { createContext, useState, ReactNode } from "react";

export interface State {
  fontSize: number;
  padding: number;
  // Add more properties as needed
}

export interface ContextProps {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

const defaultState: State = {
  fontSize: 16,
  padding: 16,
  // Add more default values as needed
};

const MyContext = createContext<ContextProps>({
  state: defaultState,
  setState: () => {},
});

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [state, setState] = useState<State>(defaultState);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
