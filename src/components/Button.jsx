import React from 'react';

const Button = ({ bgColor, Color, size, text, borderRadius }) => {
  return (
    <button type="button" style={{ backgroundColor: bgColor, Color, borderRadius }} className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </button>
  )
}

export default Button