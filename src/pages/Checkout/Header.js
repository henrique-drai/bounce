import React from 'react'
import { maxBags, minBags, storageAt } from '.'

function Header({ totalBags, setTotalBags }) {
  const handleAddBag = () => setTotalBags(prev => prev + 1)
  const handleRemoveBag = () => setTotalBags(prev => prev - 1)

  return (
    <div className="header">
      <div className='storageAtLabel'>Booking storage at:</div>
      <div className='storageAtValue'>{storageAt}</div>
      <div className="totalBags">
        <div className="label">Number of bags</div>
        <button
          type="button"
          disabled={totalBags <= minBags}
          onClick={handleRemoveBag}
        >-</button>
        <div className="number">{totalBags}</div>
        <button
          type="button"
          disabled={totalBags >= maxBags}
          onClick={handleAddBag}
        >+</button>
      </div>
    </div>
  )
}

export default Header