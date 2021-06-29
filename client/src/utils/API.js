/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    // Get all employees
    getSearchResults: function(){
        return axios.get('');
        // const results = await fetch('https://randomuser.me/api/?inc=id,name,email,dob,phone,cell,picture&results=50')
		// 	.then(response => response.json())
        //     .then((json) => {
        //         return json;
        //     });
        // return results;
    },
    // Get books from our own api
    getBooks: function(bookObj){

    }
};