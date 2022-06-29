import React, { memo } from 'react'
import { bagCost } from '.'

function Total({ totalBags }) {
  return <div>
    <div className="totalBags">{totalBags} bag{getPlural(totalBags)}</div>
    <div className="totalCost">{stringifyCost(bagCost * totalBags)}</div>
  </div>
}

export default memo(Total)

const getPlural = (x) => x === 1 ? "" : "s"

const stringifyCost = (cost) => {
  const paddedTotal = cost.toString().padStart(3, '0')
  return `$${paddedTotal.slice(0, -2)}.${paddedTotal.slice(-2)}`
}