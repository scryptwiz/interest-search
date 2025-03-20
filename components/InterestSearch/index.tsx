import { useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
// import { fetchInterests } from '~/api/interest';
// import { useInterestStore } from '~/store/store';
import { SearchBar } from './SearchBar';
import { InterestDropdown } from './Dropdown';
import { useAppDispatch, useAppSelector } from '~/hooks/useStore';
import { rdxFetchInterest } from '~/store/slice/interestSlice';

export const InterestSearchInput = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.interest.query);
  const interests = useAppSelector((state) => state.interest.interests);
  const loading = useAppSelector((state) => state.interest.loading);
  const limit = 10;
  const from = 0;
  // const {
  //   interests,
  //   loading,
  //   query,
  //   setQuery,
  //   setInterests,
  //   appendInterests,
  //   setLoading,
  //   setPagesLeft,
  //   pagesLeft,
  //   isFocused,
  // } = useInterestStore();

  // const [from, setFrom] = useState(0);
  // const LIMIT = 10;

  // const filteredInterests = useMemo(() => {
  //   if (!query.trim()) return interests;
  //   return interests.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
  // }, [query, interests]);

  // const loadInterests = useCallback(
  //   async (isInitial = false) => {
  //     try {
  //       setLoading(true);
  //       const res = await fetchInterests(query, LIMIT, isInitial ? 0 : from);
  //       if (isInitial) {
  //         setInterests(res.autocomplete);
  //       } else {
  //         appendInterests(res.autocomplete);
  //       }
  //       setPagesLeft(res.pages_left);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  //   [query, from]
  // );

  // useEffect(() => {
  //   setFrom(0);
  //   loadInterests(true);
  // }, [query]);

  // const handleLoadMore = () => {
  //   if (!loading && pagesLeft > 0) {
  //     setFrom((prev) => prev + LIMIT);
  //     loadInterests();
  //   }
  // };

  useEffect(() => {
    dispatch(rdxFetchInterest({ q: query, limit, from }));
  }, [query]);

  return (
    <View className="w-full px-4 py-3">
      <SearchBar />
      <InterestDropdown
        data={interests}
        loading={loading}
        // onEndReached={handleLoadMore}
        // onPress={(item) => setQuery(item.name)}
      />
    </View>
  );
};
