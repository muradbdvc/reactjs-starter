/* eslint-disable react/prop-type */
import React from 'react';



function Product(props) {
    return (
        <div className='m-20 grid grid-cols-4 gap-1 '>
                {props.products.map((product , index) =>
                    <div className='bg-gray-200 m-16 p-6 shadow-xl w-26' key={index}>
                        <img src={product.image} className='w-full' height="180px" width="130px" />
                        <a href="#"><h2>{product.title}</h2></a>
                        <h2>{product.id}</h2>
                        <h2>{product.category}</h2>
                        <p><b>{product.price} TK</b></p>
                        <p>{product.description}</p>
                    </div>
                )}
            </div>
        
    );
}

export default Product;