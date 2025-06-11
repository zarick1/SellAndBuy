import Wrapper from '../assets/wrappers/Home';
import FilterBar from '../components/FilterBar';
import AdsCard from '../components/AdsCard';
import Pagination from '../components/Pagination';

import { toast } from 'react-toastify';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  try {
    const { data } = await axios.get('/api/v1/ads/getAllAds?sort=-createdAt');
    return data.data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return [];
  }
};

const Home = () => {
  const { ads } = useLoaderData();
  //const data = { ads: [] };
  return (
    <Wrapper>
      <h2 className="page-title">All Ads</h2>
      <FilterBar />
      <AdsCard ads={ads} />
      <Pagination />
    </Wrapper>
  );
};

export default Home;
