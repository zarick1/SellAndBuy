import Wrapper from '../assets/wrappers/Home';
import FilterBar from '../components/FilterBar';
import AdsCard from '../components/AdsCard';
import Pagination from '../components/Pagination';

import { toast } from 'react-toastify';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export const loader = async ({ request }) => {
  console.log(request.url);
  const rawParams = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const params = {};

  if (rawParams.search?.trim()) params.search = rawParams.search;
  if (rawParams.category && rawParams.category !== 'All')
    params.category = rawParams.category.toLowerCase();

  if (rawParams.minPrice) params['price[gte]'] = rawParams.minPrice;
  if (rawParams.maxPrice) params['price[lte]'] = rawParams.maxPrice;

  let endpoint = '/api/v1/ads/getAllAds?sort=-createdAt';
  if (rawParams.showMineOnly === 'on') endpoint = '/api/v1/ads/my-ads';

  //console.log(params);

  try {
    const { data } = await axios.get(endpoint, {
      params,
    });
    return data.data;
  } catch (error) {
    toast.error(error?.response?.data?.msg || 'Error loading ads');
    return [];
  }
};

const Home = () => {
  const { ads } = useLoaderData();
  //const data = { ads: [] };
  return (
    <Wrapper>
      <FilterBar />
      <AdsCard ads={ads} />
      <Pagination />
    </Wrapper>
  );
};

export default Home;
