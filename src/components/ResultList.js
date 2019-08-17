import React from 'react';
import { View, Text , FlatList} from 'react-native';

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
                      <Text>
                          {props.results.name}
                      </Text>
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