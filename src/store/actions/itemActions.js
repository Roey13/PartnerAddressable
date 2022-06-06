import { itemService } from '../../services/itemService'

export function loadItems() {
    return async dispatch => {
        try {
            const items = channelList
            dispatch({ type: 'SET_ITEMS', items })
        } catch (err) { }
    }
}

// export function loadItem(id) {
//     console.log('id', id);
//     return async dispatch => {
//         try {
//             const currItem = await itemService.getById(id)
//             dispatch({ type: 'SET_ITEM', currItem })
//         } catch (err) {}
//     }
// }

export function saveItem(item) {
    const type = item._id ? 'UPDATE_ITEMS' : 'ADD_ITEM'
    return async dispatch => {
        try {
            const savedItem = await itemService.save(item)
            dispatch({ type, item: savedItem })
        } catch (err) {
            console.log('ArticelActions: err in save/update item', err)
        }
    }
}


export function removeItem(itemId) {
    return async dispatch => {
        try {
            await itemService.remove(itemId)
            dispatch({ type: 'REMOVE_ITEM', itemId })
        } catch (err) {
            console.log('ArticelActions: err in removeItem', err)
        }
    }
}

export function setItem(itemId) { // Action Creator
    return async dispatch => {
        try {
            const item = getById(itemId)
            dispatch({ type: 'SET_CURR_ITEM', currItem: item })
        } catch (err) {
            console.log('ArticelActions: err in setItem', err)
        }
    }
}

const channelList = [
    {
        "_id": "612e439936c3d33aecdbe4fd",
        "channelName": "פרטנר פרומו",
        "channelId": "1105"
    },
    {
        "_id": "612e443b36c3d33aecdbe4fe",
        "channelName": "פרטנר סדרות",
        "channelId": "14731"
    },
    {
        "_id": "612e445b36c3d33aecdbe500",
        "channelName": "ענני תקשורת",
        "channelId": "ananey"
    },
    {
        "_id": "612e447736c3d33aecdbe502",
        "channelName": "BollyShow",
        "channelId": "1339"
    },
    {
        "_id": "612e447e36c3d33aecdbe503",
        "channelName": "BollyWood",
        "channelId": "1337"
    },
    {
        "_id": "612e448536c3d33aecdbe504",
        "channelName": "פודי",
        "channelId": "1293"
    },
    {
        "_id": "612e448d36c3d33aecdbe505",
        "channelName": "פרטנר סרטים",
        "channelId": "1271"
    }
]

function getById(channelId) {
    let currChannel
    channelList.map((channel) => {
        if (channelId === channel._id) currChannel = channel
    })
    return currChannel
}