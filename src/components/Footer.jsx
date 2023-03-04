import React from 'react';
import { useSelector } from 'react-redux';

const txtLabel = {
    padding: '30px',
    textAlign: 'center'
}

const Footer = () => {
    const {price} = useSelector(state => state.priceReducer)
  return (
    <div style={txtLabel}>
        Text from store: {price}
    </div>
  )
}

export default Footer