export const ENCODE_TEXT = 'ENCODE_TEXT';
export const DECODE_TEXT = 'DECODE_TEXT';
export const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = value => ({
  type: CURRENT_UPDATE,
  payload: value
});

export const handleEncoding = currentInput => ({
  type: ENCODE_TEXT,
  payload: currentInput
});

export const handleDecoding = currentInput => ({
  type: DECODE_TEXT,
  payload: currentInput
});
