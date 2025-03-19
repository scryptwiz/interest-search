import { Text, View, Image, TouchableOpacity } from 'react-native';

interface Props {
  name: string;
  color: string;
  avatar: string | null;
  onPress?: () => void;
}

export const InterestItem = ({ name, color, avatar, onPress }: Props) => {
  const bracketStart = name.indexOf('[');
  const hasBracket = bracketStart !== -1;
  const mainName = hasBracket ? name.slice(0, bracketStart).trim() : name;
  const synonym = hasBracket ? name.slice(bracketStart).trim() : '';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="flex-row items-center px-4 py-3">
      {avatar ? (
        <Image source={{ uri: avatar }} className="h-9 w-9 rounded-2xl bg-[#ccc]" />
      ) : (
        <View className="h-9 w-9 rounded-2xl" style={{ backgroundColor: color }} />
      )}
      <Text className="ml-3 text-base font-medium text-black" numberOfLines={1}>
        {mainName}{' '}
        {synonym.length > 0 && (
          <Text className="font-normal text-[#B0B0B0]">
            {synonym
              .slice(1, -1)
              .split(',')
              .map((syn, index, arr) => (
                <Text key={index}>
                  {syn.trim()}
                  {index < arr.length - 1 && ', '}
                </Text>
              ))}
          </Text>
        )}
      </Text>
    </TouchableOpacity>
  );
};
