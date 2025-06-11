import Wrapper from '../assets/wrappers/Home';
import FilterBar from '../components/FilterBar';
import AdsCard from '../components/AdsCard';
import Pagination from '../components/Pagination';

const Home = () => {
  return (
    <Wrapper>
      <h2 className="page-title">All Ads</h2>
      <FilterBar />
      <AdsCard />
      <Pagination />
    </Wrapper>
  );
};

export default Home;
