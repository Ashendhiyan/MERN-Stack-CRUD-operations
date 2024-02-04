
const username = encodeURIComponent('ashendhiyan');
const password = encodeURIComponent('ashendp');

module.exports = {
    mongoURI: `mongodb+srv://${username}:${password}@cluster0.dkttrgf.mongodb.net/?retryWrites=true&w=majority`,
    
  };