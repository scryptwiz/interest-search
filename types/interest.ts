export interface Interest {
  id: number;
  name: string;
  type: string;
  match: number;
  color: string;
  avatar: string | null;
  existing: boolean;
}

export interface InterestStateType {
  interests: Interest[];
  loading: boolean;
  pagesLeft: number;
  query: string;
  isFocused: boolean;
}
