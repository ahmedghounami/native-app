import { Text, TextInput, View, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
export default function SignUp() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-gray-100 p-6">
      <TouchableOpacity className="w-12 h-12 rounded-full bg-white justify-center items-center mb-4 shadow-sm">
        <Link href="/">
          <AntDesign name="left" size={24} color="black" />
        </Link>
      </TouchableOpacity>

      <View className="items-center gap-2 mb-6">
        <Text className="text-black text-3xl font-bold">Create your account</Text>
        <Text className="text-gray-600 text-center text-base">
          Sign up to get started and manage your tasks efficiently!
        </Text>
      </View>
      <View className="gap-4 mb-6">
        <TextInput
          placeholder="Full Name"
          className="bg-white px-6 py-4 rounded-full text-sm font-semibold shadow-sm"
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          className="bg-white px-6 py-4 rounded-full text-sm font-semibold shadow-sm"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="bg-white px-6 py-4 rounded-full text-sm font-semibold shadow-sm"
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          className="bg-white px-6 py-4 rounded-full text-sm font-semibold shadow-sm"
        />
      </View>
      <TouchableOpacity className="bg-blue-600 py-5 rounded-full mb-6 justify-center items-center"
        onPress={() => { router.push("/home"); }}
        >
        <Text className="text-white font-bold text-base">Create Account</Text>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center gap-2 mb-6">
        <View className="h-px bg-gray-400 flex-1 opacity-50" />
        <Text className="text-gray-600 text-sm text-center">Or sign up with</Text>
        <View className="h-px bg-gray-400 flex-1 opacity-50" />
      </View>
      <View className="flex-row justify-center items-center gap-8 mt-4">
        <TouchableOpacity className="w-16 h-16 bg-white rounded-full justify-center items-center shadow-sm">
          <Icon name="google" size={40} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity className="w-16 h-16 bg-white rounded-full justify-center items-center shadow-sm">
          <Icon name="github" size={40} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity className="w-16 h-16 bg-white rounded-full justify-center items-center shadow-sm">
          <Icon name="facebook" size={40} color="#4267B2" />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center gap-2 mt-16">
        <Text className="text-gray-600 text-sm">Already have an account?</Text>
        <TouchableOpacity>
          <Link href="/signin" >
            <Text className="text-blue-600 font-semibold text-sm">Sign In</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View >
  );
}
