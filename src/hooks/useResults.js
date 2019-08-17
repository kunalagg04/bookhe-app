import React , { useState , useEffect } from 'react';
import yelp from '../api/yelp';


//copying everything related to yelp api from searchscreen.js
export default () => {

    const[results, setResults] = useState([]);
    const[errorMessage , setErrorMessage]=useState('');

    const searchApi = async (searchTerm) => {
       try{ const response = await yelp.get('/search',{
            params : {
                limit : 50,
                term : searchTerm,
                location : Ghaziabad
            }
        });
        //response.data has the json data.
        setResults(response.data.businesses);
    }
    catch(err){
        setErrorMessage("eRROR HAI BC")
    }
    }

    useEffect(() => {
        searchApi('pasta');
    } , []);

    //results,errormessage , searchApi are three things that are required in SearchScreen.js
    return [searchApi , results , errorMessage];

}