import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY } from '../../utils/constants';

export const useFetch = (keyword: string) => {
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchGifByKeyword = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
          .split(' ')
          .join('')}&limit=1`
      );

      if (res.data.length > 0) {
        setUrl(res.data[0]?.images?.downized_medium?.url);
      } else {
        setUrl(
          'https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284'
        );
      }
    } catch (error) {
      console.log(error);
      setUrl(
        'https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284'
      );
    }
  };

  useEffect(() => {
    fetchGifByKeyword();
  }, [keyword]);

  return {
    loading,
    url,
  };
};
