import React, { useState , useContext} from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, ImageBackground } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { CartContext } from "./CartContext.js";

export default function OrdersScreen() {
    const { addToCart } = useContext(CartContext);
    const [selectedPizza, setSelectedPizza] = useState("pepperoni");
    const [size, setSize] = useState("mediana");
    const [quantity, setQuantity] = useState("1");

    const handleAdd = () => {
        if (!selectedPizza || !size) {
        Alert.alert("Aviso", "Por favor selecciona una pizza y el tamaño");
        return;
        }

        addToCart({
        id: Date.now(),
        name: selectedPizza,
        size: size,
        quantity: parseInt(quantity)
        });


        setSelectedPizza("pepperoni");
        setSize("mediana");
        setQuantity("1");
        Alert.alert("¡Listo!", "Pizza agregada a la orden");
};

return (

    <ImageBackground 
            source={{ uri: 'https://i.pinimg.com/236x/5e/fd/75/5efd754c144b755e56dc79d61491471a.jpg' }}
            style={styles.background}
            resizeMode="cover"
    >
    <View style={styles.container}>
    <Text style={styles.titulo}>Nueva Orden</Text>
    
    <Text style={styles.label}>Tipo de Pizza:</Text>
    <View style={styles.pickerContainer}>
        <Picker
            selectedValue={selectedPizza}
            onValueChange={(itemValue) => setSelectedPizza(itemValue)}
        >
            <Picker.Item label="Pepperoni" value="pepperoni" />
            <Picker.Item label="Hawaiana" value="hawaiana" />
            <Picker.Item label="Mexicana" value="mexicana" />
            <Picker.Item label="Vegetariana" value="vegetariana" />
        </Picker>
    </View>

    <Text style={styles.label}>Tamaño:</Text>
    <View style={styles.pickerContainer}>
        <Picker
            selectedValue={size}
            onValueChange={(itemValue) => setSize(itemValue)}
        >
            <Picker.Item label="Chica" value="chica" />
            <Picker.Item label="Mediana" value="mediana" />
            <Picker.Item label="Familiar" value="familiar" />
        </Picker>
    </View>

    <Text style={styles.label}>Cantidad:</Text>
    <TextInput 
        style={styles.input}
        placeholder="Ej. 2"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
    />

    <TouchableOpacity style={styles.boton} onPress={handleAdd}>
        <Text style={styles.textoBoton}>Guardar Orden</Text>
    </TouchableOpacity>
    </View>
    </ImageBackground>
);
}

const styles = StyleSheet.create({
        background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: '600'
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    boton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10
    },
    textoBoton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});