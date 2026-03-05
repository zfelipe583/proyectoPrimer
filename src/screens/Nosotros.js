import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function MenuPrincipal({ navigation }) {
    
    const handleLogout = () => {
        navigation.navigate('Login'); 
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Encabezado con Logo */}
            <View style={styles.header}>
                <Text style={styles.title}>PIZZERIA DON RITO TECNM</Text>
                <Text style={styles.subtitle}>"El sabor de la tradición en cada rebanada"</Text>
            </View>

            {/* Imagen Ilustrativa */}
            <Image 
                source={{ uri: 'https://via.placeholder.com/150' }} // Reemplaza con tu logo local o URL real
                style={styles.logo} 
            />

            {/* Sección de Información */}
            <View style={styles.infoCard}>
                <Text style={styles.sectionTitle}>Nuestra Historia</Text>
                <Text style={styles.description}>
                    Fundada con el apoyo de la comunidad del TECNM, Pizzería Don Rito nace de la pasión por la cocina artesanal. 
                    Utilizamos ingredientes frescos y nuestra receta secreta de masa que nos ha hecho favoritos en la región.
                </Text>
                
                <Text style={styles.sectionTitle}>Horarios de Atención</Text>
                <Text style={styles.description}>Lunes a Sábado: 12:00 PM - 10:00 PM</Text>
                <Text style={styles.description}>Domingos: 2:00 PM - 9:00 PM</Text>
            </View>

            {/* Botón de Salir */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#d32f2f',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#555',
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 25,
        borderWidth: 2,
        borderColor: '#f4ce14',
    },
    infoCard: {
        width: '100%',
        backgroundColor: '#f9f9f9',
        padding: 20,
        borderRadius: 15,
        borderLeftWidth: 5,
        borderLeftColor: '#d32f2f',
        marginBottom: 30,
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    description: {
        fontSize: 15,
        color: '#666',
        lineHeight: 22,
        marginBottom: 10,
    },
    logoutButton: {
        backgroundColor: '#d32f2f',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginTop: 10,
    },
    logoutText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});