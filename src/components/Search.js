import React, { Component } from "react";
import SearchIcon from 'react-feather/dist/icons/search';
import Card from './Card'
import './styles.css'

class Search extends Component {
    
  state = {
    searchInput: ''
  }
  
  
  updateText(event) {
    this.setState({
      searchInput: event.target.value
    })
  }

  SearchButton() {
    var url = "https://www.google.com/search?q=" + this.state.searchInput
    return (
      <a href={url}>
      <SearchIcon color="black" />
    </a>
    )
  }
  render() {
    return (
      <Card>
          <input 
            className="SearchInput" 
            value={this.state.searchInput} 
            onChange={this.updateText.bind(this)} 
          />
          
          {this.SearchButton()}
          
         
      </Card>
    );
  }
}
export default Search;
