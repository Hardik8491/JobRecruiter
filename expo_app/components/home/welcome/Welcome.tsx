import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, TextInputProps, FlatList } from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";

import { SIZES, icons } from "../../../constants";
const jobTypes = ["Full-time", "Part-time", "Contractor"]
const Welcome: React.FC = () => {
  const router = useRouter();
  const [activeJobtype, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Hardik</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            defaultValue="Search for job"
            placeholder="What are you looking for?"
            onChangeText={() => { }}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image source={icons.search} style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <FlatList data={jobTypes}
          renderItem={({ item }) => (

            <TouchableOpacity
              style={styles.tab(activeJobtype, item)}
              onPress={() => router.navigate(`/search/${item}`)}
            >
              <Text style={styles.tabText(activeJobtype, item)}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap:SIZES.small}}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
