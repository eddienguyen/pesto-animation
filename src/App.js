import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { CSSTransition as OriginalCSSTransition, TransitionGroup } from 'react-transition-group';
import './App.scss';
import HomePage from './pages/Home';
import RecipePage from './pages/Recipe';


class CSSTransition extends OriginalCSSTransition {
  onEntered = () => {
    // ignore original behaviour
  }
}

class App extends Component {
  componentWillReceiveProps(nextProps) {
    this.previousView = this.props.location;
  }

  render() {

    const { location } = this.props;
    console.log(location);
    const isModal = location.state && location.state.to === 'modal';

    const position = isModal ? location.state.meta.from : {};

    /// the trick is to have both routes display at the same time
    return (
      <div className="App">
        <h2>Pesto</h2>
        <div className="viewContainer">
          <Switch location={isModal ? this.previousView : location}>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
        <TransitionGroup>
          <CSSTransition
            classNames="modalContainer"
            key={location.pathname}
            timeout={400}
            appear={true}
            mountOnEnter={true}
          >
            <div className="modalContainer" style={position} >
              <Switch location={location}>
                <Route exact path="/recipe/:id" component={RecipePage} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>

      </div>
    );
  }

}

/// 'withRouter' HOC injects 'history' to the props of its wrapped component. 
/// https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(App);
