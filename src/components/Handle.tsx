import { View, Text, StyleSheet } from 'react-native';

const Handle =()=> {
    return (
        <View className="container" style={styles.container}>
          <Text style={styles.text}>Maine Handle aus Instagram ist G_artForce</Text>
        
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        marginLeft: 34,
        marginRight: 34, 
        marginBottom: 50,
        marginTop: 50,
        backgroundColor: 'white', // Color de fondo blanco
        borderRadius: 10, // Bordes redondeados
        padding: 20, // Espaciado interno
        shadowColor: '#000', // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
        shadowOpacity: 0.25, // Opacidad de la sombra
        shadowRadius: 3.5, // Difuminado de la sombra
        elevation: 5, // Elevación (solo para Android)
        alignItems: 'center', // Alineación horizontal
        justifyContent: 'center', // Alineación vertical
      },
      text: {
        fontSize: 18, // Tamaño del texto
        color: '#333', // Color del texto
      },
    });


export default Handle;