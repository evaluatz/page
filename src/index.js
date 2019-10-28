import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import * as serviceWorker from './serviceWorker';
import Load_FullScreen from './components/00-General/Load_FullScreen';

import configureStore from './store/configureStore';


import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

const App  = React.lazy(() => import('./App'));
// const { Provider }  = React.lazy(() => import('react-redux'));
// const { CookiesProvider }  = React.lazy(() => import('react-cookie'));



const store = configureStore();


ReactDOM.render( 
    <React.Suspense fallback={<Load_FullScreen />}>
        <CookiesProvider>
            <Provider store={store}>
                <App/> 
            </Provider>
        </CookiesProvider>
    </React.Suspense>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
