import { useState } from "react";
import LayoutContext from "./LayoutContext";

const LayoutProvider = ({children})=>{
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    return (
        <LayoutContext.Provider value={{isSidebarOpen, setSidebarOpen}}>
            {children}
        </LayoutContext.Provider>
    );
}

export default LayoutProvider