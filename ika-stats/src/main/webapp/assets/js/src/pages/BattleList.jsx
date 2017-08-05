/**
 * Created by Ville Nupponen on 5.8.2017.
 */

import React from 'react';
import createReactClass from 'create-react-class';
import axios from 'axios';

var CancelToken = axios.CancelToken;
var source = CancelToken.source();

var BattleList = createReactClass({
    getInitialState: function() {
        return {
            battles: []
        }
    },
    componentDidMount: function() {
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
        source.cancel();
    },
    render: function () {
        return (
            <div className="battle-list">
                <ul>
                    {
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