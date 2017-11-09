import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import AudioButton from './components/AudioButton';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AudioButton />, document.getElementById('root'));
registerServiceWorker();
