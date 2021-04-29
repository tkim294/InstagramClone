import React from "react";
import { FlatList } from "react-native";

import Post from "../Post";
import Stories from "../UserStoriesPreview";

const data = [
  {
    id: "1",
    user: {
      imageUri:
        "https://resources.premierleague.com/photos/2020/09/07/67039a6c-3a5d-4e66-ba9c-fe5cfcd1db1d/GettyImages-1267679968.jpg?width=860&height=573",
      name: "Son Heung Min",
    },
    imageUri:
      "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
    caption: "Beautiful city #instagram",
    likesCount: 1457,
    postedAt: "6 minutes ago",
  },
  {
    id: "2",
    user: {
      imageUri:
        "https://resources.premierleague.com/photos/2020/09/07/67039a6c-3a5d-4e66-ba9c-fe5cfcd1db1d/GettyImages-1267679968.jpg?width=860&height=573",
      name: "Son Heung Min",
    },
    imageUri:
      "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
    caption: "Beautiful city #instagram",
    likesCount: 1457,
    postedAt: "6 minutes ago",
  },
  {
    id: "3",
    user: {
      imageUri:
        "https://resources.premierleague.com/photos/2020/09/07/67039a6c-3a5d-4e66-ba9c-fe5cfcd1db1d/GettyImages-1267679968.jpg?width=860&height=573",
      name: "Son Heung Min",
    },
    imageUri:
      "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
    caption: "Beautiful city #instagram",
    likesCount: 1457,
    postedAt: "6 minutes ago",
  },
];

const Feed = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
