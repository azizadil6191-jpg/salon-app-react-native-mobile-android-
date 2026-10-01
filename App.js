import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen'; 
import SignupScreen from './screens/SignupScreen';
import SignInScreen from './screens/SigninScreen';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import HairServicesScreen from './screens/HairServicesScreen';
import NailServicesScreen from './screens/NailServicesScreen';
import WaxingServicesScreen from './screens/WaxingServicesScreen';
import EyelashServicesScreen from './screens/EyelashServicesScreen';
import HairServicesDetailsScreenDetails from './screens/HairServicesScreenDetails';
import NailServiceScreenDetails from './screens/NailServicesScreenDetails';
import WaxingServicesScreenDetails from './screens/WaxingServicesScreenDetails';
import EyelashServicesScreenDetails from './screens/EyelashServicesScreenDetails';
import AppointmentScreen from './screens/AppointmentScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ReviewSummaryScreen from './screens/ReviewSummaryScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookmarksScreen from './screens/BookmarksScreen';
import EReceiptScreen from './screens/EReceiptScreen';
import BookingScreen from './screens/BookingScreen';
import ForReviewScreen from './screens/ForReviewScreen';
import Notification from './screens/Notification';
import ManageAppointmentScreen from './screens/ManageAppointmentScreen';
import RescheduleScreen from './screens/RescheduleScreen';
import EReceiptDisplay from './screens/EReceiptDisplay';
import SelectProfessionalScreen from './screens/SelectProfessionalScreen';
import SelectedServicesModal from './screens/SelectedServicesModal';
import ProfessionalSelectionModal from './screens/ProfessionalSelectionModal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HairServicesScreen" component={HairServicesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="NailServicesScreen" component={NailServicesScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="WaxingServicesScreen" component={WaxingServicesScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="EyelashServicesScreen" component={EyelashServicesScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="HairServicesScreenDetails" component={HairServicesDetailsScreenDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="NailServicesScreenDetails" component={NailServiceScreenDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="WaxingServicesScreenDetails" component={WaxingServicesScreenDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="EyelashServicesScreenDetails" component={EyelashServicesScreenDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} options={{headerShown: false}}/>
        <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ReviewSummaryScreen" component={ReviewSummaryScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}}/>
        <Stack.Screen name="BookmarksScreen" component={BookmarksScreen} options={{headerShown: false}} />
        <Stack.Screen name="EReceiptScreen" component={EReceiptScreen} options={{headerShown: false}} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} options={{headerShown: false}} />
        <Stack.Screen name="ForReviewScreen" component={ForReviewScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Notification" component={Notification} options={{headerShown: false}}/>
        <Stack.Screen name="ManageAppointmentScreen" component={ManageAppointmentScreen} options={{headerShown: false}}/>
        <Stack.Screen name="RescheduleScreen" component={RescheduleScreen} options={{headerShown: false}}/>
        <Stack.Screen name="EReceiptDisplay" component={EReceiptDisplay} options={{headerShown: false}}/>
        <Stack.Screen name="SelectProfessionalScreen" component={SelectProfessionalScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SelectedServicesModal" component={SelectedServicesModal} options={{headerShown: false}}/>
        <Stack.Screen name="ProfessionalSelectionModal" component={ProfessionalSelectionModal} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
