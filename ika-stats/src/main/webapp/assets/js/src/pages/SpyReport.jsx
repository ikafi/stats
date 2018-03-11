/**
 * Created by Joppe151617 on 15.8.2017.
 */

// importataan kirjastot
import React from 'react';
import createReactClass from 'create-react-class';
import axios from 'axios';
import { Link } from 'react-router-dom';

// axiosin tarvitsemat muuuttujat ja niiden alustus
var CancelToken = axios.CancelToken;
var source;

// luodaan SpyReport-luokka
var SpyReport = createReactClass({
    getInitialState: function() {
        {/* Alustetaan state */}
        return {
            reports: []
        }
    },
    componentDidMount: function() {
        {/* Haetaan tiedot kun sivua "pyydetään" näytettäväksi */}
        source = CancelToken.source()
        var _this = this;
        axios.get("/spyreport/", {
            cancelToken: source.token
        }).then(function(result) {
            _this.setState({
                reports: result.data
            });
        })
    },
    componentWillUnmount: function() {
        {/* Perutaan hakeminen jos sivu suljetaan */}
        source.cancel();
    },
    render: function () {
        {/* Luodaan lista raporteista */}
        return (
            <div className="container">
                <div className="report-title">
                    <h1>Raportit</h1>
                </div>
                <div className="report-list">
                    <ul>
                        {
                            /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                            this.state.reports.map(function(spyreport) {
                                return (
                                    <li key={spyreport.id}>
                                        <Link to={'/spyreport/' + spyreport.id}>
                                            <span className="name">{spyreport.playerName}</span>
                                            <span className="townname">{spyreport.townName}</span>
                                            <span className="coords">{spyreport.coordinates}</span>
                                            <span className="warehouse">{spyreport.town != null ? spyreport.town.warehouseLvl : "ei tiedossa"}</span>
                                            <span className="wall">{spyreport.town != null ? spyreport.town.wallLvl : "ei tiedossa"}</span>
                                            <span className="robbery">{spyreport.robberyLimit}</span>
                                            <span className="wood">{spyreport.wood}</span>
                                            <span className="wine">{spyreport.wine}</span>
                                            <span className="marble">{spyreport.marble}</span>
                                            <span className="crystal">{spyreport.crystal}</span>
                                            <span className="sulphur">{spyreport.sulphur}</span>
                                            <span className="robbable">{spyreport.robbable}</span>
                                            <span className="time">{spyreport.time}</span>
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

module.exports = SpyReport;