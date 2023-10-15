import { React } from 'react';

const Product = ({data}) => {
    return (
        <div className='productContainer'>
            {data.map((item) => 
                <div className='product-card'>
                    <img src={item.recipe.image} alt='productImg' className='productImg' />
                    <h5>{item.recipe.label}</h5>
                    <p>Calories:{item.recipe.calories}</p>
                    <button className='buyNowBtn'>Buy</button>
                </div>
           )}
        </div>
    )
}

export default Product