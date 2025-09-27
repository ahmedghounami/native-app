import { View, Text, TouchableOpacity, Image, Switch } from "react-native";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Settings() {
  const router = useRouter();

  return (
    <View className="flex-1 p-5 bg-gray-100">
      <View>
        <Text className="text-3xl font-extrabold">Settings</Text>
      </View>

      <View className="flex-col mt-10">
        <View className="border-b border-gray-300 pb-5 flex-row justify-between items-center"
        >
          <View className="flex-row items-center gap-4">
            <Image
              source={require("../../assets/images/profile.jpg")}
              className="w-16 h-16 rounded-full"
            />
            <View>
              <Text className="text-gray-500">Welcome</Text>
              <Text className="text-xl font-semibold">Mr. John Doe</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => router.push("/signin")}>
            <MaterialIcons name="logout" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-6 flex-col gap-5">
        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-gray-200"
          onPress={() => router.push("/home/profile")}
        >
          <View className="flex-row items-center gap-4"

          >
            <MaterialIcons name="person-outline" size={24} color="gray" />
            <Text className="text-lg font-medium">User Profile</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-gray-200"
          onPress={() => router.push("/home/changepassword")}
        >
          <View className="flex-row items-center gap-4">
            <MaterialIcons name="lock-outline" size={24} color="gray" />
            <Text className="text-lg font-medium">Change Password</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center py-4 border-b border-gray-200">
          <View className="flex-row items-center gap-4">
            <MaterialIcons name="help-outline" size={24} color="gray" />
            <Text className="text-lg font-medium">FAQs</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        <View className="flex-row justify-between items-center py-4 border-b border-gray-200">
          <View className="flex-row items-center gap-4">
            <MaterialIcons name="notifications-none" size={24} color="gray" />
            <Text className="text-lg font-medium">Push Notification</Text>
          </View>
          <Switch value={true} trackColor={{ true: "blue" }} />
        </View>
      </View>

      <View className="mt-10 p-4  bg-[#cde5eb] rounded-lg">
        <Text className="text-center text-gray-700 py-4 px-10">
          If you have any other query you can reach out to us.
        </Text>
        <TouchableOpacity className="mt-2">
          <Text className="text-center text-blue-600 font-semibold">
            WhatsApp Us
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
