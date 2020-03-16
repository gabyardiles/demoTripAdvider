import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    overlayStyle: {
      height:100,
      width:200,
      backgroundColor: '#fff',
      borderColor: '#00a680',
      borderWidth: 2,
      borderRadius:10,
    },
    view: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    viewBody: {
      marginLeft: 30,
      marginRight: 30
  },
  image: {
      height: 300,
      width: '100%',
      marginBottom: 40
  },
  title: {
      fontWeight: 'bold',
      fontSize: 19,
      marginBottom: 10,
      textAlign: 'center'
  },
  description: {
      textAlign: 'center',
      marginBottom: 20
  },
  viewBotton: {
      flex: 1,
      alignItems: 'center'
  },
  btnStyle: {
      backgroundColor: '#00a680'
  },
  containerStayle: {
      width: '70%'
  },
  overlayStyle: {
    height:100,
    width:200,
    backgroundColor: '#fff',
    borderColor: '#00a680',
    borderWidth: 2,
    borderRadius:10,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textLoding: {
      color: '#00a680',
      textTransform: 'uppercase',
      marginTop: 10,
  },
  viewLogo: {
    backgroundColor: '#fff'
  },
  logo: {
    width: '200%',
    height: 150,
    marginTop: 20,
    
  },
  viewContainerLogin: {
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40
  },
  dividerLogin: {
    backgroundColor: '#00a680',
    margin: 20
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  btnRegister: {
    color: '#00a680',
    fontWeight: 'bold'
  },
  viewForm: {
    marginLeft: 40,
    marginRight: 40
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  inputForm: {
    width: '100%',
    marginTop: 20
  },
  iconForm: {
    color: '#c1c1c1'
  },
  btnContainerForm: {
    marginTop: 20,
    width: '95%'
  },
  btnFormRegister: {
    backgroundColor: '#00a680'
  }
});

export default styles;
