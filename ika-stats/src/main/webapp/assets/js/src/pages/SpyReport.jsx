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
            <div className="all-container">
                <div className="report-title">
                    <h1>Raportit</h1>
                </div>
                    <div className="spy-container">
                        <div className="report-list">
                            <ul>
                                <div className="list-title">
                                     <span className="name">Pelaajaa</span>
                                </div>
                                    {
                                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                                        this.state.reports.map(function(spyreport) {
                                        return (
                                            <li key={spyreport.id}>
                                                <Link to={'/spyreport/' + spyreport.id}>
                                                    <span className="name">{spyreport.playerName}</span>
                                                </Link>
                                            </li>
                                        )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className="spy-container">
                        <div className="report-list">
                            <ul>
                                <div className="list-title">
                                    <span className="townname">Kaupunki</span>
                                </div>
                                {
                                    /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                                    this.state.reports.map(function(spyreport) {
                                        return (
                                            <li key={spyreport.id}>
                                                <Link to={'/spyreport/' + spyreport.id}>
                                                    <span className="townname">{spyreport.townName}</span>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="spy-container">
                        <div className="report-list">
                            <ul>
                                <div className="list-title">
                                     <span className="coords">X:Y</span>
                                </div>
                                    {
                                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                                        this.state.reports.map(function(spyreport) {
                                        return (
                                            <li key={spyreport.id}>
                                                <Link to={'/spyreport/' + spyreport.id}>
                                                    <span className="coords">{spyreport.coordinates}</span>
                                                </Link>
                                            </li>
                                        )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className="spy-container">
                        <div className="report-list">
                            <ul>
                                <div className="list-title">
                                     <span className="warehouse">Varasto</span>
                                </div>
                                    {
                                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                                        this.state.reports.map(function(spyreport) {
                                        return (
                                            <li key={spyreport.id}>
                                                <Link to={'/spyreport/' + spyreport.id}>
                                                    <span className="warehouse">{spyreport.warehouseLvl}</span>
                                                </Link>
                                            </li>
                                        )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className="spy-container">
                        <div className="report-list">
                            <ul>
                                <div className="list-title">
                                     <span className="wall">Muuri</span>
                                </div>
                                    {
                                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                                        this.state.reports.map(function(spyreport) {
                                        return (
                                            <li key={spyreport.id}>
                                                <Link to={'/spyreport/' + spyreport.id}>
                                                    <span className="wall">{spyreport.wallLvl}</span>
                                                </Link>
                                            </li>
                                        )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className="spy-container">
                        <div className="report-list">
                            <ul>
                                <div className="list-title">
                                     <span className="robbery">Ryöstöraja</span>
                                </div>
                                    {
                                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                                        this.state.reports.map(function(spyreport) {
                                        return (
                                            <li key={spyreport.id}>
                                                <Link to={'/spyreport/' + spyreport.id}>
                                                    <span className="robbery">{spyreport.robberyLimit}</span>
                                                </Link>
                                            </li>
                                        )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className="spy-container">
                        <div className="report-list">
                            <ul>
                                <div className="list-title">
                                     <span className="wood">Puu</span>
                                </div>
                                    {
                                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                                        this.state.reports.map(function(spyreport) {
                                        return (
                                            <li key={spyreport.id}>
                                                <Link to={'/spyreport/' + spyreport.id}>
                                                    <span className="wood">{spyreport.wood}</span>
                                                </Link>
                                            </li>
                                        )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className="spy-container">
                        <div className="report-list">
                            <ul>
                                <div className="list-title">
                                     <span className="wine">Viini</span>
                                </div>
                                    {
                                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                                        this.state.reports.map(function(spyreport) {
                                        return (
                                            <li key={spyreport.id}>
                                                <Link to={'/spyreport/' + spyreport.id}>
                                                    <span className="wine">{spyreport.wine}</span>
                                                </Link>
                                            </li>
                                        )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className="spy-container">
                        <div className="report-list">
                            <ul>
                                <div className="list-title">
                                     <span className="marble">Marmori</span>
                                </div>
                                    {
                                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                                        this.state.reports.map(function(spyreport) {
                                        return (
                                            <li key={spyreport.id}>
                                                <Link to={'/spyreport/' + spyreport.id}>
                                                    <span className="marble">{spyreport.marble}</span>
                                                </Link>
                                            </li>
                                        )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className="spy-container">
                        <div className="report-list">
                            <ul>
                                <div className="list-title">
                                     <span className="crystal">Lasi</span>
                                </div>
                                    {
                                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                                        this.state.reports.map(function(spyreport) {
                                        return (
                                            <li key={spyreport.id}>
                                                <Link to={'/spyreport/' + spyreport.id}>
                                                    <span className="crystal">{spyreport.crystal}</span>
                                                </Link>
                                            </li>
                                        )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className="spy-container">
                        <div className="report-list">
                            <ul>
                                <div className="list-title">
                                     <span className="sulphur">Rikki</span>
                                </div>
                                    {
                                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                                        this.state.reports.map(function(spyreport) {
                                        return (
                                            <li key={spyreport.id}>
                                                <Link to={'/spyreport/' + spyreport.id}>
                                                    <span className="sulphur">{spyreport.sulphur}</span>
                                                </Link>
                                            </li>
                                        )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className="spy-container">
                        <div className="report-list">
                            <ul>
                                <div className="list-title">
                                     <span className="robbable">Ryöstettävissä</span>
                                </div>
                                    {
                                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                                        this.state.reports.map(function(spyreport) {
                                        return (
                                            <li key={spyreport.id}>
                                                <Link to={'/spyreport/' + spyreport.id}>
                                                    <span className="robbable">{spyreport.robbable}</span>
                                                </Link>
                                            </li>
                                        )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className="spy-container">
                        <div className="report-list">
                            <ul>
                                <div className="list-title">
                                     <span className="time">Aika</span>
                                </div>
                                    {
                                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                                        this.state.reports.map(function(spyreport) {
                                        return (
                                            <li key={spyreport.id}>
                                                <Link to={'/spyreport/' + spyreport.id}>
                                                    <span className="time">{spyreport.time}</span>
                                                </Link>
                                            </li>
                                        )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>

            </div>
        )
    }
});

module.exports = SpyReport;