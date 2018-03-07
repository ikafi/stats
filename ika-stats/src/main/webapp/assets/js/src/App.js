/**
 * Created by Aikain on 6.6.2017.
 */

// importataan kirjastot
import React from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

// importataan sivut
import Home from './pages/Home';
import BattleList from './pages/BattleList';
import SpyReport from './pages/SpyReport';

// importataan komponentit
import MyMenu from './components/Menu';

// luodaan App-luokka
// HashRouter:lla saadaan kaikki url-osoitteet alkamaan /#/, jolloin loppuosoite ei mene palvelimelle
var App = createReactClass({
    render: function () {
        return (
            <HashRouter>
                <div className="outer-wrapper">
                    {/* lisätään vasempaan laitaan tuleva menu-painike ja siitä avautuvat sivupaneelin */}
                    <MyMenu />

                    {/* lisätään kaikki osoitteet, joita kuunnellaan ja minkä sivun ne renderöivät */}
                    <main>
                        {/* Oletussivu, /#/, renderöi sivun /pages/Home.jsx:stä löytyvän render-funktion perusteella  */}
                        <Route exact path='/' component={Home} />

                        {/* Taistelulista-sivu, /#/battle/, renderöi sivun /pages/BattleList.jsx:n perusteella  */}
                        <Route path='/battle' component={BattleList} />

                        {/* SpyReport sivu, /#/spyreport/, renderöi sivun /pages/SpyReport.jsx:n perusteella */}
                        <Route path='/spyreport' component={SpyReport} />
                    </main>
                </div>
            </HashRouter>
        )
    }
});

// Lisätään react:n pääkomponentti #app-elementtiin sivulle
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
