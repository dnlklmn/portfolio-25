import React, { createContext, useState, useEffect, ReactNode } from "react";

export interface LayoutState {
  fontSize: number;
  basePadding: number;
  userPaddingOffset: number;
  padding: number; // Computed property for backwards compatibility
}

export interface LayoutContextProps {
  state: LayoutState;
  setState: React.Dispatch<React.SetStateAction<LayoutState>>;
}

const LayoutContext = createContext<LayoutContextProps>({
  state: { fontSize: 16, basePadding: 16, userPaddingOffset: 0, padding: 16 },
  setState: () => {},
});

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [internalState, setInternalState] = useState({
    fontSize: 16,
    basePadding: 16,
    userPaddingOffset: 0,
  });

  const state: LayoutState = {
    ...internalState,
    padding: internalState.basePadding + internalState.userPaddingOffset,
  };

  const setState: React.Dispatch<React.SetStateAction<LayoutState>> = (update) => {
    setInternalState((prev) => {
      const prevState = { ...prev, padding: prev.basePadding + prev.userPaddingOffset };
      const newState = typeof update === "function" ? update(prevState) : update;
      return {
        fontSize: newState.fontSize,
        basePadding: newState.basePadding,
        userPaddingOffset: newState.userPaddingOffset,
      };
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let padding = 16;

      if (width < 600) {
        padding = 6;
      } else if (width < 1200) {
        padding = 12;
      } else {
        padding = 16;
      }

      setInternalState((prev) => ({
        ...prev,
        basePadding: padding,
      }));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the state based on the initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <LayoutContext.Provider value={{ state, setState }}>{children}</LayoutContext.Provider>;
};

export default LayoutContext;
