import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      keyword:'',
      contactData:[
        {name:'Abet', phone:'010-0000-0001'},
        {name:'Bill', phone:'010-0000-0002'},
        {name:'Chalie', phone:'010-0000-0003'},
        {name:'john', phone:'010-0000-0005'}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      keyword: e.target.value
    });
  }

  render(){
    const mapToComponent = (data) =>{
      data.sort();
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase()
                .indexOf(this.state.keyword) > -1;
        }
      );
      return data.map((contact, i) => {
        return (<ContactInfo contact={contact} key={i}/>);
      })
    }

    return(
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="Search"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        {mapToComponent(this.state.contactData)}
      </div>
     );
  }
}
