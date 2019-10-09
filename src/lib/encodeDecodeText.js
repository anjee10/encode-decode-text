// Encode or Decode text based on action provided
// TODO: logic is correct for few input values like `encode`
export const encodeDecodeText = (text, action = 'encode') => {
  return text
    .split('')
    .map((letter, index) => {   
      return action === 'encode'
        ? String.fromCharCode(letter.charCodeAt(0) + (text.length - index))
        : String.fromCharCode(letter.charCodeAt(0) - (text.length - index));
    })
    .join('');  
}
