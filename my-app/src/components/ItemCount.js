
import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const sumar = () => {        	
		if (count < stock) {            
		setCount(count + 1);        
		}    
	};
    const restar = () => {        
		if (count > 1) {            
		setCount(count - 1);        
		}    
	};

    const comprar = () => {        
		if (count <= stock) {            
		onAdd(count);            
		setCount(initial);        
	    }
    };
    
    return (
        <div className="itemcount">
            <p className="pcount">Stock:{count}</p>
            <div className="buttoncount">
            <button onClick={restar}>Decrementar</button>
            <button onClick={sumar}>Incrementar</button>
            <button onClick={comprar}>Comprar</button>
            </div>
        </div>
    )
}

export default ItemCount