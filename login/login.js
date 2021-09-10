import React from "react";
import reactDom from "react-dom";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        return <div>Hello world.</div>
    }

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);