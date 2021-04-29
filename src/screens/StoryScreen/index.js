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

import storiesData from "../../data/stories";
import styles from "./styles";

const StoryScreen = () => {
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;

  useEffect(() => {
    const userId = route.params.userId;
    const userStories = storiesData.find(
      (storiesData) => storiesData.user.id === userId
    );
    setUserStories(userStories);
    setActiveStoryIndex(0);
  }, []);

  const navigateToNextUser = () => {
    navigation.push("Story", { userId: (parseInt(userId) + 1).toString() });
  };

  const navigateToPrevUser = () => {
    navigation.push("Story", { userId: (parseInt(userId) - 1).toString() });
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
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

  if (!userStories) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = userStories.stories[activeStoryIndex];

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
            source={{ uri: activeStory.imageUri }}
            style={styles.image}
          >
            <View style={styles.userInfo}>
              <ProfilePicture uri={userStories.user.imageUri} size={50} />
              <Text style={styles.userName}>{userStories.user.name}</Text>
              <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
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
