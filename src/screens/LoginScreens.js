import React from 'react';
import { View, Text, Alert, Image, TextInput, TouchableOpacity, Button, ImageBackground, StyleSheet, BackHandler } from 'react-native';

export default function LoginScreens(props) {
    const { navigation } = props;
    const gotoMenuPrincipal = () => {
        navigation.navigate('MenuPrincipal');
    };
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const usuario = [
        {id: 1, email: '1', password: '1'},
        {id: 2, email: 'jose@gmail.com', password: '123456789'},
        {id: 3, email: 'maria@gmail.com', password: '987654321'}
    ];

    const handleLogin = () => {
        const user = usuario.find(u => u.email === email && u.password === password);
        if (user) {
            Alert.alert('Login successful');
            gotoMenuPrincipal();
        } else {
            Alert.alert('Login failed');
        }
    };

    const exitApp = () => {
        Alert.alert(
            "Cerrar Aplicación",
            "¿Seguro que quieres salir de Pizzería Don Rito?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancelado"),
                    style: "cancel"
                },
                { 
                    text: "Salir", 
                    onPress: () => BackHandler.exitApp() // Esto cierra la app en Android
                }
            ]
        );
    };

    return (
        <ImageBackground 
            source={{ uri: 'https://i.pinimg.com/222x/b0/e4/70/b0e4709859713f906f98a9f127217946.jpg' }}
            style={styles.background}
            resizeMode="cover"
        >
            {}
            <View style={styles.container}>
                <Text style={styles.welcomeText}>BIENVENIDO A PIZZERIA DON RITO TECNM</Text>
                
                {}
                <TextInput 
                    style={styles.input} 
                    placeholder="Email" 
                    placeholderTextColor="#ccc"
                    value={email} 
                    onChangeText={setEmail} 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Contraseña" 
                    placeholderTextColor="#ccc"
                    secureTextEntry={true}
                    value={password} 
                    onChangeText={setPassword} 
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <View style={styles.registerContainer}>
                    <Button title="Exit" color="#f4ce14" onPress={exitApp} />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        padding: 20,
    },
    welcomeText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        width: '85%',
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: 'white',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#f4ce14',
    },
    button: {
        backgroundColor: '#d32f2f',
        width: '85%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerContainer: {
        marginTop: 20,
    },
    Image: {
        width: 100,
        height: 100,
        marginBottom: 20
    }
});