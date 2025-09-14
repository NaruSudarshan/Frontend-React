import React from "react";

const UserContext = React.createContext()

export default UserContext;

/*
once context is created we create provider and wrap all components which want 
to use user context in it 
<UserContext>
    <Card/>
    <Dashboard />
    .
    .
    .
<UserContext/>    
*/