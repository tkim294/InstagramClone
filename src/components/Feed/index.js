import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";

import Post from "../Post";
import Stories from "../UserStoriesPreview";
import { listPosts } from "../../graphql/queries";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    try {
      const postsData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postsData.data.listPosts.items);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
