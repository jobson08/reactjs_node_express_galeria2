import React, { Component } from 'react'

export class Testeapi extends Component {
    constructor(props){
        super(props);
    this.state = {  response: ""};
    }
      componentDidMount() {
        this.testeapi1()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
      }
    
      testeapi1 = async () => {
        const response = await fetch('/imagens');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
    
        return body;
        };
  render() {
    return (
      <div>
        <h1>{this.state.response}</h1>
      </div>
    )
  }
}

export default Testeapi
