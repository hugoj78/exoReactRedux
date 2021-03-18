import axios from 'axios';

export const DISPLAY_CHARACTERS = 'DISPLAY_CHARACTERS';

export const displayCharacters = (payload) => ({
  type: DISPLAY_CHARACTERS,
  payload,
});

export const getCharacters = () => (dispatch) => {
  axios({
    method: 'get',
    url: 'http://hp-api.herokuapp.com/api/characters',
  })
    .then((res) => dispatch(displayCharacters(res.data)))
    .catch((err) => console.log(err));
};
