import React from 'react';
import Box from './Box';
import $ from 'jquery';
import Secbox from './Secbox';

export default class Gallery extends React.Component {
    
    constructor(){ 
    super();
    this.state = {
        products : [],
        articles: []

      }
    }
// First stage of the lifecycle
// this is a metod automaticly call before call the render!!!
    componentWillMount() {
        let that = this;
        $.get('http://localhost:3000/', function(data){
            //data.map is gonna check every line of the array(data) "Its like a forEach."  // and .map always ask for a return.
            let articles = data.map(function(pro, i) {
                return (
                    // The Key is used because of the React 
                    // and the Key thing is to alow to React to know that we have different boxes.
                    <Box key={i} item={pro}></Box>
                )
                

        })
        that.setState({articles: articles});
    })
                $.get('http://localhost:3000/products', function(data){
                    let products = data.map(function(opp, i) {
                return (
                    <Secbox key={i} item={opp}></Secbox>
                )
            })
            that.setState({products: products});
        })
   
}
// Second stage of the lifecycle
    render () {
        return (
            <div id="Gallery">
            <div id="Articles">
            {this.state.articles}
            </div>
            <div id="products">
            {this.state.products}
            </div>
            </div>
            
        )
    }
}