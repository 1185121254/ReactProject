import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './locale';


import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware  from 'redux-saga';



import rootReducer from './reducer/index';
import LearningSaga from './Component/LearningSaga';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,{},applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <LearningSaga />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
