import { createStore,applyMiddleware } from 'redux';
import createsagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import rootReducer from './reducers';
import rootSaga from './sagas';

const initialState = {};

const sagaMiddleware = createsagaMiddleware();

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware,logger)
);

sagaMiddleware.run(rootSaga);

export default store;