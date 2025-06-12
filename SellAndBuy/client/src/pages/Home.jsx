import Wrapper from '../assets/wrappers/Home';
import FilterBar from '../components/FilterBar';
import AdsCard from '../components/AdsCard';
import Pagination from '../components/Pagination';

import { toast } from 'react-toastify';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const createParams = rawParams => {
  const params = {};

  if (rawParams.search?.trim()) params.search = rawParams.search;
  if (rawParams.category && rawParams.category !== 'All')
    params.category = rawParams.category.toLowerCase();
  if (rawParams.page) params.page = rawParams.page;

  if (rawParams.minPrice) params['price[gte]'] = rawParams.minPrice;
  if (rawParams.maxPrice) params['price[lte]'] = rawParams.maxPrice;

  return params;
};

export const loader = async ({ request }) => {
  const rawParams = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  let endpoint = '/api/v1/ads/getAllAds?sort=-createdAt';
  if (rawParams.showMineOnly === 'on') endpoint = '/api/v1/ads/my-ads';

  const params = createParams(rawParams);
  //console.log(params);
  let user = null;

  try {
    const userRes = await axios.get('/api/v1/users/current-user', {
      withCredentials: true,
    });

    user = userRes.data.data.user;
  } catch (err) {
    console.log('Error from current-user(home)', err);

    user = null;
  }

  try {
    const { data } = await axios.get(endpoint, {
      params,
    });

    return {
      ...data,
      user,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg || 'Error loading ads');
    return {
      status: 'error',
      results: 0,
      totalResults: 0,
      numOfPages: 0,
      currentPage: 1,
      data: { ads: [] },
      user: null,
    };
  }
};

const Home = () => {
  const { data, totalResults, numOfPages, currentPage, user } = useLoaderData();

  const ads = data.ads;
  //const data = { ads: [] };

  return (
    <Wrapper>
      <FilterBar user={user} />
      <h5>
        {totalResults} ad{ads.length > 1 && 's'} found
      </h5>
      <AdsCard ads={ads} user={user} />
      {numOfPages > 1 && (
        <Pagination
          totalResults={totalResults}
          numOfPages={numOfPages}
          currentPage={currentPage}
        />
      )}
    </Wrapper>
  );
};

export default Home;
