import React from "react";

const UserCon = React.createContext({
    Auth: null as string | null,
    setAuth: (Auth: string | null) => { }
})

export { UserCon }