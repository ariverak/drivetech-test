import React from 'react'
import { shallow, mount } from 'enzyme'
import Layout from 'components/layout'
import { useTheme } from '@material-ui/core/styles';

let wrapper;

describe('<Layout />', () => {
    const props = {
        loading: true
    }
    beforeAll(()=>{
        wrapper = shallow(<Layout {...props} />)
    })
    // it('render props',()=>{
    //     expect(props).toHaveProperty('loading', true)
    // })
    it('test hooks',()=>{
        let theme;
        function HookWrapper(){
            theme = useTheme()
            return null
        }
        mount(<HookWrapper />)
        expect(theme.palette.primary.main).toEqual('#3f51b5')
    })
    it('render sin errores',()=>{
        expect(wrapper).toBeDefined()
    })
})