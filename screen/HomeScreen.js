import React, { Component } from "react";
import { Text,View,StyleSheet, Image, TouchableOpacity, } from "react-native";

export default class HomeScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        {/*--Tttle.Welcome--*/}
        <Image
          style={{ width: '100%', height: 300}}
          source={ require('../assets/login-logo.png')}
          resizeMode='contain'
        />
        <Text style={{ fontSize: 50,fontWeight: 'bold'}}>Hello</Text>
        <Text style={{ 
          fontSize: 16,
          color: 'gray',
          textAlign: 'center',
          marginHorizontal:20,}}>Welcome to Login.A my app of designing login screen</Text>
    
      {/*-Social Icon-*/}
      <View style={{flexDirection: 'row', margin: 20, paddingVertical:20 }}>
        <TouchableOpacity style={{
          backgroundColor:'#0d47a1',
          padding: 10,
          width: 150,
          borderRadius: 30,
          marginHorizontal: 2,
        }}>
          <Text style={{ textAlign: 'center',color: 'fff', fontSize: 18}}>Login</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={{
          backgroundColor:'0d47a1',
          padding: 10,
          width: 150,
          borderRadius: 30,
          marginHorizontal: 2,
          borderLeftWidth: 1,
          borderEndWidth: '#0d47a1'
        }}>
          <Text style={{ textAlign: 'center',color: '0d47a1', fontSize: 18}}>Sign Up</Text>
        </TouchableOpacity>

      </View>

     {/*--Start Social Icon--*/} 
      <Text style={{fontSize: 16, marginTop: 10}}>Or via Social media</Text>
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <View style={{height: 50,
          width: 50,
           borderRadius: 50/2,
            backgroundColor: '#3f5ab5',
             justifyContent: 'center',
              alignItems: 'center',}}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'fff', marginBottom: 5,}}>f</Text>
        </View>
        <View style={{height: 50,
          width: 50,
           borderRadius: 50/2,
            backgroundColor: '#f44336',
             justifyContent:'center',
              alignItems: 'center'}}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'fff'}}>g</Text>
        </View>
        <View style={{height: 50,
          width: 50,
           borderRadius: 50/2,
            backgroundColor: '#1565c0',
             justifyContent: 'center',
              alignItems: 'center'}}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'fff'}}>in</Text>
        </View>
      </View>
     {/*--End Social Icon--*/}

      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{  
    flex: 1,
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})