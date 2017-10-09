console.log( "==== sov2ex Index ====" )

import './assets/css/style.css';
import './vender/notify/notify.css';

import Entry      from 'entry';
import Search     from 'search';
import Controlbar from 'controlbar';

ReactDOM.render(
    location.search.startsWith( "?q=" ) ? <Search/> : <Entry/>,
    $( ".main" )[0]
);