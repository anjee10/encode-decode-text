import { createStore } from 'redux';
import reducer from './reducers/encodeDecodeReducer';

export default createStore(reducer);