import axios from 'axios';

export default {
  search: function (res){

    const value = { image: res.message }
    console.log(value);
    return axios.get( value );
  }
};