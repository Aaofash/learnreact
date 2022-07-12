import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import "./style.css"


function App() {
    return(
        <div className="page-body">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));

