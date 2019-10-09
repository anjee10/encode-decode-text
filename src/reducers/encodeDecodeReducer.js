import { CURRENT_UPDATE, DECODE_TEXT, ENCODE_TEXT } from '../actions';
import { encodeDecodeText } from '../lib/encodeDecodeText';

const initState = {
  inputText: '',
  placeholder: 'input text here ...',
  encodedText: '',
  decodedText: ''
};

export default (state = initState, { type, payload }) => {  
  switch (type) {
    case ENCODE_TEXT:      
      return {
        ...state,
        encodedText: encodeDecodeText(payload, 'encode'),
        decodedText: '',
      };
    case DECODE_TEXT:
      return {
        ...state,
        encodedText: '',
        decodedText: encodeDecodeText(payload, 'decode'),
      };
    case CURRENT_UPDATE:
      return { ...state, inputText: payload }
    default:
      return state;
  }
}
