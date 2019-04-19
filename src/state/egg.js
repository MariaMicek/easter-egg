const PAINT = 'egg/PAINT'

export const paintEggActionCreator = () => ({
    type: PAINT,
})

const initialState = {
    isPainted: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PAINT:
            return {
                ...state,
                isPainted: true
            }
        default:
            return state
    }
}