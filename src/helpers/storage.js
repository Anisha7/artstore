
// ********** Storage functions ************ //
// store [id1, id2...]

// Adds given item to storage if it isn't already there
// otherwise, increments its quantity
export const addItem = item => {
    const items = getItems()
    let found = false
    // check if item already exists
    items.forEach(curr => {
        if (curr === item) {
            found = true
            curr.qty += 1
        }
    });

    // add item
    if (!found) {
        items.push(item)
    }
    // update storage
    localStorage.setItem('anishaartstorecart', JSON.stringify(items))
};

// Removes given item from storage
export const removeItem = item => {
    const items = getItems()
    
    // remove item
    items.forEach((curr, i) => {
        if (curr === item) {
            items.splice(i, 1) // deletes item from array
            // update storage
            localStorage.setItem('anishaartstorecart', JSON.stringify(items))
            return
        }
    });
    
};

// Gets items in storage and formats them to usable data
export const getItems = () => {
    const items = localStorage.getItem('anishaartstorecart')
    return JSON.parse(items)
};

// TODO: Test this function
// Input: old_id, new_item = {name, qty, id}
export const updateItem = (old_id, new_item) => {
    // Get items from local storage
    const items = getItems()
    let old_index = -1
    // Find index for item with old_id
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === old_id) {
            old_index = i
            break
        }
    }
    if (old_index === -1 ) {
        // should never hit this case though logically
        // item doesn't exist, just append
        items.push(new_item)
    } else {
        // Replace with new_item
        items[old_index] = new_item
    }
    // Push to local storage
    localStorage.setItem('anishaartstorecart', decodeDataToString(items))
}