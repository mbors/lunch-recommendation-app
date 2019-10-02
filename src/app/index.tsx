import * as React from 'react'
import { App } from './ui/containers/App'
import { Provider } from 'react-redux'
import { Store } from 'redux'

export interface RootProps {
    store: Store
}

export class Root extends React.Component<RootProps, any> {
    render() {
        return (
            <Provider store={this.props.store}>
                <App/>
            </Provider>
        )
    }

}
