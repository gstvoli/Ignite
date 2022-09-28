import { useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';
import { Background } from './src/components/Background'

import './src/services/notificationsConfigs';
import { getPushNotifications } from './src/services/getPushNotificationToken';
import * as Notifications from 'expo-notifications';
import { Subscription } from 'expo-modules-core';


export default function App() {
  
  const getNotificationsListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotifications();
  });

  useEffect(() => {
    getNotificationsListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      if(getNotificationsListener.current && responseNotificationListener.current){
        Notifications.removeNotificationSubscription(getNotificationsListener.current);
        Notifications.removeNotificationSubscription(responseNotificationListener.current);
      }
    }
  },[])

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black  
  });

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}


