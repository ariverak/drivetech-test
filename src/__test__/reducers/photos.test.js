import reducer from 'store/reducers/photos'

describe('Photos reducer', () => {
    it('GET_PHOTOS',()=>{
        const res = reducer({ total: 1, total_pages: 1, results: [1] }, {
            type: 'GET_PHOTOS',
            payload: []
        })
        expect(res).toEqual({ total: 1, total_pages: 1, results: [1] })
    })
    it('GET_MORE_PHOTOS',()=>{
        const res = reducer({ total: 1, total_pages: 1, results: [1] }, {
            type: 'GET_MORE_PHOTOS',
            payload: {
                results: [2]
            }
        })
        expect(res).toEqual({ total: 1, total_pages: 1, results: [1,2] })
    })
    it('RESET_PHOTOS',()=>{
        const res = reducer({ total: 1, total_pages: 1, results: [1] }, {
            type: 'RESET_PHOTOS'
        })
        expect(res).toEqual({ total: 0, total_pages: 0, results: [] })
    })
})