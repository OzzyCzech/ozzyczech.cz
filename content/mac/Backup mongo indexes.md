---
title: Backup mongo indexes
date: 2020-04-20
tags: [mongo]
---

# Backup mongo indexes

Follow code interate over all mongo collections and indexes and print to output index creation code:

```js
db.getCollectionNames().forEach(function(collection) {	
  indexes = db.getCollection(collection).getIndexes().forEach(function(index){
    if (index.name !== '_id_') {      
        const options = {};
      
        if( "name" in index ) options['name'] = index.name;
        if( "background" in index ) options['background'] = index.background;      
        if( "unique" in index ) options['unique'] = index.unique;
        if( "sparse" in index ) options['sparse'] = index.sparse;
        if( "storageEngine" in index ) options['storageEngine'] = index.storageEngine;
        if( "partialFilterExpression" in index ) options['partialFilterExpression'] = index.partialFilterExpression;
			
        print(`
					db.${collection}.createIndex(
						${tojson(index['key'])},
						${tojson(options)}
					);
					`.replace( /[\r\n\t]+/gm, "")
        );
     }
   });
});
```

Example output:

```js
db.users.createIndex({"settings" : 1}, {"name" : "settingsIndex", "background" : true});
db.users.createIndex({"name" : 1}, {"name" : "nameIndex", "background" : true});
db.users.createIndex({"email" : 1}, {"name" : "emailIndex", "background" : true});
```

