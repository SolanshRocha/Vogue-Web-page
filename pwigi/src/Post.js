import React from 'react';
import $ from 'jquery';

export default class Post extends React.Component {
    constructor(){ 
        super();
        this.state = {
            Comments: []
        }
    }

    HandleSolansh() {
        let input = document.getElementById('Comentario').value 
        if (input !== '') {
            $.post('http://localhost:3000/comments', {comments : input}, function(response){
                console.log(response);
            })
        }
    }

    componentWillMount() {
    let that = this;
    $.get('http://localhost:3000/comments', function(data){
        let comments = data.map(function(com, i){
            return (
                <p key={i}>{com.comments_body}</p>
            )
        })
        that.setState({Comments: comments });
    })
}
    render () {
        console.log(this.state.Comments);
        return (
            <div className="Commentariohere">
                <div id="CommentArea">
                    {this.state.Comments}
                </div>
                <form className="lalaland" autoComplete="off">
                <div className="missingcomment">
                 <input id="Comentario" type="text" name="Comments"></input>
                 <button id="Commentbutt" onClick={() =>{this.HandleSolansh()}}>envoyer</button>  
                 </div>                   
                </form>
            </div>
            
            
        )
    }
}



