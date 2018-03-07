/**
 * Created by Aikain on 6.6.2017.
 */

// importataan kirjastot
import React from 'react';
import createReactClass from 'create-react-class';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

// Luodaan MyMeny-luokka
var MyMenu = createReactClass({
    render: function() {
        // Palautetaan react-burger-menu -kirjaston tarjoama Menu-elementti, jonne lisätty linkit etu- ja taistelusivulle
        return (
            <Menu>
                <ul>
                    <li><Link to='/'>Etusivu</Link></li>
                    <li><Link to='/battle/'>Taistelut</Link></li>
                    <li><Link to='/spyreport/'>SpyRaportit</Link></li>
                </ul>
            </Menu>
        );
    }
});

module.exports = MyMenu;