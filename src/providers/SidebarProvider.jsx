import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

export default ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState();

  return (
    <SidebarContext.Provider
      value={{
        sidebarIsOpen,
        setSidebarIsOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
