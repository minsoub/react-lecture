import React from 'react';

const Products = (props) => {
    return <h1>Product{props.sortBy} => parameter : {props.match.params.id}</h1>;
}
export default Products;