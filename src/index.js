import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Boot from './Boot';
import registerServiceWorker from './registerServiceWorker';

render(<Boot />, document.getElementById('root'));
registerServiceWorker();
