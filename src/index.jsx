import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import  App from 'components/App';
import {BrowserRouter} from 'react-router-dom'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<>Loading...</>}>
    <BrowserRouter basename="/Router.hw">
    <App />
    </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
