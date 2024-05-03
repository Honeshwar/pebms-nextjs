"use client";
import React, { createContext, useContext, useState } from "react";

//create context
const context = createContext({} as any);

//provide context
const CTA_ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [screen, setScreen] = useState(1); //1,2,3,4 --> (mobile form), (otp form), (detail form + thankyou text), (thankyou text on main screen)

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
};

//consume context
const useCTA_ContextValue = () => {
  return useContext(context);
};

export { CTA_ContextProvider, useCTA_ContextValue };
