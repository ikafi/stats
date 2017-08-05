/**
 * Created by Aikain on 6.6.2017.
 */

import React from 'react';
import createReactClass from 'create-react-class';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

var MyMenu = createReactClass({
    render: function() {
        return (
            <Menu>
                <ul>
                    <li><Link to='/'>Etusivu</Link></li>
                    <li><Link to='/battle/'>Taistelut</Link></li>
                </ul>
            </Menu>
        );
    }
});

module.exports = MyMenu;