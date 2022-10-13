import React from 'react';
import ReactDOM from 'react-dom/client';
import {BodyPartsProvider} from './components/context/BodypartsContext'
import {FindExercisePrivider} from './components/context/FindExerciseContext'
import {MuscleProvider} from './components/context/MuscleContext'
import {BrowserRouter} from 'react-router-dom'

import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MuscleProvider>
        <BodyPartsProvider>
        <FindExercisePrivider> 
          <App />
        </FindExercisePrivider>
      </BodyPartsProvider>
    </MuscleProvider> 
    </BrowserRouter>
  </React.StrictMode>
);

