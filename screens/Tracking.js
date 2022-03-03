import * as React from 'react';
import { Button, View, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import {LineChart, BarChart} from 'react-native-chart-kit';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Dimensions } from 'react-native';
import { screenWidth } from 'react-native-calendars/src/expandableCalendar/commons';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// I commented out this line because it's giving me compilation issues and managePanProps is not used anywhere
//import { managePanProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
 
const linedata = {
     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
     datasets: [
       {
         data: [100, 140, 60, 130, 100, 70, 120],
         strokeWidth: 2, // optional
       },
     ],
   };
 
const bardata = {
     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
     datasets: [
       {
         data: [6, 4, 7, 9, 5, 2, 5],
        
       },
     ],
   };
 
const styles = StyleSheet.create({
     container: {
       flex: 1,
       paddingTop: StatusBar.currentHeight,
     },
   });
 
export default function TrackingScreen() {
   return (
     <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'space-around' }}>
       <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollView}>
           <Calendar
           // Initially visible month. Default = now
           current={'2022-03-01'}
           // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
           minDate={'2021-10-01'}
           // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
           maxDate={new Date()}
           // Handler which gets executed on day press. Default = undefined
           onDayPress={day => {
             console.log('selected day', day);
           }}
           // Handler which gets executed when visible month changes in calendar. Default = undefined
           onMonthChange={month => {
             console.log('month changed', month);
           }}
           // Do not show days of other months in month page. Default = false
           hideExtraDays={true}
           // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
           // Handler which gets executed when press arrow icon left. It receive a callback can go back month
           onPressArrowLeft={subtractMonth => subtractMonth()}
           // Handler which gets executed when press arrow icon right. It receive a callback can go next month
           onPressArrowRight={addMonth => addMonth()}
 
           markingType={'period'}
           markedDates={{
             '2022-02-23':{startingDay:true, color: 'pink'},
             '2022-02-24':{color:'pink'},
             '2022-02-25':{endingDay:true, color:'pink'}
           }}
           />
           <Button title = "Daily report"
             onPress={() => {navigation.navigate('report')}}
           />
           <Text>
             Weight tracking
           </Text>
           <LineChart
             data={linedata}
             width={Dimensions.get('window').width} // from react-native
             height={200}
             yAxisSuffix={'kg'}
             fromNumber={150}
             fromZero={true}
             chartConfig={{
               backgroundColor: '#e26a00',
               backgroundGradientFrom: '#fb8c00',
               backgroundGradientTo: '#ffa726',
               decimalPlaces: 0, // optional, defaults to 2dp
               color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
               style: {
                 borderRadius: 16
               }
             }}
             bezier
             style={{
               marginVertical: 8,
               borderRadius: 16
             }}
           />
 
           <Text>
             Anxiety tracking
           </Text>
 
           <LineChart
             data={bardata}
             width={screenWidth} // from react-native
             height={200}
             fromNumber={10}
             fromZero={true}
             chartConfig={{
               backgroundColor: '#e26a00',
               backgroundGradientFrom: '#fb8c00',
               backgroundGradientTo: '#ffa726',
               decimalPlaces: 0, // optional, defaults to 2dp
               color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
               style: {
                 marginVertical:6,
                 borderRadius: 16
               }
             }}
             //bezier
             style={{
               marginVertical: 8,
               borderRadius: 16
             }}
            
           />
         </ScrollView>
       </SafeAreaView>
     </View>
   );
 }
 

