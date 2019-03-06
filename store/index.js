import { createStore, applyMiddleware } from 'redux'

// Persist storage libraries
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Merge init state & persist state
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
}

const pReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger()

export const store = createStore(pReducer, undefined, applyMiddleware(logger))

export const persistor = persistStore(store)
