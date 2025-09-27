import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import "../global.css";

export default function RootLayout() {
  return (
    <View className="flex-1 bg-gray-100">
      <Stack screenOptions={{ headerShown: false }} />
      <View className="flex-row justify-between p-6 items-center bg-white border-t border-gray-200">
        <Link href="/home">
          <View className="flex items-center">
            <MaterialIcons name="home" size={30} color="gray" />
            <Text className="text-xs font-semibold mt-1 text-gray-600">Home</Text>
          </View>
        </Link>
        <Link href="/home/tasks">
          <View className="flex items-center">
            <MaterialIcons name="check-circle" size={26} color="gray" />
            <Text className="text-xs font-semibold mt-1 text-gray-600">Tasks</Text>
          </View>
        </Link>
        <Link href="/home/chat">
          <View className="flex items-center">
            <MaterialIcons name="chat" size={26} color="gray" />
            <Text className="text-xs font-semibold mt-1 text-gray-600">Chat</Text>
          </View>
        </Link>
        <Link href="/home/community">
          <View className="flex items-center">
            <MaterialIcons name="people" size={26} color="gray" />
            <Text className="text-xs font-semibold mt-1 text-gray-600">community</Text>
          </View>
        </Link>
        <Link href="/home/settings">
          <View className="flex items-center">
            <MaterialIcons name="settings" size={26} color="gray" />
            <Text className="text-xs font-semibold mt-1 text-gray-600">Settings</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}
