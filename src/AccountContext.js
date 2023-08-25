import React, { createContext, useState, useContext } from "react";

const AccountContext = createContext();

export function AccountProvider({ children }) {
  const [account, setAccount] = useState("");

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  return useContext(AccountContext);
}
