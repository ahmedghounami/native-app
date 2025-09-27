import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Profile() {
    const router = useRouter();
    return (
        <View className="flex-1 bg-white ">
            <TouchableOpacity className="p-4  rounded-full" onPress={() => router.back()}>
                <MaterialIcons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            <View className="items-center relative">
                <Text className="text-2xl font-semibold">User Profile</Text>
                <Image
                    source={require("../../assets/images/profile.jpg")}
                    className="border-gray-400 border-4 w-40 h-40 rounded-full mt-6"
                />
                <MaterialIcons name="camera-alt" size={22} color="black" className="absolute top-48 bg-white p-2 border-2 border-gray-400 rounded-full" />
            </View>
            <View className=" px-6 mt-10 flex-col justify-center ">
                <Text className="ml-4 text-gray-400 font-bold mb-2">Full Name</Text>
                <TextInput
                    placeholder="John Doe"
                    className="border border-gray-400 p-4 rounded-full mb-4"
                />
                <Text className="ml-4 text-gray-400 font-bold mb-2">Email</Text>
                <TextInput
                    placeholder="johndoe0@gmail.com"
                    keyboardType="email-address"
                    className="border border-gray-400 p-4 rounded-full mb-4"
                />
                <Text className="ml-4 text-gray-400 font-bold mb-2">Phone Number</Text>
                <TextInput
                    placeholder="+212 634 567 890"
                    keyboardType="phone-pad"
                    className="border border-gray-400 p-4 rounded-full mb-4"
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