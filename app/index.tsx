import { SafeAreaView, Text } from 'react-native';
import { InterestSearchInput } from '~/components/InterestSearch';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <InterestSearchInput />
    </SafeAreaView>
  );
}
