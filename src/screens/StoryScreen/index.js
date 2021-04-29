import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  Text,
  Image,
  View,
  Dimensions,
  TextInput,
} from "react-native";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import ProfilePicture from "../../components/ProfilePicture";

import { API, graphqlOperation } from "aws-amplify";
import { listStorys } from "../../graphql/queries";

import storiesData from "../../data/stories";
import styles from "./styles";

const StoryScreen = () => {
  const [stories, setStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;

  useEffect(() => {
    fetchStories();
    const userId = route.params.userId;
    setActiveStoryIndex(0);
  }, []);

  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStorys));
      setStories(storiesData.data.listStorys.items);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= stories.length - 1) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get("window").width;
    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!stories || stories.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = stories[activeStoryIndex];

  return (
    <SafeAreaView style={styles.container}>
      <View
        onTouchStart={(e) => {
          handlePress(e);
        }}
      >
        <TouchableWithoutFeedback
          style={{ height: "100%" }}
          // onPress={handlePress(event)}
        >
          <ImageBackground
            source={{ uri: activeStory.image }}
            style={styles.image}
          >
            <View style={styles.userInfo}>
              <ProfilePicture uri={activeStory.user.image} size={50} />
              <Text style={styles.userName}>{activeStory.user.name}</Text>
              <Text style={styles.postedTime}>{activeStory.createdAt}</Text>
            </View>

            <View style={styles.bottomContainer}>
              <View style={styles.cameraButton}>
                <Feather name="camera" size={30} color={"#ffffff"} />
              </View>
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.textInput}
                  editable
                  placeholder="Send a message"
                  placeholderTextColor={"white"}
                />
              </View>
              <View style={styles.messageButton}>
                <SimpleLineIcons
                  name="paper-plane"
                  size={35}
                  color={"#ffffff"}
                />
              </View>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default StoryScreen;
