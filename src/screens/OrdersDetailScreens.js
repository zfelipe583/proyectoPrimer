import React from "react";
import { View, TouchableOpacity , Text} from "react-native";

export default function OrdersDetailScreens (props){
    const {navigation} = props;
    const gotoexit = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };



    return(
        <View style={styles.container}>
            <Text style={styles.title}>Orders</Text>
            <View style={styles.buttonExitContainer}>
                <TouchableOpacity style={styles.buttonExit} onPress={gotoexit}>
                    <Text style={styles.buttonText}>Exit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = {
    container: {
        flex: 1,
        alignItems: "center",
    },
    buttonExit: {
        backgroundColor: "#cc4b10",
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
    },
    buttonExitContainer: {
        marginTop: 'auto',
        width: '100%',
        alignItems: 'center',
        marginBottom: 30
     },
};