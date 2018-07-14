import React from "react";
import { 
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet
} from "react-native";

import Navbar from '../components/Navbar';
import Ad from '../components/Ad';
import HomeCard from '../components/HomeCard';

export default class Home extends React.Component{
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <Navbar />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Ad 
                        thumbnail={require('../assets/comicstaan.jpg')}
                        user_icon={require('../assets/primevideo.jpg')}
                        title={'Hunt for India\'s next big comic'}
                        subtitle={'Now join Prime at Rs. 129/month'}
                        channel_name={'Amazon Prime Video India'}
                    />
                    <HomeCard 
                        thumbnail={require('../assets/thumbnail_0.jpg')}
                        user_icon={require('../assets/user_icon_3.jpg')}
                        title={'TVF Bachelors | S02E01 - Bachelors vs Jobs'}
                        subtitle={'The Viral Fever 5M views 7 months ago'}
                    />
                    <HomeCard 
                        thumbnail={require('../assets/thumbnail_1.jpg')}
                        user_icon={require('../assets/user_icon_1.jpg')}
                        title={'Padhaku Vs Last Bencher - Amit Bhadana'}
                        subtitle={'Amit Bhadana 10M views 4 days ago'}
                    />
                    <HomeCard 
                        thumbnail={require('../assets/thumbnail_2.jpg')}
                        user_icon={require('../assets/user_icon_2.jpg')}
                        title={'BB Ki Vines- | Maakichu Mere Bete |'}
                        subtitle={'BB Ki Vines 10M views 1 week ago'}
                    />
                    <HomeCard 
                        thumbnail={require('../assets/thumbnail_3.jpg')}
                        user_icon={require('../assets/user_icon_2.jpg')}
                        title={'BB Ki Vines- | Angry Masterji- Part 11 |'}
                        subtitle={'BB Ki Vines 13M views 1 month ago'}
                    />
                    <HomeCard 
                        thumbnail={require('../assets/thumbnail_4.jpg')}
                        user_icon={require('../assets/user_icon_3.jpg')}
                        title={'TVF\'s Yeh Meri Family E01 - Pukam Pukai | Watch E02 Now Streaming on TVFPlay'}
                        subtitle={'The Viral Fever 1.8M views 2 weeks ago'}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});