/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    // Get all employees
    search: function(queryString){
        const searchURL = 'https://www.googleapis.com/books/v1/volumes?q=' + queryString;
        console.log(`Getting ${queryString}`)
        return axios.get(searchURL);
    },
    // Get books from our own api
    getBooks: function(bookObj){
        return {}
    }
};