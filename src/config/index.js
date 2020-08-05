const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://devflix-app.herokuapp.com';

export default { URL };
