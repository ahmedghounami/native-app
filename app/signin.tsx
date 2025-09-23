import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SignIn() {
    return (
        <View className="flex-1 flex gap-4 items-center bg-gray-100 p-4">
            <Image
                source={require('../assets/images/sign.png')}
                style={{ width: 300, height: 300 }}
                resizeMode="contain"
            />
            <View className="items-center justify-center gap-2" >
                <Text className="text-2xl font-bold text-gray-800 ">Let's sign you in </Text>
                <Text className="text-base text-gray-600 ">Welcome back, you've been missed!</Text>
            </View>
            <View className="min-w-full flex-col justify-center gap-4 p-2 mt-2">
                <TouchableOpacity className="flex-row bg-white justify-center items-center rounded-full shadow-sm py-2">
                    <Icon name="google" size={40} color="#DB4437" />
                    <Text className="text-gray-600 text-base font-semibold px-4 py-2">Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row bg-white rounded-full justify-center items-center shadow-sm py-2">
                    <Icon name="github" size={40} color="#333" />
                    <Text className="text-gray-600 text-base font-semibold px-4 py-2">Sign in with GitHub</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row bg-white rounded-full justify-center items-center shadow-sm py-2">
                    <Icon name="facebook" size={40} color="#4267B2" />
                    <Text className="text-gray-600 text-base font-semibold px-4 py-2">Sign in with Facebook</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-center items-center gap-2">
                <Text className="h-px flex-1 bg-gray-400" />
                <Text className="text-gray-600 text-sm">Or</Text>
                <Text className="h-px flex-1 bg-gray-400" />
            </View>
            <TouchableOpacity className="bg-blue-600 py-5 rounded-full justify-center items-center min-w-full">
                <Text className="text-white font-bold text-base">Sign in with Email</Text>
            </TouchableOpacity>
            <View className="flex-row justify-center items-center gap-2">
                <Text className="text-gray-600 text-sm">Don't have an account?</Text>
                <TouchableOpacity>
                    <Text className="text-blue-600 text-sm font-semibold">Create an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
