import {Image, ImageBackground, SafeAreaView, StyleSheet, Text, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from "@expo/config-plugins/build/android";

export default function Index() {
    return (
        <SafeAreaView>
            <View style={styles.navbar}>
                <View style={styles.navbarTitleButton}>
                    <Text style={styles.navbarTitle}>Elements The Revival</Text>
                </View>
                <View style={styles.navbarButton}>
                    <Text style={styles.navbarText}>Wiki</Text>
                </View>
                <View style={styles.navbarButton}>
                    <Text style={styles.navbarText}>Forum</Text>
                </View>
                <View style={styles.navbarButton}>
                    <Text style={styles.navbarText}>Game Rules</Text>
                </View>
                <View style={styles.navbarButton}>
                    <Text style={styles.navbarText}>Contact</Text>
                </View>
                <View style={styles.navbarButton}>
                    <Text style={styles.navbarText}>Support Us</Text>
                </View>
            </View>
            <View style={{backgroundColor: '#321100'}}>
                <View style={styles.gamebar}>
                    <Text style={{
                        alignSelf: 'center',
                        fontFamily: 'dauphin',
                        color: '#EBF166',
                        fontSize: 24,
                        width: '25%',
                    }}>Version 5.3.3</Text>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end', width:'75%', justifyContent: 'flex-end', alignContent:'flex-end'}}>
                        <View style={styles.gamebarButton}>
                            <Image source={require('../assets/images/button.png')} resizeMode='contain' style={styles.gamebarButtonImage}>
                            </Image>
                        </View>
                        <View style={styles.gamebarButton}>
                            <Image source={require('../assets/images/button.png')} resizeMode='contain' style={styles.gamebarButtonImage}>
                            </Image>
                        </View>
                        <View style={styles.gamebarButton}>
                            <Image source={require('../assets/images/button.png')} resizeMode='contain' style={styles.gamebarButtonImage}>
                            </Image>
                        </View>
                    </View>

                </View>
                <View style={{
                    maxHeight: 997,
                    backgroundColor: '#321100',
                    paddingTop: 20,
                    flexDirection: 'row',
                    marginTop: -150
                }}>

                    <View style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                        width: '50%',
                        paddingHorizontal: 10,
                    }}>
                        <Image source={require('../assets/images/rightImg.png')} resizeMode='stretch' style={
                            {
                                maxWidth: 763,
                                aspectRatio: 1,
                                marginTop: 0,
                                width: '100%',
                            }}>

                        </Image>
                    </View>
                    <View style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        width: '50%',
                        paddingHorizontal: 10,
                    }}>

                        <Image source={require('../assets/images/rightImg.png')} resizeMode='stretch' style={
                            {
                                maxWidth: 763,
                                aspectRatio: 1,
                                width: '100%',
                                marginTop: 0,
                                transform: [
                                    {scaleX: -1}]
                            }}>
                        </Image>
                    </View>
                </View>

            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        flexDirection: "row",
        backgroundColor: '#321100',
        borderStyle: 'solid',
        borderColor: '#665533',
        borderBottomWidth: 2,
        paddingHorizontal: 120,
        paddingVertical: 16,
    },
    navbarButton: {
        alignItems: 'flex-end',
        alignContent: 'center',
        justifyContent: 'center',
    },
    navbarTitleButton: {
        flex: 1,
        alignItems: 'flex-start'
    },
    navbarText: {
        padding: 10,
        color: '#EBF166',
        margin: 10,
        alignItems: 'flex-end',
        fontSize: 18,
        fontFamily: 'gillSans',
    },
    navbarTitle: {
        flex: 1,
        padding: 10,
        color: '#EBF166',
        alignItems: 'flex-start',
        fontSize: 40,
        fontFamily: 'evanescence',
    },
    gamebar: {
        borderWidth: 2,
        borderRadius: 14,
        borderColor: '#D38030',
        height: 75,
        backgroundColor: '#411B00',
        width: '70%',
        alignSelf: 'center',
        marginTop: 75,
        zIndex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 15
    },
    gamebarButton: {
        alignItems: 'flex-end',
        alignSelf:'center',
        justifyContent: 'flex-end',
        height: 32,
        width: 180,
    },
    gamebarButtonImage: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})