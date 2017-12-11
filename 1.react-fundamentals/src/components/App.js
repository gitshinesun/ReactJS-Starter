import React from 'react';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name:''
      };

      this.handClick = this.handClick.bind(this);
    }

    handClick(){
      this.setState({
        name:'Velopert'
      });
    }

    render(){
      return(
        
        <h1>Hello!!!!{this.state.name}</h1>
      );
    }
}

export default App;
