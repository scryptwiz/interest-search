import { create } from 'zustand';

interface Interest {
  id: number;
  name: string;
  type: string;
  match: number;
  color: string;
  avatar: string | null;
  existing: boolean;
}

interface InterestStore {
  interests: Interest[];
  loading: boolean;
  pagesLeft: number;
  query: string;
  isFocused: boolean;
  setQuery: (q: string) => void;
  setInterests: (data: Interest[]) => void;
  appendInterests: (data: Interest[]) => void;
  setLoading: (loading: boolean) => void;
  setPagesLeft: (pages: number) => void;
  setFocused: (focused: boolean) => void;
  reset: () => void;
}

export const useInterestStore = create<InterestStore>((set) => ({
  interests: [],
  loading: false,
  pagesLeft: 0,
  query: '',
  isFocused: false,
  setQuery: (q) => set({ query: q }),
  setInterests: (data) => set({ interests: data }),
  appendInterests: (newItems) =>
    set((state) => {
      const existingNames = new Set(state.interests.map((i) => i.name.toLowerCase()));
      const filteredItems = newItems.filter((item) => !existingNames.has(item.name.toLowerCase()));
      return { interests: [...state.interests, ...filteredItems] };
    }),
  setLoading: (loading) => set({ loading }),
  setPagesLeft: (pages) => set({ pagesLeft: pages }),
  reset: () => set({ interests: [], loading: false, pagesLeft: 0 }),
  setFocused: (focused) => set({ isFocused: focused }),
}));
