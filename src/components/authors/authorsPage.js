'use strict';
import React, { Component } from 'react';
import AuthorApi from '../../api/authorapi';
class Authors extends Component{

constructor(){
 console.log('constructor called');
    super();
    this.state={
        authors:[]
    }
    
}
    componentWillMount() {
    this.setState({authors:AuthorApi.getAllAuthors()});    
    }

    render(){
        console.log('inside render function')
        
        function createAuthorRow(author) {
            console.log('createAuthorRow invoked'+author.id);
            //createAuthorRow(author);
         //   {
             //console.log("FNAME"+author.firstName);
                return (
                <tr key={author.id}>
                    <td><a href="{/#authors+author.id}">{author.id}</a></td>
                    <td>{author.firstName}{author.lastName}</td>
                </tr>);
           // }
        }

        return(
            <div><h1>Authors</h1>
            <table className="table">
                <thead>
                     <th>Id</th>
                    <th>Name</th>
                </thead>
                <tbody>
                {this.state.authors.map(createAuthorRow,this)}
                </tbody>
            </table>
            </div>
        );
    }
}



export default Authors;