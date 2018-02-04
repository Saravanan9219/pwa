import React from 'react';
import ReactDOM from 'react-dom';
import { Adder } from './adder.js';
import { registerServiceWorker } from './register_service_worker.js';

ReactDOM.render(
    <Adder/>,
    document.getElementById('root')
);

registerServiceWorker();
