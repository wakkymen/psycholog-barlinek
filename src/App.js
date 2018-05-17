import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "./Home";
import Page from "./Page";
import CardStateWrapper from "./CardStateWrapper";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faEnvelope from "@fortawesome/fontawesome-free-solid/faEnvelope";
import faHome from "@fortawesome/fontawesome-free-solid/faHome";
import faPhone from "@fortawesome/fontawesome-free-solid/faPhone";
import {jsonToJsx, jsxToJson} from "./jsx-json/jsxToJson";

const componentStore = {
  cardStateWrapper: CardStateWrapper,
  fontAwesomeIcon$1: FontAwesomeIcon,
};

const dataKeys = {
  id: false,
  href: false,
  name: false,
  data: true,
};

class App extends Component {

  render() {
    const serialized = jsxToJson(pagesData);
    const parsed = jsonToJsx(serialized, componentStore, dataKeys);
    console.log(pagesData);
    console.log(parsed);
    const pages = parsed.map((page) => 
      <Route key={page.id} path={page.href} render={props => (<Page {...props} data={page.data}/>)}/>);
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Navigation menuItems={parsed.map((page) => {return {id: page.id, href: page.href, name: page.name};})} />

          <Switch>
            <Route exact path='/' render={props => (<Home {...props} pagesData={parsed} />)} />
            <React.Fragment>
              {pages}
            </React.Fragment>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const pagesData = [
  {id:1, href:"/omnie", name:"O mnie", data:(
    <section>
      <h2>Kim jestem?</h2>
      <p>Nazywam się Agnieszka Komorowska, z wykształcenia i zamiłowania jestem psychologiem i socjologiem. Socjologię ukończyłam na Uniwersytecie Szczecińskim, natomiast psychologię na Uniwersytecie SWPS we Wrocławiu. Zdobyte wykształcenie daje mi możliwość szerszego spojrzenia na człowieka znajdującego się w różnych sytuacjach i relacjach społecznych. Ponadto ukończyłam Studium Terapii Dzieci i Młodzieży organizowane przez Dolnośląskie Centrum Psychoterapii we Wrocławiu oraz liczne kursy i szkolenia, które pomogły mi jak najlepiej przygotować się do pracy psychologa – diagnosty i terapeuty.</p>
      <p>Przez wiele lat pracowałam w szkole z dziećmi i młodzieżą. Odbyłam również staż na Oddziale Psychiatrycznym Szpitala Wojewódzkiego w Gorzowie Wlkp. Na co dzień prowadzę prywatną praktykę w ramach Gabinetu psychologicznego „Diagnoza & Terapia”, gdzie udzielam konsultacji psychologicznych, poradnictwa dla osób indywidualnych, oraz par i rodzin. Przyjmuję  pacjentów w każdym wieku – dzieci, młodzież i dorosłych. Jako psycholog pracuję również z pacjentami - osobami starszymi, po wypadkach, urazach, udarach, w chorobach degeneracyjnych mózgu w Dziennym Domu opieki Medycznej, w Szpitalu Barlinek.</p>
      <p>W ramach gabinetu prywatnego prowadzę terapię EEG Biofeedback, która jest świetnym narzędziem wspomagającym terapię indywidualną pacjentów w wielu zaburzeniach.  <a href="#biofeedback">Więcej o biofeedbacku …..</a></p>
      <p>W prowadzonej terapii korzystam z narzędzi i podejść różnych szkół psychoterapii (systemowa, poznawczo-behawioralna, psychodynamiczna), tak by jak najlepiej dobrać je do konkretnego problemu z jakim przychodzi pacjent do gabinetu.</p>
      <p>Jako psycholog zajmuję się diagnostyką chorób i zaburzeń z jakimi zgłaszają się do gabinetu pacjenci. Po wstępnym badaniu, konsultacjach wspólnie z pacjentem określam plan terapii najbardziej optymalny w konkretnych problemach. Zależy mi na tym, by terapia była konkretna, nastawiona na realizację założonego celu – rozwiązanie problemu, jak najbardziej skuteczna i przeprowadzona w możliwie najkrótszym czasie.</p>
      <div className="card expanded">
        <p>Niektóre kursy i szkolenia:</p>
        <ul>
          <li>Studium terapii Dzieci i młodzieży – Dolnośląskie Centrum Psychoterapii we Wrocławiu (2017)</li>
          <li>Szkolenie certyfikacyjne EEG Biofeedback I stopień – Fundacja Promyk Słońca we Wrocławiu (2017)</li>
          <li>Neuropsychologiczna diagnoza procesów otępiennych – Wrocławskie Centrum Alzheimerowskie (2017)</li>
          <li>Uzależnienia behawioralne – Stowarzyszenie Karan we Wrocławiu (2017)</li>
          <li>Wybrane metody diagnozy w praktyce psychologicznej – Uniwersytet SWPS (2016)</li>
          <li>Techniki relaksacji w pracy z dziećmi i młodzieżą - Dolnośląskie Centrum Psychoterapii we Wrocławiu (2016)</li>
          <li>Rozwiązywanie konfliktów uczeń-nauczyciel, problemy wychowawcze - Europejski Fundusz Społeczny (2011)</li>
          <li>Profilaktyka HIV/AIDS i uzależnień - Centrum Doradztwa i Doskonalenia Nauczycieli w Szczecinie (2002)</li>
        </ul>
      </div>
    </section>
  )},
  {id:2, href:"/artykuły", name:"Artykuły", data:(
    <section>
      <h2>Artykuły</h2>
    </section>)},
  {id:3, href:"/oferta", name:"Oferta", data:(
    <section>
      <h2>Oferta</h2>
      <CardStateWrapper title='Dla rodziców'>
        <div>
          <p>Jeśli Twoje dziecko...</p>
          <ul>
            <li>dziwnie się zachowuje, często jest agresywne, nadruchliwe, niespokojne, a może nieśmiałe, wycofane,</li>
            <li>rozwija się inaczej niż rówieśnicy, wolniej,</li>
            <li>zbyt dużo czasu przebywa przy komputerze, gra, ciągle serfuje po Internecie albo pochłonięte jest mediami społecznościowymi,</li>
            <li>jest smutne, wycofane, nic je nie cieszy, unika kontaktu z innymi, dużo czasu przebywa w samotności,</li>
            <li>nadmiernie schudło, unika jedzenia,</li>
            <li>często boi się, ma lęki, fobie,</li>
            <li>ma niską samoocenę, jest zbyt krytyczne wobec siebie, nie wierzy we własne siły ...</li>
          </ul>
          <p>... zapraszam na spotkanie, gdzie wspólnie zastanowimy się nad problemem, przeprowadzona zostanie wstępna diagnoza oraz zaplanowana terapia najbardziej optymalna dla Państwa dziecka. W ofercie terapeutycznej polecam trening EEG Biofeedback, który zalecany jest w wielu zaburzeniach wieku dziecięcego oraz okresu dorastania poprawiający między innymi koncentrację, podnoszący samoocenę oraz działający relaksacyjnie.<br/>Serdecznie zapraszam</p>
        </div>
      </CardStateWrapper>
      <CardStateWrapper title="Dla uczniów i studentów">
        <div>
          <p>Jeśli...</p>
          <ul>
            <li>chcesz poprawić swoją koncentrację i pamięć,</li>
            <li>masz dużo nauki, przed sobą ważne  egzaminy,</li>
            <li>brakuje Ci wiary we własne możliwości,</li>
            <li>masz niską samoocenę,</li>
            <li>nie dogadujesz się z rodzicami, osobami bliskimi,</li>
            <li>nie wiesz co dalej wybrać na drodze edukacji, czy zawodowej,</li>
            <li>jest Ci smutno, nic Ci się nie chce ...</li>
          </ul>
          <p>... zapraszam na spotkanie, gdzie wspólnie zastanowimy się nad problemem, a po wstępnej diagnozie zaplanujemy najbardziej optymalną dla Ciebie terapię. W razie potrzeby zostanie ona wzbogacona o trening  EEG Biofeedback, który zalecany jest między innymi dla studentów i uczniów – poprawiający koncentrację, podnoszący samoocenę oraz działający relaksacyjnie.<br/>Serdecznie zapraszam</p>
        </div>
      </CardStateWrapper>
      <CardStateWrapper title="Dla biznesu">
        <div>
          <p>Jeśli...</p>
          <ul>
            <li>czujesz się zmęczony pracą i obowiązkami,</li>
            <li>jesteś wyczerpany, zniechęcony,</li>
            <li>przytłacza Cię poczucie odpowiedzialności za powierzone zadania,</li>
            <li>praca nie sprawia Ci radości,</li>
            <li>masz lęki związane wykonywaniem  obowiązków i powierzonymi zadaniami,</li>
            <li>nic Ci się nie chce, jesteś smutny, zamartwiasz się,</li>
            <li>masz kłopoty z pamięcią, koncentracją, snem ...</li>
          </ul>
          <p>... zapraszam na spotkanie, gdzie wspólnie zastanowimy się nad problemem, a po wstępnej diagnozie zaplanujemy najbardziej optymalną dla Ciebie terapię. W razie potrzeby zostanie ona wzbogacona o trening  EEG Biofeedback, który zalecany jest między innymi dla osób pracujących w biznesie, w stresujących warunkach – poprawiający koncentrację, podnoszący samoocenę oraz działający relaksacyjnie.<br/>Serdecznie zapraszam</p>
        </div>
      </CardStateWrapper>
      <CardStateWrapper title="Dla Seniorów">
        <div>
          <p>Jeśli...</p>
          <ul>
            <li>masz problemy z pamięcią, koncentracją, orientacją w czasie i przestrzeni,</li>
            <li>przeszedłeś uraz głowy, udar mózgu lub inne choroby związane z układem nerwowym,</li>
            <li>gubisz się, np. nie potrafisz znaleźć drogi powrotnej do domu,</li>
            <li>często zapominasz, nie rozpoznajesz osób i miejsc,</li>
            <li>codzienne czynności sprawiają Ci coraz większą trudność ...</li>
          </ul>
          <p>... zapraszam na spotkanie, gdzie wspólnie zastanowimy się nad problemem, a po wstępnej diagnozie zaplanujemy najbardziej optymalną dla Ciebie terapię. W razie potrzeby zostanie ona wzbogacona o trening EEG Biofeedback, który zalecany jest między innymi dla osób po udarach i urazach głowy, w podeszłym wieku, w chorobach degeneracyjnych mózgu – poprawiający pamięć i koncentrację, podnoszący samoocenę oraz działający relaksacyjnie.<br/>Serdecznie zapraszam</p>
        </div>
      </CardStateWrapper>
      <CardStateWrapper title="Dla osób w potrzebie">
        <div>
          <p>Jeśli...</p>
          <ul>
            <li>jesteś smutny, przygnębiony, nic Cię nie cieszy,</li>
            <li>straciłeś zainteresowanie sprawami codziennymi,</li>
            <li>przez większość dnia nie wychodzisz z domu, unikasz kontaktu z ludźmi, </li>
            <li>nie wierzysz we własne siły i możliwości,</li>
            <li>masz problemy ze snem,</li>
            <li>straciłeś kogoś bliskiego, jesteś w okresie żałoby,</li>
            <li>płaczesz bez powodu,</li>
            <li>bywa, że jesteś agresywny zupełnie bez powodu,</li>
            <li>masz duże wahania nastroju,</li>
            <li>często nadmiernie boisz się, masz lęki, fobie,</li>
            <li>żyjesz w ciągłym stresie, nie potrafisz odpoczywać, relaksować się</li>
            <li>wydarzyło się coś nagłego, trudnego z czym sobie nie radzisz,</li>
            <li>jesteś samotny, Twoje życie utraciło sens ...</li>
          </ul>
          <p>... zapraszam na spotkanie, gdzie wspólnie zastanowimy się nad problemem, a po wstępnej diagnozie zaplanujemy najbardziej optymalną dla Ciebie terapię. W razie potrzeby zostanie ona wzbogacona o trening EEG Biofeedback, który zalecany jest między innymi dla osób znajdujących się w szczególnych potrzebach – poprawiający koncentrację, podnoszący samoocenę oraz działający relaksacyjnie.<br/>Serdecznie zapraszam</p>
        </div>
      </CardStateWrapper>
      <CardStateWrapper title="Dla Par">
        <div>
          <p>Jeśli...</p>
          <ul>
            <li>wasz związek, małżeństwo przechodzi kryzys,</li>
            <li>nie możecie się dogadać,</li>
            <li>każdy z Was ma odmienny punkt widzenia,</li>
            <li>wzajemna miłość, fascynacja, zainteresowanie przygasło,</li>
            <li>coraz więcej czasu spędzacie osobno,</li>
            <li>wydarzyło się coś co Was poróżniło,</li>
            <li>chcecie zacząć od nowa, a nie wiecie jak ...</li>
          </ul>
          <p>... zapraszam na spotkanie, gdzie wspólnie zastanowimy się nad Waszym problemem, a po wstępnej diagnozie zaplanujemy najbardziej optymalną dla Was terapię.<br/>Serdecznie zapraszam</p>
        </div>
      </CardStateWrapper>
    </section>
  )},
  {id:4, href:"/cennik", name:"Cennik", data:(
    <section>
      <h2>Cennik</h2>
      <div className="column">
        <div className="column card expanded">
          <div>
            <h4>Konsultacja, poradnictwo, terapia indywidualna par</h4>
          </div>
          <div>
            <h4>Pojedyncza sesja (ok. 50 minut) – 100 zł</h4>
            <h4>Karnet na 10 spotkań – 900 zł <small>Oszczędzasz 10%!</small></h4>
          </div>
        </div>
        <div className="column card expanded">
          <div>
            <h4>Terapia EEG Biofeedback</h4>
          </div>
          <div>
            <h4>Pojedyncza sesja (ok. 45 minut) – 70 zł</h4>      
            <h4>Karnet na 10 spotkań – 600 zł <small>Oszczędzasz 14%!</small></h4>
          </div>
        </div>
      </div>
    </section>
  )},
  {id:5, href:"/biofeedback", name:"Biofeedback", data:(
    <section>
      <h2>Biofeedback - na czym polega?</h2>
      <p>EEG Biofeedback  to diagnostyczna i terapeutyczna metoda, oparta na anatomicznej i funkcjonalnej plastyczności mózgu, czyli jego zdolności do trwałych przekształceń.  Poprzez specjalnie uwarunkowany i dostosowany do pacjenta trening poprawia efektywność pracy mózgu, wzmacnia kontrolę nad procesami fizjologicznymi zachodzącymi w organizmie, pomaga się zrelaksować, oraz lepiej radzić sobie w sytuacjach trudnych, pobudza kreatywność i pozytywne myślenie, poprawia samoocenę i koncentrację, a przez to szybkość i efektywność uczenia się. Metoda stwarza możliwość korygowania dysfunkcji mózgowych powstałych w wyniku zaburzeń rozwoju mózgu, chorób oraz urazów mózgu. Wpływa korzystnie na zmiany funkcji poznawczych, zachowanie, emocje, reakcje fizjologiczne wykorzystując funkcje bioelektryczne mózgu przez wyuczenie i wzmacnianie nowych zachowań. Mózg zapamiętuje i odtwarza te reakcje, które są nagradzane. Podczas treningu pozytywnie pobudzony mózg dąży do kolejnych nagród optymalizując swoją pracę po przez uczenie się metodą prób i błędów, efektu i nagrody.</p>
      <p>Działanie EEG Bioefeedbacku oparte jest na elektrodach umieszczonych na głowie pacjenta dzięki, którym dokonuje się pomiaru aktywności poszczególnych fal mózgowych. Komputer na podstawie wyników analizy tych rejestracji dokonuje zmian na planszy stymulacyjnej, którą pacjent stara się kontrolować wyłącznie swoim umysłem. Terapeuta analizując wyświetlany na monitorze jakościowy i ilościowy zapis fal mózgowych ustala dla pacjenta korzystne parametry treningu. Celowo dobrane plansze służą do coraz lepszego skupienia się i koncentracji, a także wyciszenia i relaksacji. </p><p>Terapia przy pomocy treningu Biofeedbacku jest szczególnie efektywna w:</p>
      <ul>
        <li>ADD, ADHD, dyslekcji, dysgrafii, dysortografii działając na deficyty uwagi, nadpobudliwość psychoruchową</li>
        <li>zaburzeniach mowy (afazja motoryczna, jąkanie się) i pisma</li>
        <li>autyzmie i zespole Aspergera</li>
        <li>zaburzeniach nastroju, lękach, tremie, napadach paniki, agresji, apatii</li>
        <li>bezsenności, depresji, nerwicy, migrenie, tikach</li>
        <li>urazach i chorobach mózgu, wylewach, udarach, zespołach otępiennych, wypadkach</li>
        <li>wypaleniu zawodowym, uzależnieniach, zaburzeniach samooceny</li>
        <li>podwyższeniu aktywności poznawczej i możliwości intelektualnych u uczniów i studentów w czasie przygotowań do egzaminów</li>
      </ul>
      <div>
        <p>Biofeedback:</p>
        <ul>
          <li>Poprawia kondycję umysłową</li>
          <li>Doskonali koncentrację</li>
          <li>Usprawnia zdolności zapamiętywania</li>
          <li>Zwiększa kreatywność</li>
          <li>Wycisza i relaksuje</li>
        </ul>
      </div>
      <p>Pojedyncza sesja terapeutyczna przy pomocy biofeedbacku trwa ok. 45 minut. Jej efektywność uzależniona jest od predyspozycji i zaangażowania pacjenta w terapie oraz od dysfunkcji z jaką zgłasza się do psychologa. </p>
    </section>
  )},
  {id:6, href:"/kontakt", name:"Kontakt", data:(
    <section>
      <h2>Umów się na wizytę już dziś!</h2>
      <div className="rowResponsive">
        <div className="column">
          <h3>Dane kontaktowe</h3>
          <h5>Gabinet Psychologiczny<br/>Diagnoza & Terapia</h5>
          <div className="column contact">
            <div className="row">
              <span className="icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <address>ul. Szpitalna 11<br/>II piętro (budynek przychodni)<br/>74-320 Barlinek</address>
            </div>
            <div className="row">
              <span className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <a href="tel:+48669320057">669 320 057</a>
            </div>
            <div className="row">                
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <a href="mailto:agakomorowska@wp.pl">agakomorowska@wp.pl</a>
            </div>
          </div>
        </div>
        <div className="column">
          <h3>Dojazd</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.275567195343!2d15.221104615862338!3d52.99742930848935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47072e68283e2315%3A0x773b7800c747fe96!2sSzpitalna+11%2C+74-320+Barlinek!5e0!3m2!1spl!2spl!4v1495149935883" title="Dojazd" frameBorder="0" width="300" height="300" style={{border: 0}} allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )}
];

export default App;
