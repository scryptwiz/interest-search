import { View } from 'react-native';

export const InterestItemSkeleton = () => {
  return (
    <View className="flex-row items-center p-2.5">
      <View className="h-9 w-9 rounded-2xl bg-gray-300/50" />
      <View className="ml-3 h-4 flex-1 rounded-lg bg-gray-300/50" />
    </View>
  );
};
