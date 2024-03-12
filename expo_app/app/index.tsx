import { Stack, useRouter } from "expo-router";
import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: COLORS.lightWhite }}>
       <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite,padding:SIZES.medium},
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={undefined} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" handlePress={undefined} />
          ),
          headerTitle: "",
        }}
      />
       <ScrollView showsVerticalScrollIndicator={false} >
         <View style={{
          flex: 1,
          padding: SIZES.medium,
         
        }}>
          
        <Welcome/>
        <Popularjobs/>
         <Nearbyjobs/> 

         </View>
      </ScrollView>

    </SafeAreaView>

  
  );
};

export default Home;
