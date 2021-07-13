import Card from 'components/Card/Card';
import CardFooter from 'components/Card/CardFooter';
import CardBody from 'components/Card/CardBody';
import Button from 'components/UI/Button';

const CreatePost = () => {
  const placeholder = 'What is on your mind?';

  return (
    <div className="create-post">
      <Card>
        <CardBody>
          <textarea className="create-post--textarea" placeholder={placeholder} rows="4"></textarea>
        </CardBody>
        <CardFooter>
          <div className="create-post__footer">
            <Button variant="btn--primary btn--small">Create Post</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreatePost;
