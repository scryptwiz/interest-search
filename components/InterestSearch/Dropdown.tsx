import { View, FlatList, Text } from 'react-native';
import { InterestItem } from './InterestItem';
import { InterestItemSkeleton } from './InterestItemSkeleton';

type InterestDropdownProps = {
  data: Array<{
    name: string;
    color: string;
    avatar: string | null;
    id: number;
    type: string;
    match: number;
    existing: boolean;
  }>;
  loading: boolean;
  onEndReached: () => void;
  onPress: (item: InterestDropdownProps['data'][number]) => void;
};

export const InterestDropdown = ({
  data,
  loading,
  onEndReached,
  onPress,
}: InterestDropdownProps) => {
  return (
    <View
      className="mt-1 w-full rounded-b-xl rounded-t-xl bg-white"
      style={{
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      }}>
      {data.length === 0 && !loading ? (
        <Text className="p-4 text-center text-gray-500">No interests found</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, idx) => item.id + '-' + idx}
          renderItem={({ item }) => (
            <InterestItem
              name={item.name}
              color={item.color}
              avatar={item.avatar}
              onPress={() => onPress(item)}
            />
          )}
          ListFooterComponent={
            loading ? (
              <>
                {[...Array(3)].map((_, index) => (
                  <InterestItemSkeleton key={`skeleton-${index}`} />
                ))}
              </>
            ) : null
          }
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          style={{ maxHeight: 300 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
