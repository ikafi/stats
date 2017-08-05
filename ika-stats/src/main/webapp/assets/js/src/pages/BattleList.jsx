/**
 * Created by Ville Nupponen on 5.8.2017.
 */

// importataan kirjastot
import React from 'react';
import createReactClass from 'create-react-class';
import axios from 'axios';

// axiosin tarvitsemat muuuttujat ja niiden alustus
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

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
            <div className="battle-list">
                <ul>
                    {
                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>nimi - aika</li> */
                        this.state.battles.map(function(battle) {
                            return <li>{battle.name + " - " + battle.time}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
});

module.exports = BattleList;