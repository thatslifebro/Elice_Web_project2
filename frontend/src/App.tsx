import React from "react";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil";

const GlobalStyles = createGlobalStyle`
    ${reset}
    /* other styles */
`;

function App() {
    return (
        <RecoilRoot>
            <GlobalStyles />
            <div>Hello, world!</div>
        </RecoilRoot>
    );
}

export default App;
