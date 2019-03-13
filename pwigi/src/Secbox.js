import React from 'react';

export default class Secbox extends React.Component {
    render () {
        console.log(this.props.items)
        return (
            <div className="Producto">
            <h2>{this.props.item.products_category_name}</h2>
            <div className="ImgProd">
            <img src={process.env.PUBLIC_URL + this.props.item.products_image} alt="BEACH"/>
            
            </div>
            <div className="Subtitulo">
            <p>{this.props.item.products_description}</p>
            </div>
            </div>
        )
    }
}