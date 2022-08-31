import { valueToPercent } from "@mui/base";
import React from "react";
import "./ItemCount.css";

class ItemCount extends React.Component {
    constructor() {
        super();
        this.state = {
            counter : 0,
        };

        this.handlerCounterUp = this.handlerCounterUp.bind(this);
        this.handlerCounterDown = this.handlerCounterDown.bind(this);
        this.handlerResetCounter = this.handlerResetCounter.bind(this);
   }

handlerCounterUp() {
    if(this.state.counter <10)
    this.setState({ counter: this.state.counter + 1});
        
}

handlerCounterDown() {
    if(this.state.counter >0)
    this.setState({ counter: this.state.counter - 1});
} 

handlerResetCounter() {
    this.setState({ counter: this.state.counter = 0});
}

render() {
    return (
        <div className="itemcount">
            <p className="pcount">Stock: {this.state.counter}</p>
            <div className="buttoncount">
            <button onClick={this.handlerCounterDown}>Decrementar</button>
            <button onClick={this.handlerCounterUp}>Incrementar</button>
            <button onClick={this.handlerResetCounter}>Comprar</button>
            </div>
        </div>
    )
}

}


export default ItemCount