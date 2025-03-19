export const fetchInterests = async (q: string, limit: number, from: number) => {
  const url = new URL('https://be-v2.convose.com/autocomplete/interests');
  url.searchParams.append('q', q);
  url.searchParams.append('limit', limit.toString());
  url.searchParams.append('from', from.toString());

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      Authorization: 'Jy8RZCXvvc6pZQUu2QZ2',
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Error fetching interests: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};
