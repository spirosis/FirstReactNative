import { StyleSheet } from 'react-native';

    
const Styles = StyleSheet.create({
      container: {
        marginLeft: 34,
        marginRight: 34,
        marginBottom: 8,
        marginTop: 8, 
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
      titleName:{
        fontSize: 28,
        color: 'red',

      },
      text: {
        fontSize: 18, // Tamaño del texto
        color: '#333', // Color del texto
      },
      buttonText: {
        fontSize: 18, // Tamaño del texto
        color: 'pink', // Color del texto
        marginLeft: 34,
        marginRight: 34,
        marginBottom: 8,
        marginTop: 8, 
        backgroundColor: 'black', // Color de fondo blanco
        borderRadius: 10, // Bordes redondeados
        padding: 20, // Espaciado interno
        shadowColor: '#000', // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
        shadowOpacity: 0.25, // Opacidad de la sombra
        shadowRadius: 3.5, // Difuminado de la sombra
        elevation: 5, // Elevación (solo para Android)
        alignItems: 'center', // Alineación horizontal
        justifyContent: 'center',
        
      },

      button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 320,
        paddingVertical: 1,
        paddingHorizontal: 1,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },

      cardContainer: {
        flex: 1,
      },
      fonts: {
        marginBottom: 8,
      },
      user: {
        flexDirection: 'row',
        marginBottom: 6,
      },
      image: {
        width: 30,
        height: 30,
        marginRight: 10,
      },
      name: {
        fontSize: 16,
        marginTop: 5,
      },
      circularImage:{
        width: 100,
        height: 100,
        borderRadius:50,
      },

      buttonHitMe: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 180,
        paddingVertical: 1,
        paddingHorizontal: 1,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'grey',
      },
      textHitMe: {
        color: 'white',
      },

    });


export default Styles;