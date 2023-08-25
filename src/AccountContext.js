import { createContext, useContext, useState } from "react";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [userAdd, setUserAdd] = useState(""); // Initialize userAdd state

  return (
    <AccountContext.Provider value={{ userAdd, setUserAdd }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  return useContext(AccountContext);
};
