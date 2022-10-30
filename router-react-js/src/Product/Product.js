import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Product = () => {
    const [param] = useSearchParams()
    console.log('param',param.get("name"));
  return (
    <div>Product</div>
  )
}

export default Product