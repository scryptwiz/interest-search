import { View, TextInput } from 'react-native';
import { Search } from 'lucide-react-native';
import { useInterestStore } from '~/store/store';

export const SearchBar = () => {
  const { query, setQuery, setFocused } = useInterestStore();

  return (
    <View className="rounded-xl bg-white px-3 py-2">
      <View
        className="flex-row items-center"
        style={{
          shadowColor: '#ccc',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        }}>
        <Search size={20} color="#aaaaaa" />
        <TextInput
          className="flex-1 pl-3 text-base text-black"
          placeholder="Interests"
          placeholderTextColor="#aaa"
          onChangeText={setQuery}
          value={query}
          onFocus={() => setFocused(true)}
        />
      </View>
    </View>
  );
};
