// create context
import { createContext, useContext, useState } from "react";
const context = createContext({} as any);

// provide  context
function PledgeContextProvider({ children }: { children: React.ReactNode }) {
  const [screen, setScreen] = useState(1);

  return (
    <context.Provider
      value={{
        screen,
        setScreen,
      }}
    >
      {children}
    </context.Provider>
  );
}

// consume context
function usePledgeContext() {
  return useContext(context);
}

export { PledgeContextProvider, usePledgeContext };
