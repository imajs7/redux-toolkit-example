import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';

const btn = {
    padding: '10px'
}

const wrapper = {
    margin: '40px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px'
}

const txtBox = {
    padding: '30px',
    textAlign: 'center'
}

const Home = () => {

    const  dispatch = useDispatch();
    const {quantity} = useSelector(state => state.qtyReducer)
    const {price} = useSelector(state => state.priceReducer)

    const increaseQty = () => {
        dispatch({
            type: "increment"
        })
    }
    const decreaseQty = () => {
        dispatch({
            type: "decrement"
        })
    }
    const setPriceHandle = (e) => {
        dispatch({
            type: "setPrice",
            payload: e.target.value
        })
    }

  return (
    <div>
        <div style={wrapper}>
            <button style={btn} onClick={decreaseQty}>-</button>
            
            {quantity}
            
            <button style={btn} onClick={increaseQty}>+</button>
        </div>

        <div style={txtBox}>
            <input type="text" name="" id="" onChange={e => setPriceHandle(e)} value={price}/>
        </div>

        <Footer/>
    </div>
  )
}

export default Home