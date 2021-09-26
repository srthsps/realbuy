import React from 'react'

const Category = ({categoryName,categoryImageUrl}) => {
    const catName = categoryName
    const catUrl =  categoryImageUrl
    return (
        <div className="card bg-white rounded shadow">
            <div className="card-head text-center">
                <h6 className="p-2 mt-3">{catName}</h6>
            </div>
            <div className="card-body d-flex justify-content-center">
               <img src={catUrl} width="140px" alt="" />   
            </div>
        </div>
    )
}

export default Category
