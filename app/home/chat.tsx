import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Chats() {
  const router = useRouter();

  return (
    <View className="flex-1 p-5 bg-gray-100 justify-center items-center">
      <Text className="text-2xl font-bold mb-5">
        Welcome to Your TaskFlow Chat
      </Text>
    </View>
  );
}