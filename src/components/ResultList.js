import React from 'react';
import { View, Text , FlatList , StyleSheet} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';

const ResultList = (props) => {

    return(
        <View>
            <Text style={styles.title}>
                {props.title}
            </Text>

            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data = {props.results}
              keyExtractor = {(result) => result.id}
              renderItem={(item) => {
                  return (
                      <ResultsDetail result={item}/>
                  )
              }}
            />
               
        </View>
    )

}

const styles = StyleSheet.create({
    title:{

        fontSize: 18
        
    }
})

export default ResultList;