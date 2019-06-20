import React from "react";
import { connect } from "react-redux";
import spinner from '../Infinity2.svg';
import logo from '../STARWARS.png';
import styled from 'styled-components';

import { CharacterList } from "../components";
import { fetchingAPI } from "../actions/index";
import { StylesFetching, StylesError } from '../styles/Styles';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchingAPI();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <StylesFetching>
          <img className="logo" src={logo} alt="logo" />
          <img className="spinner" src={spinner} alt="spinner" />
          <p>...data is fetching</p>
        </StylesFetching> 
      )      
    }
    if (this.props.error) {
      return (
        <StylesError>
          <p>‼️</p>
          <h2>{this.props.error}</h2>
          <p>Try again later 😅</p>
        </StylesError>
      )   
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  } 
}

export default connect(mapStateToProps,{ fetchingAPI })(CharacterListView);
