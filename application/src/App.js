    import React from "react";
    import Header from "./Header";
    import Main from "./Main";
    import Sidebar from "./Sidebar";

    class App extends React.Component {
    
    render() {
        return (
        <div>
            <Header />
            <Sidebar />
            <Main />
            
        </div>
        );
    }
    }
export default App;