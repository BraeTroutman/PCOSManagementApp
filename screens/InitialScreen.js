import { 
    View,
    Text,
    StyleSheet,
    Button,
    Alert,
    ScrollView,
    StatusBar,
    SafeAreaView
} from 'react-native';
import * as React from 'react';
import { TextInput } from 'react-native-gesture-handler';


export default class login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName:null,
            passWord:null,
            email:null,
            userStatus:null
        }
    }
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.ScrollView} vertical={true} horizontal={false}>
                    <Text style={{fontSize:30,fontWeight:'700',lineHeight:30,marginVertical:10}}>Welcome!{"\n"}
                    Please answer following questions to create your profile. </Text>
                    <Text style={{fontSize:20,fontWeight:'500',marginVertical:30}}>Please enter your email.</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='email'
                        onChangeText={(text)=>this.getUserName(text)}/>
                    <Text style={{fontSize:20,fontWeight:'500',marginVertical:30}}>Please set a username.</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='username'
                        onChangeText={(text)=>this.getPassWord(text)}/>
                    <Text style={{fontSize:20,fontWeight:'500',marginVertical:30}}>Please set your password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='password'
                        onChangeText={(text)=>this.getPassWord(text)}/>
                    <Text style={{fontSize:20,fontWeight:'500',marginVertical:20}}>What's your relationship with PCOS? </Text>
                
                        <Button
                        title="I am an experiencer"
                        onPress={() => this.getUserStatus("Experiencer")}
                        />
                        <Button
                        title="I want to be a mentor"
                        onPress={() => this.getUserStatus("Mentor")}
                        />
                        <Button
                        title="I have a friend or family with PCOS"
                        onPress={() => this.getUserStatus("Caregiver")}
                        />

                </ScrollView>
            </SafeAreaView>
            </View>
        )
    }
    getUserName(text){
        this.setState({
            userName:text
        })
    }
    getPassWord(text){
        this.setState({
            passWord:text
        })
    }
    getEmail(text){
        this.setState({
           email:text
        })
    }
    getUserStatus(text){
        this.setState({
           userStatus:text
        })
    }
    Login(){
        console.log("Username",this.state.userName)
        console.log("Password",this.state.passWord)
        console.log("Email",this.state.email)
        console.log("Status",this.state.userStatus)
    }
}
const gitstyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });

