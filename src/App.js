import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup';
import { auth, createUserProfileDocument } from './firebase/fire-utils';

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: { id: snapShot.id, ...snapShot.data() },
            },
            () => console.log(this.state),
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = null;
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header current_user={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
