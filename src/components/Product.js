import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

export default function Product({ product }) {
	return (
		<div className='col-md-3 m-3 card p-2 text-start'>
			<div>
				<Link className='ecd' to={`product/${product.id}`}>
					<img src={product.image} className='img-fluid' alt={product.name} />
					<h1>{product.name}</h1>
					<StarRatings
						rating={product.rating}
						starRatedColor='orange'
						numberOfStars={5}
						readonly={true}
						starDimension='15px'
						starSpacing='2px'
					/>

					<h1>Price: {product.price}</h1>
				</Link>
			</div>
		</div>
	);
}
