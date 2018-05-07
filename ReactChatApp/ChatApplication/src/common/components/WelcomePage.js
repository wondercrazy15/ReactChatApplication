import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {welcomePage} from '../actions/actions';
import { connect } from 'react-redux';
import { Input, Button } from 'react-bootstrap';
import FBSignIn from './FBSignIn';
import SignIn from './SignIn';

class WelcomePage extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: ''
    };
  }
  componentDidMount() {
    try{
      this.refs.usernameInput.getInputDOMNode().focus();
    }
    catch(e)
    {
    }
    
  }
  handleChange(event) {
    if (event.target.name === 'username') {
      this.setState({ username: event.target.value });
    }
  }
  handleSubmit() {
    const { dispatch } = this.props;
    const username = this.state.username;
    dispatch(welcomePage(username));
    this.setState({ username: '' });
  }
  render() {
    const {screenWidth} = this.props;
    if(screenWidth < 500) {
      return (
        <div className="signin_tab width-100">
        <header>
          <p>Welcome to our Chat App</p>          
        </header>
        <main>

          <form>
            <div>
              
            </div>
            <section>
              <Link to="/signup">
                <Button className="signin_btn"
                  bsStyle="success"                  
                  type="submit"
                  onClick={::this.handleSubmit}>
                    <p className="m-0">Sign Up</p>
                </Button>
              </Link>
            </section>
          </form>
          <div>
            <p className="sign_or"> Or </p>
            <Link to="/signin">
              <Button bsStyle="default" className="signin_btn">Sign in</Button>
            </Link>
          </div>
        </main>
      </div>
      );
    }
    return (
      <div className="signin_tab">
        <header>
          <p>Welcome to our Chat App</p>          
        </header>
        <main>

          <form>
            <div>
              
            </div>
            <section>
              <Link to="/signup">
                <Button className="signin_btn"
                  bsStyle="success"                  
                  type="submit"
                  onClick={::this.handleSubmit}>
                    <p className="m-0">Sign Up</p>
                </Button>
              </Link>
            </section>
          </form>
          <div>
            <p className="sign_or"> Or </p>
            <Link to="/signin">
              <Button bsStyle="default" className="signin_btn">Sign in</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      screenWidth: state.environment.screenWidth
  }
}

export default connect(mapStateToProps)(WelcomePage)
