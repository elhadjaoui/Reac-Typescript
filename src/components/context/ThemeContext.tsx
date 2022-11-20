import { type } from "@testing-library/user-event/dist/type";
import React,{ createContext } from "react";
import { theme } from "./Theme";

type ThemeContextProviderProps = {
    children: React.ReactNode
}
export  const ThemeContext = createContext(theme)

// export default ({ children }: ThemeContextProviderProps) => {
//     return (
//         <ThemeContext.Provider value={theme}> {children}</ThemeContext.Provider>
//     );
// };