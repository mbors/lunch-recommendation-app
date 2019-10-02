import '@babel/polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { configureStore } from './app/store'
import { Root } from './app'

const store = configureStore()
ReactDOM.render(<Root store={store} />, document.getElementById('app'))
