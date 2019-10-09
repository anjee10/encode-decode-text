import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEncodeClick = this.handleEncodeClick.bind(this);
    this.handleDecodeClick = this.handleDecodeClick.bind(this);
  }

  handleInputChange = evt => {
    const val = evt.target.value;
    this.props.updateCurrent(val);
  }

  handleEncodeClick = () => {
    this.props.handleEncoding(this.props.inputText);
  }

  handleDecodeClick = () => {
    this.props.handleDecoding(this.props.inputText);
  }

  render() {
    return (
      <div>
        <div>
            <label>
              Enter word to encode / decode:
              <br />
              <input type="text" onChange={this.handleInputChange} placeholder={this.props.placeholder} />
            </label>
          </div>
          <div>&nbsp;</div>
          <div>
            <button onClick={this.handleEncodeClick}>Encode</button>&nbsp;&nbsp;
            <button onClick={this.handleDecodeClick}>Decode</button>
          </div>
      </div>
    );
  }
}
