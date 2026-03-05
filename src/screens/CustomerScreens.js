import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, StatusBar } from "react-native";

export default function CustomerScreens(props) {
    const { navigation } = props;
    
    const gotoOrders = () => {
        navigation.navigate("Orders");
    }
    
    const goToMenu = () => {
        navigation.navigate("MenuPizza");
    };

    return (
        <ImageBackground 
            source={{ uri: 'https://img.freepik.com/foto-gratis/camarero-sosteniendo-pizza-pepperoni-setas_140725-5246.jpg' }}
            style={styles.background}
            resizeMode="cover"
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.overlay}> 
                
                {}
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>ÁREA DE CLIENTES</Text>
                    <View style={styles.underline} />
                </View>

                {}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={[styles.button, styles.menuButton]} 
                        onPress={goToMenu}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonText}>Menu</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.button, styles.ordersButton]} 
                        onPress={gotoOrders}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonText}>Orders</Text>
                    </TouchableOpacity>
                </View>
        
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.45)', 
        justifyContent: "space-between", 
        alignItems: "center",
        paddingVertical: 80,
    },
    headerContainer: {
        alignItems: 'center',
    },
    title: {
        color: "#FFFFFF",
        fontSize: 34,
        fontWeight: '900',
        letterSpacing: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    underline: {
        width: 100,
        height: 5,
        backgroundColor: '#f4ce14',
        marginTop: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    button: {
        width: '100%',
        height: 60,
        borderRadius: 30, 
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    menuButton: {
        backgroundColor: "#d32f2f", 
    },
    ordersButton: {
        backgroundColor: "#ffffff", 
        borderWidth: 2,
        borderColor: "#d32f2f",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    ordersButtonText: {
        color: "#d32f2f",
    }
});
