import React , { useState , useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { Text , View } from 'react-native';
import yelp from '../api/yelp';

const SearchScreen = () =>{

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const[errorMessage , setErrorMessage]=useState('');

    const searchApi = async () => {
       try{ const response = await yelp.get('/search',{
            params : {
                limit : 50,
                term : term,
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


    return(
        <View>
            {errorMessage?<Text>{errorMessage}</Text>:null}
            <SearchBar 
               term={term}
               onTermChange={newTerm => setTerm(newTerm)}
               onTermSubmit={() => searchApi()}/>
        </View>
    )
}


export default SearchScreen;