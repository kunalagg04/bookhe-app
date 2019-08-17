import React , { useState , useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { Text , View } from 'react-native';
import ResultList from '../components/ResultList';
import useResults from '../hooks/useResults';

const SearchScreen = () =>{

    const [term, setTerm] = useState('');
    const [searchApi , results , errorMessage] = useResults();
    
    const filterResultsByPrice = price => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
          return result.price === price;
        });
      };

    return(
        <View>
           
            <SearchBar 
               term={term}
               onTermChange={newTerm => setTerm(term)}
               onTermSubmit={() => searchApi(searchTerm)}/>
            {errorMessage?<Text>{errorMessage}</Text>:null}
            <Text>{results.length}</Text>
            <ResultList
              title="Cost Effective"
              results={filterResultsByPrice('$')} />
            <ResultList
              title="Bit Pricier"
              results={filterResultsByPrice('$$')} />
            <ResultList 
              title="Big Splender"
              results={filterResultsByPrice('$$$')}/>
        </View>
    )
}


export default SearchScreen;