import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert, Button } from 'react-native';

const PIZZAS = [
    {
        id: '1',
        nombre: 'Pepperoni',
        descripcion: 'Doble porción de pepperoni con mozzarella fundido.',
        precio: '',
        imagen: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=200&auto=format&fit=crop'
    },
    {
        id: '2',
        nombre: 'Hawaiana',
        descripcion: 'Jamón premium, piña miel y un toque de cereza.',
        precio: '',
        imagen: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=200&auto=format&fit=crop'
    },
    {
        id: '3',
        nombre: 'Mexicana TECNM',
        descripcion: 'Chorizo, jalapeños, cebolla y frijoles bayos.',
        precio: '',
        imagen: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=200&auto=format&fit=crop'
    },
    {
        id: '4',
        nombre: 'Vegetariana',
        descripcion: 'Salami, tocino, jamón y salchicha italiana.',
        precio: '',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8oeMKwm7hkiBJasqT5GcwOwXxjq-Q6R1Tg&s'
    },
];

export default function MenuPizzas({ navigation }) {
    
    const renderPizza = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.pizzaImage} />
            <View style={styles.infoContainer}>
                <Text style={styles.pizzaName}>{item.nombre}</Text>
                <Text style={styles.pizzaDesc}>{item.descripcion}</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>{item.precio}</Text>

                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Nuestras Especialidades</Text>
            <FlatList
                data={PIZZAS}
                renderItem={renderPizza}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listPadding}
            />
            <Button title="Volver al Inicio" onPress={() => navigation.goBack()} color="#d32f2f" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingTop: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#d32f2f',
        marginBottom: 15,
    },
    listPadding: {
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        marginBottom: 15,
        overflow: 'hidden',
        elevation: 4, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    pizzaImage: {
        width: 100,
        height: 100,
    },
    infoContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    pizzaName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    pizzaDesc: {
        fontSize: 12,
        color: '#666',
        marginVertical: 4,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2e7d32',
    },
    addButton: {
        backgroundColor: '#f4ce14',
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    addButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
    },
});