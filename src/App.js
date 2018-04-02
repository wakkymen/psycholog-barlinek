import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Content from './Content';
import Home from './Home';

class App extends Component {
  render() {
    let pages = pagesData.map((page) => 
  <Content key={page.id} href={page.href} data={page.data} />);
    console.log(pages);
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Navigation menuItems={items} />

          <Switch>
            <Route exact path='/' component={Home} />
            <div>
              {pages}
            </div>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const items = [
  {id:1, name:'O mnie', href:'/omnie'},
  {id:2, name:'Artykuły', href:'/artykuły'},
  {id:3, name:'Oferta', href:'/oferta'},
  {id:4, name:'Cennik', href:'/cennik'},
  {id:5, name:'Biofeedback', href:'/biofeedback'},
  {id:6, name:'Kontakt', href:'/kontakt'}
];

const pagesData = [
  {id:1, href:'/omnie', data:'<h2>Kim jestem?</h2><p>Nazywam się Agnieszka Komorowska, z wykształcenia i zamiłowania jestem psychologiem i socjologiem. Socjologię ukończyłam na Uniwersytecie Szczecińskim, natomiast psychologię na Uniwersytecie SWPS we Wrocławiu. Zdobyte wykształcenie daje mi możliwość szerszego spojrzenia na człowieka znajdującego się w różnych sytuacjach i relacjach społecznych. Ponadto ukończyłam Studium Terapii Dzieci i Młodzieży organizowane przez Dolnośląskie Centrum Psychoterapii we Wrocławiu oraz liczne kursy i szkolenia, które pomogły mi jak najlepiej przygotować się do pracy psychologa – diagnosty i terapeuty.</p><p>Przez wiele lat pracowałam w szkole z dziećmi i młodzieżą. Odbyłam również staż na Oddziale Psychiatrycznym Szpitala Wojewódzkiego w Gorzowie Wlkp. Na co dzień prowadzę prywatną praktykę w ramach Gabinetu psychologicznego „Diagnoza &amp Terapia”, gdzie udzielam konsultacji psychologicznych, poradnictwa dla osób indywidualnych, oraz par i rodzin. Przyjmuję  pacjentów w każdym wieku – dzieci, młodzież i dorosłych. Jako psycholog pracuję również z pacjentami - osobami starszymi, po wypadkach, urazach, udarach, w chorobach degeneracyjnych mózgu w Dziennym Domu opieki Medycznej, w Szpitalu Barlinek.<br/>W ramach gabinetu prywatnego prowadzę terapię EEG Biofeedback, która jest świetnym narzędziem wspomagającym terapię indywidualną pacjentów w wielu zaburzeniach.  <a href="#biofeedback" class="navlink">Więcej o biofeedbacku …..</a></p><p>W prowadzonej terapii korzystam z narzędzi i podejść  różnych szkół psychoterapii (systemowa, poznawczo-behawioralna, psychodynamiczna), tak by jak najlepiej dobrać je do konkretnego problemu z jakim przychodzi pacjent do gabinetu.</p><p>Jako psycholog zajmuję się diagnostyką chorób i zaburzeń z jakimi zgłaszają się do gabinetu pacjenci. Po wstępnym badaniu, konsultacjach wspólnie z pacjentem określam plan terapii najbardziej optymalny w konkretnych problemach. Zależy mi na tym, by terapia była konkretna, nastawiona na realizację założonego celu – rozwiązanie problemu, jak najbardziej skuteczna i przeprowadzona w możliwie najkrótszym czasie.</p>Niektóre kursy i szkolenia:<ul><li>Studium terapii Dzieci i młodzieży – Dolnośląskie Centrum Psychoterapii we Wrocławiu (2017)</li><li>Szkolenie certyfikacyjne EEG Biofeedback I stopień – Fundacja Promyk Słońca we Wrocławiu (2017)</li><li>Neuropsychologiczna diagnoza procesów otępiennych – Wrocławskie Centrum Alzheimerowskie (2017)</li><li>Uzależnienia behawioralne – Stowarzyszenie Karan we Wrocławiu (2017)</li><li>Wybrane metody diagnozy w praktyce psychologicznej – Uniwersytet SWPS (2016)</li><li>Techniki relaksacji w pracy z dziećmi i młodzieżą - Dolnośląskie Centrum Psychoterapii we Wrocławiu (2016)</li><li>Rozwiązywanie konfliktów uczeń-nauczyciel, problemy wychowawcze - Europejski Fundusz Społeczny (2011)</li><li>Profilaktyka HIV/AIDS i uzależnień - Centrum Doradztwa i Doskonalenia Nauczycieli w Szczecinie (2002)</li></ul>'},
  {id:2, href:'/artykuły', data:'ZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZ'},
  {id:3, href:'/oferta', data:'ZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZ'},
  {id:4, href:'/cennik', data:'ZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZ'},
  {id:5, href:'/biofeedback', data:'<h2>Biofeedback - na czym polega?</h2><p>EEG Biofeedback  to diagnostyczna i terapeutyczna metoda, oparta na anatomicznej i funkcjonalnej plastyczności mózgu, czyli jego zdolności do trwałych przekształceń.  Poprzez specjalnie uwarunkowany i dostosowany do pacjenta trening poprawia efektywność pracy mózgu, wzmacnia kontrolę nad procesami fizjologicznymi zachodzącymi w organizmie, pomaga się zrelaksować, oraz lepiej radzić sobie w sytuacjach trudnych, pobudza kreatywność i pozytywne myślenie, poprawia samoocenę i koncentrację, a przez to szybkość i efektywność uczenia się. Metoda stwarza możliwość korygowania dysfunkcji mózgowych powstałych w wyniku zaburzeń rozwoju mózgu, chorób oraz urazów mózgu. Wpływa korzystnie na zmiany funkcji poznawczych, zachowanie, emocje, reakcje fizjologiczne wykorzystując funkcje bioelektryczne mózgu przez wyuczenie i wzmacnianie nowych zachowań. Mózg zapamiętuje i odtwarza te reakcje, które są nagradzane. Podczas treningu pozytywnie pobudzony mózg dąży do kolejnych nagród optymalizując swoją pracę po przez uczenie się metodą prób i błędów, efektu i nagrody.</p><p>Działanie EEG Bioefeedbacku oparte jest na elektrodach umieszczonych na głowie pacjenta dzięki, którym dokonuje się pomiaru aktywności poszczególnych fal mózgowych. Komputer na podstawie wyników analizy tych rejestracji dokonuje zmian na planszy stymulacyjnej, którą pacjent stara się kontrolować wyłącznie swoim umysłem. Terapeuta analizując wyświetlany na monitorze jakościowy i ilościowy zapis fal mózgowych ustala dla pacjenta korzystne parametry treningu. Celowo dobrane plansze służą do coraz lepszego skupienia się i koncentracji, a także wyciszenia i relaksacji. </p><p>Terapia przy pomocy treningu Biofeedbacku jest szczególnie efektywna w:</p><ul><li>ADD, ADHD, dyslekcji, dysgrafii, dysortografii działając na deficyty uwagi, nadpobudliwość psychoruchową</li><li>zaburzeniach mowy (afazja motoryczna, jąkanie się) i pisma</li><li>autyzmie i zespole Aspergera</li><li>zaburzeniach nastroju, lękach, tremie, napadach paniki, agresji, apatii</li><li>bezsenności, depresji, nerwicy, migrenie, tikach</li><li>urazach i chorobach mózgu, wylewach, udarach, zespołach otępiennych, wypadkach</li><li>wypaleniu zawodowym, uzależnieniach, zaburzeniach samooceny</li><li>podwyższeniu aktywności poznawczej i możliwości intelektualnych u uczniów i studentów w czasie przygotowań do egzaminów</li></ul><p>Biofeedback:</p><ul><li>Poprawia kondycję umysłową</li><li>Doskonali koncentrację</li><li>Usprawnia zdolności zapamiętywania</li><li>Zwiększa kreatywność</li><li>Wycisza i relaksuje</li></ul><p>Pojedyncza sesja terapeutyczna przy pomocy biofeedbacku trwa ok. 45 minut. Jej efektywność uzależniona jest od predyspozycji i zaangażowania pacjenta w terapie oraz od dysfunkcji z jaką zgłasza się do psychologa. </p>'},
  {id:6, href:'/kontakt', data:'ZAPYCHACZ ZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZZAPYCHACZ'}
];

export default App;
