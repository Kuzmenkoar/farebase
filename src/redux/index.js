import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import {routerMiddleware} from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import history from '../history'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(sagaMiddleware, routerMiddleware(history), logger)

const store = createStore(reducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store