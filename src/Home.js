import React from "react";
import Page from "./Page";
import PropTypes from "prop-types";

/**
 * Decorational layout component rendering basic home page with given subpages on index.
 */

class Home extends React.Component {
  render () {
    const { pagesData } = this.props;

    const homePages = pagesData.filter(object => object.props.role === "prices" || object.props.role === "contact").map(object => <Page key={object.props.id} data={object.content}/>);

    return (
      <React.Fragment>
        <section className="textContent">
          <h2><i>Bo w życiu chodzi o ludzi</i></h2>
          <p>Kocham ludzi! Lubię przebywać z ludźmi, rozmawiać z nimi, a przede wszystkim ich słuchać.  Każda usłyszana historia to osobny człowiek. Człowiek z całym swoim bogactwem, doświadczeniem, przeżyciami, emocjami, problemami…</p>
          <p>Gabinet psychologiczny „DIAGNOZA & TERAPIA” jest miejscem, gdzie w przyjaznej atmosferze możemy omówić Twoje problemy, Twoich bliskich, dzieci. Gdzie po wstępnej diagnozie zaproponuję najbardziej optymalną terapię. Jeśli będziesz chciał będę Ci towarzyszyć w poradzeniu sobie z nimi, na drodze do zmiany.</p>
        </section>
        {homePages}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  pagesData: PropTypes.array.isRequired
};

export default Home;