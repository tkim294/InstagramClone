import React from "react";
import { View, Text } from "react-native";
import ProfilePicture from "../../../ProfilePicture";
import { Entypo } from "@expo/vector-icons";

import styles from "./styles";

const Header = ({ imageUri, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.right}>
        <Entypo name="dots-three-vertical" size={16} />
      </View>
    </View>
  );
};

export default Header;
