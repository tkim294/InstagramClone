import React from "react";
import { View, FlatList } from "react-native";

import Story from "../Story";
import styles from "./styles";

const data = [
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oGeseEUEK1Ro2kXyI76nIURhf6TRmLkWVg&usqp=CAU",
    name: "Messi",
  },
  {
    imageUri:
      "https://resources.premierleague.com/photos/2020/09/07/67039a6c-3a5d-4e66-ba9c-fe5cfcd1db1d/GettyImages-1267679968.jpg?width=860&height=573",
    name: "Son",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVltQnND-HvU7nwHl-4UgGofYBqmcPIZosLg&usqp=CAU",
    name: "Ronaldo",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZiZETyT3LngbHuidYv_Lrn6UBwg1mfS1BzA&usqp=CAU",
    name: "Gullit",
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ name }) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({ item }) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

export default Stories;
