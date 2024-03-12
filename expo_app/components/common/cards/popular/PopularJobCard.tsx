import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { checkImageURL } from "@/utils";
import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {

  return (
    <TouchableOpacity style={styles.container(selectedJob, item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text>{item.employer_name ||  " Associated Developer"}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title || "Web Development"}
        </Text>
        <Text style={styles.location}>{item.job_countery || "United State"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
