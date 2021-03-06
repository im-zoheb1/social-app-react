import { Link, useHistory } from 'react-router-dom';

import EntryForm from 'containers/Entry/EntryForm';
import EntryHelper from 'containers/Entry/EntryHelper';
import Button from 'components/UI/Button';
import Form from 'components/UI/Form/Form';
import FormGroup from 'components/UI/Form/FormGroup';
import FormInput from 'components/UI/Form/FormInput';

function Login() {
  const history = useHistory();
  const entryText = "Don't have an account?";

  function handleLogin(e) {
    e.preventDefault();
    history.push('/home');
  }

  return (
    <div className="viewport">
      <div className="login">
        <EntryHelper text={entryText}>
          <Link className="login__router--link" to="/signup">
            <Button variant="btn--light btn--big btn--pilled">Sign Up</Button>
          </Link>
        </EntryHelper>
        <EntryForm>
          <Form title="Sign In" onSubmit={handleLogin}>
            <FormGroup>
              <FormInput type="email" placeholder="Email address" label="Email address" required></FormInput>
            </FormGroup>
            <FormGroup>
              <FormInput type="password" placeholder="Password" label="Password" required></FormInput>
            </FormGroup>
            <FormGroup>
              <div className="login__forgot-password">
                <button className="login__forgot-password--link">forgot password?</button>
              </div>
            </FormGroup>
            <Button variant="btn--primary btn--big btn--pilled">Log In</Button>
          </Form>
        </EntryForm>
      </div>
    </div>
  );
}

export default Login;
