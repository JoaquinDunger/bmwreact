import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/NavBar';
import ItemListContainer from './cardComponent/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  const onAdd = (cantidad)=>{
    console.log({cantidad})
  }
    return (
        <div className='header'>
          <BasicExample 
          title='BMW ARGENTINA'
          subtitle='Ventas' />
          <div className='CardsUser'>
            <ItemListContainer
              name= 'BMW CONVERTIBLE'
              description= 'Nuevo bmw descapotable'
              price= '12000 dolares'
              img='https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/bmw-z4-white-my19-index-1.png'
            />
            <ItemListContainer
              name= 'BMW 4x4'
              description= 'Nuevo bmw 4x4'
              price= '15000 dolares'
              img='https://images.finncdn.no/dynamic/1280w/2018/9/vertical-3/05/3/128/510/523_1153998559.jpg'
            />
            <ItemListContainer 
              name= 'BMW Coupe'
              description= 'Nuevo bmw Coupe'
              price= '16000 dolares'
              img='https://autos.yahoo.com.tw/p/r/w880/car-trim/November2020/8187ad4f1de4815b7881ab4421cd867e.jpeg'
            />
          </div>
          <div className='itemcount'>
          <ItemCount stock = {5} initial = {0} onAdd={onAdd}/>
          </div>
        </div>
  );
  }

export default App;
