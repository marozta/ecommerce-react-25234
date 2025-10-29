import React from 'react'

function formatmoney(monto) {
    return `$${(monto / 100).toFixed(2)}`
}

export default formatmoney