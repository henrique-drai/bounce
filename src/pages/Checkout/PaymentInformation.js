import React from 'react'

/**
 * This is nowhere near perfect, but I would use a 
 * library for the credit card input in a production environment.
 * If you select multiple characters to delete them or try to
 * copy/paste a number, it wont work.
 */

function PaymentInformation({ card, setForm }) {
  const handleChange = (e) => { }

  const handleKeyDown = (e) => {
    let { value, name } = e.target
    if (e.key === 'Backspace') {
      const strippedValue = value.trim()
      setForm(prev => ({ ...prev, [name]: strippedValue.substring(0, strippedValue.length - 1) }))
    }
    else if (parseInt(e.key)) {
      const newValue = value.length % 5 === 4 ? value + " " : value
      setForm(prev => ({ ...prev, [name]: newValue + e.key }))
    }
  }

  return (
    <div className="PaymentInformation">
      <div className="title">Payment Information:</div>
      <div className="textInput">
        <label>Card Details</label>
        <input
          type="text"
          value={card}
          name="card"
          autoFocus
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  )
}

export default PaymentInformation