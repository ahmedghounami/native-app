import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-bold text-gray-900">Welcome, Ahmed 👋</Text>
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-xl">
          <Text className="text-white font-semibold">+ New Task</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Section */}
      <View className="bg-white p-4 rounded-2xl shadow mb-6">
        <Text className="text-lg font-semibold text-gray-800 mb-2">Your Progress</Text>
        <Text className="text-sm text-gray-500 mb-4">5/10 tasks completed</Text>
        <View className="w-full h-3 bg-gray-200 rounded-full">
          <View className="w-1/2 h-3 bg-blue-500 rounded-full"></View>
        </View>
      </View>

      {/* Trending Questions */}
      <View className="mb-6">
        <Text className="text-lg font-semibold text-gray-800 mb-3">🔥 Trending Questions</Text>
        <View className="bg-white p-4 rounded-2xl shadow mb-3">
          <Text className="text-gray-900 font-medium">How do I manage deadlines better?</Text>
          <Text className="text-gray-500 text-sm mt-1">12 answers · 50 upvotes</Text>
        </View>
        <View className="bg-white p-4 rounded-2xl shadow mb-3">
          <Text className="text-gray-900 font-medium">Best way to track team tasks?</Text>
          <Text className="text-gray-500 text-sm mt-1">8 answers · 30 upvotes</Text>
        </View>
      </View>

      {/* Chat Section */}
      <View>
        <Text className="text-lg font-semibold text-gray-800 mb-3">💬 Recent Chats</Text>
        <View className="bg-white p-4 rounded-2xl shadow mb-3">
          <Text className="text-gray-900 font-medium">Hamza Boudar</Text>
          <Text className="text-gray-500 text-sm mt-1">“Let’s discuss the new feature idea…”</Text>
        </View>
        <View className="bg-white p-4 rounded-2xl shadow mb-3">
          <Text className="text-gray-900 font-medium">Mehdi Kibous</Text>
          <Text className="text-gray-500 text-sm mt-1">“I fixed the bug, check it out!”</Text>
        </View>
      </View>
    </ScrollView>
  );
}
