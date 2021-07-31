import { createStore } from 'redux'
import reducer from './channelsReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: "channels",
    storage
};
const pReducer = persistReducer(persistConfig, reducer)

const store = createStore(pReducer)

const persister = persistStore(store)

export {store, persister}