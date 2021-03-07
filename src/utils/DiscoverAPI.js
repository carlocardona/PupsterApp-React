import axios from 'axios';

const languages = ["JavaScript", "Python", "C", "Ruby", "Java", "PHP", "C#"];
// Export an object containing methods we'll use for accessing the random user API
export default {
  getUsersByLanguage: function(language) {
    return new Promise((resolve, reject) => {
      axios
        .get("https://dog.ceo/dog-api/")
        .then(res => {
          const images = res.data;
          const results = images.map(image => {
            return {
              image: image.message,
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  },
  // Return a Promise to simulate an async call
  getLanguagesList: function() {
    return new Promise(resolve => {
      resolve(languages);
    });
  }
};