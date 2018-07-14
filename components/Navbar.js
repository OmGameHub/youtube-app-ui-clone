import React from "react";
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Navbar extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.navbar} >
                    <View style={styles.logo} >
                        <Image 
                            style={{ width: null, height: null, flexGrow: 1, resizeMode: 'contain' }}
                            source={require('../assets/darkthemeyoutube.png')} />
                    </View>

                    <View style={{ flexDirection: 'row' }} >
                        <TouchableOpacity>
                            <Icon name='videocam' size={27} style={styles.icons} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='search' size={27} style={styles.icons} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='account-circle' size={27} style={styles.icons} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
    },
    navbar: { 
        paddingTop: StatusBar.currentHeight,
        height: 80,
        paddingBottom: 5,
        backgroundColor: '#323232', 
        elevation: 3,

        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 120,
        height: 23,
    },
    icons: {
        color: '#ecf0f1',
        padding: 5,
        marginLeft: 15,
        alignItems: 'center',
    }
});