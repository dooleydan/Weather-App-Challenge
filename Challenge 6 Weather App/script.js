//create a list of constants and include an axios command
// Get form element and store it in a variable
// Get temperature el and store it in a var
// Add a submit event listener to the form
//     Prevent default form submission
//     Get city input elIf city input is not empty
//         Make API request to OpenWeatherMap using axios
//             If API request is successful
//             Get temp from API response
//             Update temp el w/ the temp
//         If API request fails show an err msg 
//         If city input is empty show err msg 
//use axios to make a GET request to the specified API URL
// method returns a promise that resolves with the response data upon successful req
//consol.log('current temp in ${CITY} is ${data.main.temp}Farenheit) should log the temp in the console
// catch error to handle a rejected promise 

const axios = require('axios');
const { response } = require('express')

const API_KEY = '';
const CITY = ' ';
const UNITS = 'imperial';
const API_URL = ''
