import Mansory from 'components/Layout/Mansory';
import MansoryItem from 'components/Layout/MansoryItem';

import CreatePost from 'components/CreatePost/CreatePost';
import PostCard from 'components/PostCard/PostCard';

const Home = () => {
  return (
    <div className="home">
      <Mansory>
        <MansoryItem>
          <CreatePost></CreatePost>
        </MansoryItem>
        <MansoryItem>
          <PostCard></PostCard>
        </MansoryItem>
      </Mansory>
    </div>
  );
};

export default Home;
