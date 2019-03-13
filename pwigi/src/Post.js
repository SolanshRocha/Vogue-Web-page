import React from 'react';
import $ from 'jquery';

export default class Post extends React.Component {
    constructor(){ 
        super();
        this.state = {
            Comments: []
        }
    }

    componentWillMount() {
    let that = this;
    $.get('http://localhost:3000/Comments', function(data){
        let comments = data.map(function(com, i){
            return (
                <p key={i}>{com.comments_body}</p>
            )
        })
        that.setState({Comments: comments });
    })
}
    render () {
        return (
            <div>
                <div id="CommentArea">
                    {this.state.Comments}
                </div>
                <form>
                 <input id="Pseudo" type="text" name="name" action="/action_page.php"></input>
                 <input id="Commentary" type="text" name="name" action="/action_page.php"></input>                    
                </form>
            </div>
            
            
        )
    }
}



