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
                    <div className="grid">
                        <div className="name">Nimi</div>
                        <div className="townname">Kaupingin nimi</div>
                        <div className="coords">Koordit</div>
                        <div className="warehouse">Varasto</div>
                        <div className="wall">Muuri</div>
                        <div className="robbery">Ryöstöraja</div>
                        <div className="wood">Puu</div>
                        <div className="wine">Viini</div>
                        <div className="marble">Marmori</div>
                        <div className="crystal">Lasi</div>
                        <div className="sulphur">Rikki</div>
                        <div className="robbable">Ryös.Yht.</div>
                        <div className="time">Aika</div>
                    </div>
                </div>
                <div className="report-list">
                    <ul>
                        {
                            /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                            this.state.reports.map(function(spyreport) {
                                return (
                                    <li key={spyreport.id}>
                                        <Link to={'/spyreport/' + spyreport.id}>
                                            <div className="grid">
                                                <div className="name">{spyreport.playerName}</div>
                                                <div className="townname">{spyreport.townName}</div>
                                                <div className="coords">{spyreport.coordinates}</div>
                                                <div className="warehouse">{spyreport.town != null ? spyreport.town.warehouseLvl : "ei tiedossa"}</div>
                                                <div className="wall">{spyreport.town != null ? spyreport.town.wallLvl : "ei tiedossa"}</div>
                                                <div className="robbery">{spyreport.robberyLimit}</div>
                                                <div className="wood">{spyreport.wood}</div>
                                                <div className="wine">{spyreport.wine}</div>
                                                <div className="marble">{spyreport.marble}</div>
                                                <div className="crystal">{spyreport.crystal}</div>
                                                <div className="sulphur">{spyreport.sulphur}</div>
                                                <div className="robbable">{spyreport.robbable}</div>
                                                <div className="time">{spyreport.time}</div>
                                            </div>
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