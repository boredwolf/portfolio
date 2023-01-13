
import React from "react";

const appContext = React.createContext({
    language: "FR",
    setLanguage: () => { }
});

export default appContext;
