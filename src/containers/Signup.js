import EntryForm from 'containers/Entry/EntryForm';
import EntryHelper from 'containers/Entry/EntryHelper';
import Button from 'components/UI/Button';
import Form from 'components/UI/Form/Form';
import FormGroup from 'components/UI/Form/FormGroup';
import FormInput from 'components/UI/Form/FormInput';

import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();
  const entryText = 'Already have an account?';

  const handleSignup = () => history.push('/home');

  return (
    <div className="viewport">
      <div className="signup">
        <EntryForm>
          <Form title="Sign Up" onSubmit={handleSignup}>
            <FormGroup>
              <FormInput type="text" placeholder="Full name" required></FormInput>
            </FormGroup>
            <FormGroup>
              <FormInput type="text" placeholder="Username" required></FormInput>
            </FormGroup>
            <FormGroup>
              <FormInput type="email" placeholder="Email address" required></FormInput>
            </FormGroup>
            <FormGroup>
              <FormInput type="password" placeholder="Password" required></FormInput>
            </FormGroup>
            <Button variant="btn--primary btn--big btn--pilled">Sign up</Button>
          </Form>
        </EntryForm>
        <EntryHelper text={entryText}>
          <Link className="login__router--link" to="/">
            <Button variant="btn--light btn--big btn--pilled">Sign In</Button>
          </Link>
        </EntryHelper>
      </div>
    </div>
  );
};

export default Signup;
