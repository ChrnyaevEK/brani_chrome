/**
 * Write given assign to object by path. Write is performed by reference. If path does not exist - it may be created . You may delete the value by passing `undefined` as argument
 * @param {object} target Object to write .
 * @param {string[]} path An array of keys, like: ['level', 'sublevel', ...] .
 * @param {*} value Value to write to object .
 * @param {boolean} [strict=false] Allows creating path if it does not exist .
 * @returns {boolean} Return true if operation was successful else false .
 * @see search
 */
function write(target, path, value, strict) {
    if (target !== undefined) {
        var copyPath = [...path]  // Copy path because we will destroy it letter 
        return write.call(target, undefined, copyPath, value, strict)  // Call write on target, ---> `this` === `target`
    } else { // Start of recursion 
        if (path.length === 1) {  // Last level
            let level = path.shift()  // Get level
            if (strict && this[level] === undefined) return false  // Do not create anything if it was not required
            if (value === undefined) {  // Perform delete if value was `undefined`
                delete this[level]
            } else {  // Else - rewrite(!) value
                this[level] = value
            }
            return true  // Confirm success
        } else if (path.length > 1) {  // Continue recursion 
            let level = path.shift();
            if (this[level] === undefined) {
                if (strict) {  // Do not create anything if it was not required
                    return false
                } else {  // Create new sublevel
                    this[level] = {}
                }
            }
            return write.call(this[level], undefined, path, value, strict)  // Call `write` on deeper level
        } else {  // If path is empty - assign value to `target`
            if (!strict) {
                Object.assign(this, value)
                return true
            } else {
                return false
            }
        }
    }
}
