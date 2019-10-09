import React from 'react';

// Output component to show encoded / decoded string
// TODO: We can split this component for encoded and decoded string output
export default function Output(props) {
  return (
    <div>
      <label>
        {props.encodedText && (`Encoded String: ${props.encodedText}`)}
        {props.decodedText && (`Decoded String: ${props.decodedText}`)}
      </label>      
    </div>
  );
}
