import { httpService } from './httpService.js'

export const itemService = {
    query,
    getById,
    save,
    remove
}

async function query() {
    const items = await httpService.get('item');
    return items;
}

function getById(id) {
    return httpService.get(`item/${id}`)
}

function remove(id) {
    return httpService.delete(`item/${id}`)
}

async function save(item) {
    if (item._id) {
        return await httpService.put(`item/${item._id}`, item)
    } else {
        return await httpService.post('item', item)
    }
}