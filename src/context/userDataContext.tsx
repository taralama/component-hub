import React, { createContext, PropsWithChildren, useState } from 'react';

interface UserData {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}
export const DarkContext = createContext<UserData>({
  isDark: false,
  setIsDark: () => {},
});

export const UserDataContextProvider = ({ children }: PropsWithChildren) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <DarkContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkContext.Provider>
  );
};
