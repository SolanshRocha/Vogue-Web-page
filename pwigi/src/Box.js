import React from 'react';

export default class Box extends React.Component {
    render () {
		console.log(this.props.item)
        return (
            <div className="Box">
				<h2>{this.props.item.articles_name}</h2>
				<div className="Lupitaimages">
				<img src={process.env.PUBLIC_URL + this.props.item.articles_photo1} alt="can't load"/>
				</div>
				<div className="Subtittle">
				<p>{this.props.item.articles_presentation}</p>
				</div>
				

            </div>
			//<img src={require('this.props.articles_photo1')} alt="impossible to load"></img> 
            
        )
    }
}




	/*componentWillMount() {
		fetch('http://localhost:3000/')
		.then(responses => {
			return responses.json();
		}).then(data => {
			let pictures = data.map((pic) => {
				return (
					<h2 key={pic}>{pic.articles_name}</h2>
					)
			})
			this.setState( {Tittle: pictures});
			console.log("tittle", this.state.Tittle)
		})
	}*/




//<img src="blablabla.png"></img>
