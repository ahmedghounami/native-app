import { Text, TextInput, View, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SignUp() {
  return (
    <View className="flex-1 bg-gray-100 p-6">
      <TouchableOpacity className="w-12 h-12 rounded-full bg-white justify-center items-center mb-4 shadow-sm">
        <AntDesign name="left" size={24} color="black" />
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
      <TouchableOpacity className="bg-blue-600 py-5 rounded-full mb-6 justify-center items-center">
        <Text className="text-white font-bold text-base">Create Account</Text>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center gap-2 mb-6">
        <View className="h-px bg-gray-400 flex-1" />
        <Text className="text-gray-600 text-sm text-center">Or sign up with</Text>
        <View className="h-px bg-gray-400 flex-1" />
      </View>
      <View className="flex-row justify-center items-center gap-8 mb-8">
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
      <View className="flex-row justify-center items-center gap-2">
        <Text className="text-gray-600 text-sm">Already have an account?</Text>
        <TouchableOpacity>
          <Text className="text-blue-600 font-semibold text-sm">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
