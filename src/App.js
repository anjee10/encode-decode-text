import React from 'react';
import { connect } from 'react-redux';
import Input from './components/Input';
import Output from './components/Output';

import './App.css';
import { handleEncoding, handleDecoding, updateCurrent } from './actions';

function App(props) {
  return (
    <div>
      <Input {...props} />
      <Output {...props} />
    </div>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  handleEncoding: (currentInput) => dispatch(handleEncoding(currentInput)),
  handleDecoding: (currentInput) => dispatch(handleDecoding(currentInput)),
  updateCurrent: (currentInput) => dispatch(updateCurrent(currentInput))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
