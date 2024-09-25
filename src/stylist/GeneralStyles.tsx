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
        width: 200,
        height: 200,
        borderRadius:80,
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
      textContainer: {
        marginLeft: 54,
        marginRight: 54,
        marginBottom: 8,
        marginTop: 8, 
        backgroundColor: 'white', // Color de fondo blanco
        borderRadius: 10, // Bordes redondeados
        padding: 20, // Espaciado interno
        elevation: 5, // Elevación (solo para Android)
        alignItems: 'center', // Alineación horizontal
        justifyContent: 'center', // Alineación vertical
        textAlign: 'justify',
      },
      inputContainer:{
        padding: 35,
      },
      textInput: {
        marginTop: 10,
        marginBottom: 10,
      },
      buttonContainer:{
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
      buttonLogin: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 180,
        paddingVertical: 1,
        paddingHorizontal: 1,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
      },
      buttonSignup: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 180,
        paddingVertical: 1,
        paddingHorizontal: 1,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      buttonModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#000',
        width: 80,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },

      productImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 5,
      },

      productCard: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      },

      productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
      },
      productPrice: {
        fontSize: 16,
        color: '#888',
      },
      productDescription: {
        fontSize: 14,
        color: '#666',
      },
      colorTitle: {
        fontSize: 16,
        marginBottom: 20,
      },
      colorContainer:{
        flexDirection:"row",
        flexWrap: "wrap",
        justifyContent: "center",
      },
      colorBox:{
        width: 60,
        height: 60,
        margin: 5,
        borderRadius: 30,
      },
      headerTodo:{
        fontSize: 28,
      }

    });


export default Styles;