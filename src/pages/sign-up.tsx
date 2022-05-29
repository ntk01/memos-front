import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const SignUp = (): JSX.Element => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="blue" textAlign="center">
        Sign Up
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
            Sign Up
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default SignUp;
