import React, { useContext } from "react";
import { View, TouchableOpacity, Text, FlatList, ImageBackground } from "react-native";
import { CartContext } from "./CartContext.js";

export default function OrdersDetailScreens(props) {
    const { navigation } = props;
    const { cart } = useContext(CartContext);

    const gotoexit = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <ImageBackground 
            source={{ uri: 'https://i.pinimg.com/236x/9b/18/e2/9b18e2d84235711419d37109321c91c6.jpg' }}
            style={styles.background}
            resizeMode="cover"
        >
        <View style={styles.container}>
            <Text style={styles.title}>Detalle de Órdenes</Text>

            <View style={styles.listContainer}>
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemCarrito}>
                            <Text style={styles.textoItem}>
                                {item.quantity}x Pizza {item.name} ({item.size})
                            </Text>
                        </View>
                    )}
                    ListEmptyComponent={<Text style={styles.vacio}>Aún no hay órdenes</Text>}
                />
            </View>

            {}
            <View style={styles.buttonExitContainer}>
                <TouchableOpacity style={styles.buttonExit} onPress={gotoexit}>
                    <Text style={styles.buttonText}>Exit</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    );
};

const styles = {
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        color: "#181717",
        fontSize: 24,
        marginTop: 40,
        fontWeight: 'bold'
    },
    listContainer: {
        flex: 1,
        width: '90%',
        marginTop: 20,
    },
    itemCarrito: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    textoItem: {
        fontSize: 16,
        textTransform: 'capitalize',
    },
    vacio: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
        color: 'gray'
    },
    buttonExitContainer: {
        marginTop: 'auto',
        width: '100%',
        alignItems: 'center',
        marginBottom: 30
    },
    buttonExit: {
        backgroundColor: "#cc4b10",
        padding: 15, 
        borderRadius: 5,
        width: '80%',
        alignItems: 'center'
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 'bold'
    }
};