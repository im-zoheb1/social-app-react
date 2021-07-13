import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';

const PostCard = () => {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardBody>body</CardBody>
      <CardFooter>footer</CardFooter>
    </Card>
  );
};

export default PostCard;
