import { createContext, useState } from "react";

export const WindowPopupContext = createContext({
  isWindowPopup: false,
  setWindowPopup: () => {},
});

export const WindowPopupProvider = ({ children }) => {
  const [isWindowPopup, setWindowPopup] = useState(false);

  const value = {
    isWindowPopup,
    setWindowPopup,
  };

  return (
    <WindowPopupContext.Provider value={value}>
      {children}
    </WindowPopupContext.Provider>
  );
};
