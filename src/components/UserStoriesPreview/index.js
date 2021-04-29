import React from "react";
import { View, FlatList } from "react-native";

import storiesData from "../../data/stories";

import Story from "../UserStoryPreview";
import styles from "./styles";

const Stories = () => {
  return (
    <FlatList
      data={storiesData}
      keyExtractor={({ user: { id } }) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({ item }) => <Story story={item} />}
    />
  );
};

export default Stories;
