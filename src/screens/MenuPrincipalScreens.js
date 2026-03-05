import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, StatusBar } from 'react-native';

export default function MenuPrincipalScreens(props) {
    const { navigation } = props;

    const goToEmployed = () => navigation.navigate("OrdersD");
    const goToCustomer = () => navigation.navigate("Customer");
    const goToUS = () => navigation.navigate("Nosotros");
    
    const exitApp = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <ImageBackground 
            source={{ uri: 'https://i.pinimg.com/222x/b0/e4/70/b0e4709859713f906f98a9f127217946.jpg' }}
            style={styles.background}
            resizeMode="cover"
        >
            <StatusBar barStyle="light-content" />
            {/* Capa de contraste para legibilidad */}
            <View style={styles.overlay}>
                
                <Text style={styles.title}>MENÚ PRINCIPAL</Text>
                <View style={styles.divider} />

                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.mainButton} onPress={goToEmployed}>
                        <Text style={styles.buttonText}>EMPLEADOS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.mainButton} onPress={goToCustomer}>
                        <Text style={styles.buttonText}>CLIENTES</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.mainButton, styles.usButton]} onPress={goToUS}>
                        <Text style={styles.buttonText}>NOSOTROS</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.exitButton} onPress={exitApp}>
                        <Text style={styles.exitButtonText}>CERRAR SESIÓN</Text>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Oscurece el fondo para resaltar botones
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        color: "#f4ce14", // Amarillo Queso
        fontSize: 32,
        fontWeight: '900',
        marginTop: 60,
        letterSpacing: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    divider: {
        width: 60,
        height: 4,
        backgroundColor: '#d32f2f', // Rojo Pizza
        marginTop: 10,
        borderRadius: 2,
    },
    menuContainer: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        gap: 20, // Espaciado entre botones
    },
    mainButton: {
        backgroundColor: '#d32f2f',
        paddingVertical: 18,
        borderRadius: 15,
        alignItems: 'center',
        borderBottomWidth: 4,
        borderBottomColor: '#a12323', // Efecto 3D
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    usButton: {
        backgroundColor: '#2e7d32', // Verde para "Nosotros" (colores de Italia)
        borderBottomColor: '#1b5e20',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    footer: {
        marginBottom: 40,
        width: '100%',
    },
    exitButton: {
        backgroundColor: "transparent",
        padding: 15,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#ffffff",
        alignItems: 'center',
    },
    exitButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    }
});