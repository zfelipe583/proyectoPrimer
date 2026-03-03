import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

export default function MenuPrincipalScreens(props) {
    const { navigation } = props;
    const goToEmployed = () => {
        navigation.navigate("OrdersD");
        
    };
    const goToCustomer = () => {
        navigation.navigate("Customer");
        
    };
    const goToUS = () => {
        
    };
    const exitApp = () => {

        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu Principal</Text>
            <View style={styles.byde}>
                
                <TouchableOpacity style={styles.button} onPress={goToEmployed}>
                    <Text style={styles.buttonText}>Employed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={goToCustomer}>
                    <Text style={styles.buttonText}>Customer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={goToUS}>
                    <Text style={styles.buttonText}>US</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonExitContainer}>
                <TouchableOpacity style={styles.buttonExit} onPress={exitApp}>
                    <Text style={styles.buttonText}>Exit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
    },
    byde:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
        marginBottom: 100,
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    buttonExitContainer: {
        marginTop: 'auto',
        width: '100%',
        alignItems: 'center',
        marginBottom: 30
    },
    buttonExit: {
        backgroundColor: "#cc4b10",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    title:{
        color: "#181717",
        fontSize: 24,
        alignItems: 'flex-start',
        paddingTop: 20
    }

};