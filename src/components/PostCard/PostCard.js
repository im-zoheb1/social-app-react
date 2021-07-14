import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';

import FormInput from 'components/UI/Form/FormInput';

const PostCard = (props) => {
  const post = props.post;
  return (
    <div className="post-card">
      <Card>
        <CardHeader>
          <div className="post-card__header">
            <div className="post-card__user">
              <img className="post-card--user" src={post.image} alt={post.name} />
            </div>
            <div className="post-card__user-info">
              <div className="post-card--username">{post.name}</div>
              <div className="post-card--address">{post.city}</div>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className="post-card__body">
            <p className="post-card__body--text">{post.text}</p>
          </div>
        </CardBody>
        <CardFooter>
          <div className="post-card__actions">
            <div className="post-card__action">
              <i className="bx bx-like post-card__action--icon"></i>
              <span className="post-card__action--text">{post.likes}</span>
            </div>
            <div className="post-card__action">
              <i className="bx bx-comment-minus post-card__action--icon"></i>
              <span className="post-card__action--text">{post.comments}</span>
            </div>
          </div>
          <div className="post-card__input">
            <FormInput type="text" placeholder="Write a comment"></FormInput>
          </div>
          <div className="post-card__comments">
            <div className="post-card__comment">
              <div className="post-card__comment-img">
                <img className="post-card__comment-img--img" src={post.commentImage} alt="person" />
              </div>
              <div className="post-card__comment--text">{post.commentText}</div>
              <div></div>
            </div>
          </div>
          <button className="post-card--more">more</button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostCard;
