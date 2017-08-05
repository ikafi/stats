/**
 * Created by Ville Nupponen on 5.8.2017.
 */

// importataan kirjastot
import React from 'react';
import createReactClass from 'create-react-class';

// Työnalla
var BattleView = createReactClass({
    render: function () {
        return (
            <div className="battle-view">
                <span>yksittäisen tappelun sivu</span>
            </div>
        )
    }
});
module.exports = BattleView;