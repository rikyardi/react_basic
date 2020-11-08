import React from 'react'
import propTypes from "prop-types"
import './Card.css'

const Card = (props) => {
    return(
        <div className="card">
            <img src={props.img} alt="product" style={{width: "100%"}} />
            <h1>{props.produk}</h1>
            <p className="price">{props.children}{props.harga}</p>
            <p>{props.desc}</p>
            <p><button>Add to Cart</button></p>
        </div> 
    )
}

Card.defaultProps = {
    img : "undefined",
    produk : "undefined",
    price : 0,
    desc : "..."
}

Card.propTypes = {
    img : propTypes.string,
    produk : propTypes.string,
    price : propTypes.number,
    desc : propTypes.string,
}
export default Card