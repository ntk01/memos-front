import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Login = (): JSX.Element => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="blue" textAlign="center">
        Sign In
      </Header>
      <Form>
        <Segment stacked>
          <Form.Input
            icon="user"
            iconPosition="left"
            placeholder="Email"
            type="email"
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Button color="blue" fluid size="large">
            Sign In
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href="sign-up">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Login;
