import { Image, Text, View, ViewBase } from "react-native";
import "./global.css";
import { Link } from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-black">
            <Text className="text-3xl font-bold text-white">
                Welcome to your landing page!
            </Text>
            <View className="h-8" >

                <Link href="/signup">
                    <Text className="mt-4 text-lg text-blue-500">Go to Sign Up</Text>
                </Link>
                <Link href="/signin">
                    <Text className="mt-4 text-lg text-blue-500">Go to Sign In</Text>
                </Link>
            </View>
        </View>
    );
}