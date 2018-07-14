import React from "react";
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window');

export default class componentName extends React.Component{
    render(){
        return (
            <View style={{ backgroundColor: '#181818', paddingBottom: 15 }} >
                <View style={{ width: width, height: 200, marginTop: 5, borderWidth: 1, 
                    borderRadius: 5, borderColor: '#dddddd'}} >
                    <Image 
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        source={this.props.thumbnail}
                    />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }} >
                    <View style={{ width: 50, height: 50 }} > 
                        <Image 
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover', 
                                borderRadius: 25 }}
                            source={this.props.user_icon}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
                        <View style={{ flex: 1, paddingLeft: 10, }} >
                            <Text 
                                numberOfLines={2}
                                style={{ fontSize: 17, color: '#fff', fontWeight: '100' }} >
                                {this.props.title}
                            </Text>
                            <Text style={styles.subtitleStyle} >
                                {this.props.subtitle}
                            </Text>
                            <View style={{ flexDirection: 'row' }} >
                                <Text style={{ color: '#fff', backgroundColor: '#f1c40f',
                                    paddingHorizontal: 5, borderRadius: 2, marginEnd: 5 }} >
                                    Ad
                                </Text>
                                <Text style={styles.subtitleStyle} >
                                    {this.props.channel_name}
                                </Text>
                            </View>
                            <Text style={{ color: '#3498db', marginTop: 5 }} >
                                Download Now
                            </Text>
                        </View>
                        <TouchableOpacity style={{ width: 18, marginTop: 10, }} >
                            <Icon name='dots-vertical' size={18} color={'#fff'} />  
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
    subtitleStyle: { 
        color: '#888'
    },
});