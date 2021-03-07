import axios from 'axios';


export const DiscoverAPI = () => async (dispatch) => {
  const base_url = 'https://dog.ceo/api/breeds/image/random';

  const loadImage = await axios.get(e);

  dispatch({
    type: "GET_DOGS",
    payload: {
      image: loadImage.message,
    }
  })

}
