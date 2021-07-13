import Card from 'components/Card/Card';
import CardFooter from 'components/Card/CardFooter';
import CardBody from 'components/Card/CardBody';

const CreatePost = () => {
  const placeholder = 'What is on your mind?';

  return (
    <div className="create-post">
      <Card>
        <CardBody>
          <textarea placeholder={placeholder}></textarea>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default CreatePost;
