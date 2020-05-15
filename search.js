/**
 * Function follows supplied path and search object for last endpoint value. Used to get value from nested object
 * @param {object} source Object to be searched.
 * @param {string[]} path Array of keys, like this: ['level', 'sublevel', ...].
 * @returns {*} Found value. Return undefined if path does not exist.
 * @see write
 */
function search(source, path) {
    for (let level of path) {  // Loop over levels and reassign souse object
        source = source[level]
        if (level === undefined) break  // Do not try to access undefined 
    }
    return source
}
