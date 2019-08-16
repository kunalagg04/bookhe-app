import React , { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Text , View } from 'react-native'

const SearchScreen = () =>{

    const [term, setTerm] = useState('');

    return(
        <View>
            <SearchBar 
               term={term}
               onTermChange={newTerm => setTerm(newTerm)}/>
        </View>
    )
}


export default SearchScreen;