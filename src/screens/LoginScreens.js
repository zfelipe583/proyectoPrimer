import React from 'react';
import { View, Text, Alert, Image, TextInput, TouchableOpacity, Button} from 'react-native';

export default function LoginScreens(props) {
    const { navigation } = props;
    const gotoMenuPrincipal = () => {
        navigation.navigate('MenuPrincipal');
    };
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const usuario = [
        {id: 1, email: 'zfelipe', password: '123456'},
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
    return (
        
        <View style={styles.container}>
            <Text>BIENVENIDO A PIZZERIA DON RITO TECNM</Text>
            {/* <Image style={styles.Image}  /> */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={setPassword} />

            <Button title="Registrarse" onPress={() => Alert.alert('Registro no implementado')} />



        </View>

    );
};
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 10
    },
    Image: {
        width: 100,
        height: 100,
        marginBottom: 20
    }
};