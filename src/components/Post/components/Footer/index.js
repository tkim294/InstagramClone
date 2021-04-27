import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import {
  AntDesign,
  Fontisto,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";

import styles from "./styles";

const Footer = ({ likesCount: likesCountProp, caption, postedAt }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    setIsLiked(!isLiked);
    const amount = isLiked ? 1 : -1;
    setLikesCount(likesCount + amount);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <AntDesign name="heart" size={25} color={"#e73838"} />
            ) : (
              <AntDesign name="hearto" size={25} color={"#545454"} />
            )}
          </TouchableWithoutFeedback>
          <Fontisto name="comment" size={23} color={"#545454"} />
          <SimpleLineIcons name="paper-plane" size={25} color={"#545454"} />
        </View>
        <FontAwesome name="bookmark-o" size={25} color={"#545454"} />
      </View>

      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
