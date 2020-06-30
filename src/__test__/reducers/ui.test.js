import reducer, { getTheme } from 'store/reducers/ui'

describe('Ui reducer', () => {
    it('TOGGLE_THEME_MODE',()=>{
        const testLight = reducer({ mode: 'dark' }, {
            type: 'TOGGLE_THEME_MODE'
        })
        const testDark = reducer({ mode: 'light' }, {
            type: 'TOGGLE_THEME_MODE'
        })
        expect(testLight).toEqual({ mode: 'light' })
        expect(testDark).toEqual({ mode: 'dark' })
    })
    it('INITIAL_STATE_WITH_LOCALSTORAGE',()=>{
        localStorage.setItem('theme','dark')
        let state = reducer({ mode: localStorage.getItem('theme') }, {
            type: 'RANDOM_ACTION_TYPE'
        })
        expect(state).toEqual({ mode: 'dark' })
        expect(getTheme()).toEqual('dark')
    })
})