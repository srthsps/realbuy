import React from 'react'
import {useLocation} from 'react-router-dom'

const Products = (props) => {
    const location = useLocation()
    const selectedCat = location.selectedCat.cat.catId
    console.log(selectedCat)
    return (
        <div>
            Products in category {selectedCat}
        </div>
    )
}

export default Products
