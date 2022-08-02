import React from 'react';
import  Routes  from './RoutesDOM';
import './main.css'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-PMFDZQH'
}

TagManager.initialize(tagManagerArgs)

function App() {
  return (
   <div>
     <Routes />
   </div>
  );
}

export default App;
