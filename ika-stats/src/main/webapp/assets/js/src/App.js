/**
 * Created by Aikain on 6.6.2017.
 */

import React from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import BattleList from './pages/BattleList';

import MyMenu from './components/Menu';

var App = createReactClass({
    render: function () {
        return (
            <HashRouter>
                <div className="outer-wrapper">
                    <MyMenu />
                    <main>
                        <Route exact path='/' component={Home} />
                        <Route path='/battle' component={BattleList} />
                    </main>
                </div>
            </HashRouter>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
