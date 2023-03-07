import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/tailwind.css';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { RecoilRoot } from 'recoil';

const GlobalStyles = createGlobalStyle`
    ${reset}
    /* other styles */
`;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <GlobalStyles />
            <App />
        </RecoilRoot>
    </React.StrictMode>
);
