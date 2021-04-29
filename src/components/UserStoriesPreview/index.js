import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listStorys } from "../../graphql/queries";

import storiesData from "../../data/stories";

import Story from "../UserStoryPreview";
import styles from "./styles";

const Stories = () => {
  const [stories, setStories] = useState([]);

  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStorys));
      // setStories(storiesData.data.listStorys.items);
      console.log(storiesData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <FlatList
      data={stories}
      keyExtractor={({ user: { id } }) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({ item }) => <Story story={item} />}
    />
  );
};

export default Stories;
