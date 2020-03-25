import React from 'react';

import Navigation from './Navigation/Navigation';
import LandingPage from './LandingPage/LandingPage';
import Footer from './Footer/Footer';

function App() {
    return (
        <div className='App'>
            <Navigation></Navigation>
            <LandingPage></LandingPage>
            <Footer></Footer>
        </div>
    );
}

export default App;
