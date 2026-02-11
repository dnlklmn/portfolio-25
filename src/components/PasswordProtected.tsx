import { useState, useEffect, useContext } from "react";
import MyContext from "./Context";

interface PasswordProtectedProps {
  children: React.ReactNode;
  storageKey: string;
  correctPassword: string;
}

export default function PasswordProtected({
  children,
  storageKey,
  correctPassword,
}: PasswordProtectedProps) {
  const { state } = useContext(MyContext);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem(storageKey);
    if (unlocked === "true") {
      setIsUnlocked(true);
    }
  }, [storageKey]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsUnlocked(true);
      localStorage.setItem(storageKey, "true");
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div
      className="w-full h-full flex items-center justify-center font-Gentium"
      style={{ fontSize: state.fontSize }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center"
        style={{ gap: state.padding * 2 }}
      >
        <p className="font-Franklin uppercase font-semibold">
          This project is password protected
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          placeholder="Enter password"
          className="px-4 py-2 border-2 border-primary bg-transparent focus:outline-none focus:border-secondary"
          style={{ fontSize: state.fontSize }}
          autoFocus
        />
        {error && (
          <p className="text-red-500 text-sm">Incorrect password</p>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-primary hover:bg-secondary transition-colors font-Franklin uppercase font-semibold"
          style={{ fontSize: state.fontSize }}
        >
          Unlock
        </button>
      </form>
    </div>
  );
}
