import React from 'react'

function formatmoney(monto) {
  return `$${monto.toLocaleString('es-AR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`
}

export default formatmoney

