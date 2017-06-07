/**
 * Created by Aikain on 6.6.2017.
 */

import React from 'react';
import { slide as Menu } from 'react-burger-menu'

var MyMenu = React.createClass({
    render: function() {
        return (
            <Menu>
                <ul>
                    <li>Taistelut</li>
                    <li>Vakoojaraportit</li>
                </ul>
            </Menu>
        );
    }
})

module.exports = MyMenu;