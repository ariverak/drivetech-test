import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import store from 'store'
import Home from 'pages/Home'

let wrapper;

describe('<Home />', () => {
    const props = {
        loading: true
    }
    beforeAll(()=>{
        wrapper = shallow(
            <Provider store={store}>
                <Home {...props} />
            </Provider>
        )
    })
    it('render sin errores',()=>{
        expect(wrapper).toBeDefined()
    })
})