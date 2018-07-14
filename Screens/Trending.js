import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

export default class Trending extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Trending</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});