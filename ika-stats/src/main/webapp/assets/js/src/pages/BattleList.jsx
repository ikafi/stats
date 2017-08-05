/**
 * Created by Ville Nupponen on 5.8.2017.
 */

// importataan kirjastot
import React from 'react';
import createReactClass from 'create-react-class';
import axios from 'axios';
import { Link } from 'react-router-dom';

// axiosin tarvitsemat muuuttujat ja niiden alustus
var CancelToken = axios.CancelToken;
var source;

// luodaan BattleList-luokka
var BattleList = createReactClass({
    getInitialState: function() {
        {/* Alustetaan state */}
        return {
            battles: []
        }
    },
    componentDidMount: function() {
        {/* Haetaan tiedot kun sivua "pyydetään" näytettäväksi */}
        source = CancelToken.source()
        var _this = this;
        axios.get("/battle/", {
            cancelToken: source.token
        }).then(function(result) {
            _this.setState({
                battles: result.data
            });
        })
    },
    componentWillUnmount: function() {
        {/* Perutaan hakeminen jos sivu suljetaan */}
        source.cancel();
    },
    render: function () {
        {/* Luodaan lista taisteluista */}
        return (
            <div className="container">
                <div className="battle-title">
                    <h1>Taistelut</h1>
                </div>
                <div className="battle-list">
                    <ul>
                        {
                            /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>nimi - aika</li> */
                            this.state.battles.map(function(battle) {
                                return (
                                    <li key={battle.id}>
                                        <Link to={'/battle/' + battle.id}>
                                            <span className="name">{battle.name}</span>
                                            <span className="time">{battle.time}</span>
                                            <span className="rounds">{battle.rounds}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = BattleList;