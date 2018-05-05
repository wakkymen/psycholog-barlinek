import React from 'react';
import Page from './Page';

class Home extends React.Component {
    render () {
        const pagesData = this.props.pagesData;
        return (
            <React.Fragment>
                <section className="textContent">
                    <h2><i>Bo w życiu chodzi o ludzi</i></h2>
                    <p>Kocham ludzi! Lubię przebywać z ludźmi, rozmawiać z nimi, a przede wszystkim ich słuchać.  Każda usłyszana historia to osobny człowiek. Człowiek z całym swoim bogactwem, doświadczeniem, przeżyciami, emocjami, problemami…</p>
                    <p>Gabinet psychologiczny „DIAGNOZA & TERAPIA” jest miejscem, gdzie w przyjaznej atmosferze możemy omówić Twoje problemy, Twoich bliskich, dzieci. Gdzie po wstępnej diagnozie zaproponuję najbardziej optymalną terapię. Jeśli będziesz chciał będę Ci towarzyszyć w poradzeniu sobie z nimi, na drodze do zmiany.</p>
                </section>
                <Page data={pagesData[3].data}/>
                <Page data={pagesData[5].data}/>
            </React.Fragment>
        );
    }
}

export default Home;