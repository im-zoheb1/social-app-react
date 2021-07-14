import Mansory from 'components/Layout/Mansory';
import MansoryItem from 'components/Layout/MansoryItem';

import CreatePost from 'components/CreatePost/CreatePost';
import PostCard from 'components/PostCard/PostCard';

import posts from 'js/database/posts';

const Home = () => {
  const getPosts = posts.map((post) => {
    return (
      <MansoryItem key={post.id}>
        <PostCard post={post}></PostCard>
      </MansoryItem>
    );
  });

  return (
    <div className="home">
      <Mansory>
        <MansoryItem>
          <CreatePost></CreatePost>
        </MansoryItem>
        {getPosts}
      </Mansory>
    </div>
  );
};

export default Home;
