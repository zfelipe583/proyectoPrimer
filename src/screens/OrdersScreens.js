import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
export default function OrdersScreen(props){
    const {navigation} = props
    const [showPizzas, setShowPizzas] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(null);
    const [size, setSize] = useState("Mediana");
    const [quantity, setQuantity] = useState("1");
    const pizzas = [
        { id: 1, name: "Pepperoni" },
        { id: 2, name: "Hawaiana" },
        { id: 3, name: "Mexicana" }
    ];

    const sizes = ["Chica", "Mediana", "Grande"];

    const confirmOrder = () => {
        if (!selectedPizza) {
        alert("Selecciona una pizza");
        return;
        }

        navigation.navigate("OrdersD", {
        pizza: selectedPizza,
        size,
        quantity
        });
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Orders</Text>
        </View>
    );
};
const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
}
