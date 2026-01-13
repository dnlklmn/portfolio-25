import { createContext, useContext, useState, ReactNode } from "react";

interface TransitionState {
  isTransitioning: boolean;
  targetRoute: string | null;
  startTransition: (route: string) => void;
  endTransition: () => void;
}

const TransitionContext = createContext<TransitionState | undefined>(undefined);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetRoute, setTargetRoute] = useState<string | null>(null);

  const startTransition = (route: string) => {
    setTargetRoute(route);
    setIsTransitioning(true);
  };

  const endTransition = () => {
    setIsTransitioning(false);
    setTargetRoute(null);
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, targetRoute, startTransition, endTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within TransitionProvider");
  }
  return context;
}
