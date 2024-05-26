import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export default function UIProvider({ children }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showSearchBox, setShowSearchBox] = useState();

    const value = {
        drawerOpen,
        setDrawerOpen,
        showSearchBox,
        setShowSearchBox
    }
    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}