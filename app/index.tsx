import { View, Text, Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
export default function Index() {
    const router = useRouter();
    return (
        <View className="flex-1 items-center bg-white px-6">
            <View className="mt-10">
                <Text
                    className="text-5xl font-extrabold text-center"
                    style={{ color: "#0000FF" }}
                >
                    TaskFlow App
                </Text>
            </View>

            <View className="mt-5">
                <Text
                    className="text-center text-lg"
                    style={{ color: "#808080", lineHeight: 24 }}
                >
                    From managing tasks to sharing expertise, we empower teams to collaborate, learn, and grow together.
                </Text>
            </View>

            <Image
                source={require("../assets/images/todo.png")}
                resizeMode="contain"
                style={{
                    width: 350,
                    height: 350,
                    marginVertical: 20,
                }}
            />

            <TouchableOpacity className="flex-row relative bg-blue-600 rounded-full mt-6 px-20 py-6 justify-around items-center "
                onPress={() => router.push("/signup")}
            >
                <AntDesign name="arrowright" size={24} color="white" />
                <Text className="text-white font-extrabold text-lg"> Get Started</Text>

            </TouchableOpacity >
        </View >
    );
}


