import React, { createContext, useState, useEffect, ReactNode } from "react";

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
  setState: () => { },
});

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [state, setState] = useState<State>(defaultState);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let fontSize = 16;
      let padding = 16;

      if (width < 600) {
        fontSize = 14;
        padding = 6;
      } else if (width < 1200) {
        fontSize = 14;
        padding = 12;
      } else {
        fontSize = 16;
        padding = 16;
      }

      setState((prevState) => ({
        ...prevState,
        fontSize,
        padding,
      }));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the state based on the initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
