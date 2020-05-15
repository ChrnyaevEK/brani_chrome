# Search and write by path in JavaScript



## Search 

Function  `search` performs search in nested object by array like path.

`var source = {level: { sublevel: { value: 'some data' } } }`

`var path = ['level', 'sublevel', 'value']` 

Expected result of `search(source, path)` : `'some data'`


## Write

Function  `write` performs write operation to nested object by array like path.

Some options are available.

`var target = {}`

`var path = ['level', 'sublevel', 'value' ]` 

`var value = 'some data'`

Expected result of `write(target, path, value)` : `target === {level: { sublevel: { value: 'some data' } } }`

.

.

.


*Feel free to contribute!*