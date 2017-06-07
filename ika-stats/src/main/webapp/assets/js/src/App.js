/**
 * Created by Aikain on 6.6.2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import MyMenu from './components/Menu.jsx';

var App = React.createClass({
    render: function () {
        return (
            <div className="outer-wrapper">
                <MyMenu />
                <main>
                    {/* TODO */}
                </main>
            </div>
        )
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
