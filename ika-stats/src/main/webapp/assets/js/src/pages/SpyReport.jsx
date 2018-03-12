/**
 * Created by Joppe151617 on 15.8.2017.
 */

//lisätään datatables.net
const $ = require('jquery');
$.DataTable = require('datatables.net')();

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
            $('#report_table').DataTable();
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
                <table id="report_table">
                    <thead>
                        <tr>
                            <th>Nimi</th>
                            <th>Kaupungin nimi</th>
                            <th>Koordit</th>
                            <th>Varasto</th>
                            <th>Muuri</th>
                            <th>Ryöstöraja</th>
                            <th>Puu</th>
                            <th>Viini</th>
                            <th>Marmori</th>
                            <th>Lasi</th>
                            <th>Rikki</th>
                            <th>Ryös.Yht.</th>
                            <th>Aika</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        /* Käydään lista läpi map-funktion avulla, jokainen alkio muuntuu <li>kaupungin nimi - aika</li> */
                        this.state.reports.map(function(spyreport) {
                            return (
                                <tr>
                                    <td className="name">{spyreport.playerName}</td>
                                    <td className="townname">{spyreport.townName}</td>
                                    <td className="coords">{spyreport.coordinates}</td>
                                    <td className="warehouse">{spyreport.town != null ? spyreport.town.warehouseLvl : "ei tiedossa"}</td>
                                    <td className="wall">{spyreport.town != null ? spyreport.town.wallLvl : "ei tiedossa"}</td>
                                    <td className="robbery">{spyreport.robberyLimit}</td>
                                    <td className="wood">{spyreport.wood}</td>
                                    <td className="wine">{spyreport.wine}</td>
                                    <td className="marble">{spyreport.marble}</td>
                                    <td className="crystal">{spyreport.crystal}</td>
                                    <td className="sulphur">{spyreport.sulphur}</td>
                                    <td className="robbable">{spyreport.robbable}</td>
                                    <td className="time">{spyreport.time}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
});
module.exports = SpyReport;