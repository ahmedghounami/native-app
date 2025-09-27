import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
export default function ChangePassword() {
    const router = useRouter();
    return (
        <View
            className="flex-1 bg-white"
        >
            <TouchableOpacity className="p-4  rounded-full" onPress={() => router.back()}>
                <MaterialIcons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            <Text
                className="text-3xl font-bold mb-10 text-center text-[#1E40AF]"
            >
                Change Password
            </Text>
            <View
                className="py-5 mx-6"
            >
                <Text className="text-white font-bold text-base">Change Password</Text>
                <Text className="ml-4 text-gray-400 font-bold mb-2">Current Password</Text>
                <TextInput
                    placeholder="Current Password"
                    secureTextEntry
                    className="border border-gray-400 p-4 rounded-full mb-4 min-w-full"
                />
                <Text className="ml-4 text-gray-400 font-bold mb-2">New Password</Text>
                <TextInput
                    placeholder="New Password"
                    secureTextEntry
                    className="border border-gray-400 p-4 rounded-full mb-4 min-w-full"
                />
                <Text className="ml-4 text-gray-400 font-bold mb-2">Confirm New Password</Text>
                <TextInput
                    placeholder="Confirm New Password"
                    secureTextEntry
                    className="border border-gray-400 p-4 rounded-full mb-4 min-w-full"
                />
            </View>
            <TouchableOpacity
                className="bg-blue-600 py-5 rounded-full mb-6 mx-6 justify-center items-center mt-10"
                onPress={() => {
                    router.push("/home/settings");
                }}
            >
                <Text className="text-white font-bold text-base">Save Changes</Text>
            </TouchableOpacity>

        </View>
    );
}