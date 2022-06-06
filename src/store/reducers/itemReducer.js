const initialState = {
  currItem: null,
  items: null
}

export function itemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.items }
      case 'SET_ITEM':
      return { ...state, currItem: action.currItem }
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.item] }
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item._id === action.item._id ? action.item : item
        )
      }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item._id !== action.itemId) }
    case 'SET_CURR_ITEM':
      return { ...state, currItem: action.currItem }
    default:
      return state
  }
}
