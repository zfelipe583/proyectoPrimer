import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CustomerScreens(props) {
    const { navigation } = props;
    const gotoOrders = () => {
        navigation.navigate("Orders");
    }
        const goToMenu = () => {
        navigation.navigate("MenuPizza");
    };
    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Customer</Text>
            <TouchableOpacity style={styles.button} onPress={goToMenu}>
                <Text style={styles.buttonText}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={gotoOrders}>
                <Text style={styles.buttonText}>Orders</Text>
            </TouchableOpacity>



        </View>
    );
}
const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,


    },
    title:{
        color: "#181717",
        fontSize: 24
    }
};
