/**
 * Created by Aikain on 5.8..2017.
 */

// importataan kirjastot
import React from 'react';
import createReactClass from 'create-react-class';

// Luodaan Page-class, käytetään etusivuna, jossa on ainostaan taustakuva
var Page = createReactClass({
    render: function() {
        return <div className="background-image" />;
    }
})

module.exports = Page;