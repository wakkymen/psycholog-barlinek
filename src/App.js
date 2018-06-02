import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Page from "./components/Page";
import CardStateWrapper from "./CardStateWrapper";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faSpinner from "@fortawesome/fontawesome-free-solid/faSpinner";
import { processJson, jsxToJson } from "./jsx-json/jsxToJson";
import { pagesData} from "./mocks/PageData";
import NewAnimationWrapper from "./NewAnimationWrapper";
import UnfoldAnimationContainer from "./components/animations/UnfoldAnimationContainer";

const componentStore = {
  cardStateWrapper: CardStateWrapper,
  fontAwesomeIcon$1: FontAwesomeIcon,
  newAnimationWrapper: NewAnimationWrapper,
  unfoldAnimationContainer: UnfoldAnimationContainer,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isFetching: true};
    this.loadPages("http://www.psychologbarlinek.pl/api/public/v1.0.1/pages");
  }

  loadPages(url) {
    return fetch(url, {mode: "cors"})
      .then(response => response.text())
      .then(responseJSON => this.setState({pages: responseJSON}))
      .then(() => this.setState({isFetching: false}));
  }

  render() {
    if (this.state.isFetching) {
      return (<div className="spinnerContainer"><div className="spinner"><FontAwesomeIcon icon={faSpinner} size="9x" spin/></div></div>);
    }
    else {
      const processedPages = JSON.parse(this.state.pages).map(object => {
        const {content, ...props} = object;
        return {props, content: processJson(JSON.parse(content), componentStore)};
      });
      //const processedPages = pagesData;
      const routes = processedPages.map((page) => <Route key={page.props.id} path={page.props.href} render={props => (<Page {...props} data={page.content}/>)}/>);
      return (
        <BrowserRouter>
          <div className="App">
            <Header />

            <Navigation menuItems={processedPages.map((page) => {return {id: page.props.id, href: page.props.href, name: page.props.name, role: page.props.role};})} />
            <Switch>
              <Route exact path='/' render={props => (<Home {...props} pagesData={processedPages} />)} />
              <React.Fragment>
                {routes}
              </React.Fragment>
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default App;
