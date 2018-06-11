import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Page from "./components/Page";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faSpinner from "@fortawesome/fontawesome-free-solid/faSpinner";
import { processJson } from "./jsx-json/jsxToJson";
import UnfoldAnimationContainer from "./components/animations/UnfoldAnimationContainer";
import withUnfoldAnimationInterface from "./components/animations/withUnfoldAnimationInterface";
import Card from "./components/Card";

const componentStore = {
  fontAwesomeIcon$1: FontAwesomeIcon,
  unfoldAnimationContainer: UnfoldAnimationContainer,
  withUnfoldAnimationInterfaceCard: withUnfoldAnimationInterface(Card),
};

/**
 * Root component, fetches data and renders whole page, very simple.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isFetching: true};
    this.loadPages("https://3ghveyyuuf.execute-api.eu-central-1.amazonaws.com/dev/pages");
  }

  loadPages(url) {
    return fetch(url, {mode: "cors"})
      .then(response => response.json())
      .then(responseJSON => this.setState({pages: responseJSON.pages.filter(elem => elem.role==="page").map(object => {
        const {content, ...props} = object;
        return {...props, content: processJson(JSON.parse(content), componentStore)};
      }), info: responseJSON.pages.filter(elem => elem.role==="info").reduce(obj => obj).data}))
      .then(() => this.setState({isFetching: false}));
  }

  calculateRoutes(){
    return this.state.pages.map(page => {
      if (page.index===0) {
        return <Route exact key={page.id} path={page.href} render={props => (<Page {...props} data={page} otherPages={this.state.pages}/>)}/>;
      } else {
        return <Route key={page.id} path={page.href} render={props => (<Page {...props} data={page}/>)}/>;
      }
    });
  }

  calculateMenuItems(){
    return this.state.pages.filter(page => page.index > 0).map(page => ({id: page.id, href: page.href, name: page.name, index: page.index}));
  }

  render() {
    if (this.state.isFetching) {
      return (<div className="spinnerContainer"><div className="spinner"><FontAwesomeIcon icon={faSpinner} size="9x" spin/></div></div>);
    }
    else {
      const {title, subtitle, copyright, devInfo} = this.state.info;
      return (
        <BrowserRouter>
          <div className="App">
            <Header content={{title, subtitle}} />

            <Navigation menuItems={this.calculateMenuItems()} />
            <Switch>
              {this.calculateRoutes()}
            </Switch>
            <Footer content={{copyright, devInfo}} />
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default App;
