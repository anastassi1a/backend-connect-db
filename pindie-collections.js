/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('pindie');

// Create a new index in the collection.
db.getCollection('categories')
  .createIndex(
    {
      /*
       * Keys
       *
       * Normal index
       * fieldA:  1, // ascending
       * fieldB: -1  // descending
       *
       * Wildcard index
       * '$**': 1, // wildcard index on all fields and subfields in a document
       * 'path.to.field.$**': 1 // wildcard index on a specific field and its subpaths
       *
       * Text index
       * fieldA: 'text',
       * fieldB: 'text'
       *
       * Geospatial Index
       * locationField: '2dsphere'
       *
       * Hashed Index
       * fieldA: 'hashed'
       */
    }, {
      /*
       * Options (https://docs.mongodb.com/manual/reference/method/db.collection.createIndex/#options-for-all-index-types)
       *
       * background: true, // ignored in 4.2+
       * unique: false,
       * name: 'some name',
       * partialFilterExpression: {},
       * sparse: false,
       * expireAfterSeconds: TTL,
       * collation: {},
       * wildcardProjection: {},
       */
    }
  );
/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('pindie');

// Create a new index in the collection.
db.getCollection('games')
  .createIndex(
    {
      /*
       * Keys
       *
       * Normal index
       * fieldA:  1, // ascending
       * fieldB: -1  // descending
       *
       * Wildcard index
       * '$**': 1, // wildcard index on all fields and subfields in a document
       * 'path.to.field.$**': 1 // wildcard index on a specific field and its subpaths
       *
       * Text index
       * fieldA: 'text',
       * fieldB: 'text'
       *
       * Geospatial Index
       * locationField: '2dsphere'
       *
       * Hashed Index
       * fieldA: 'hashed'
       */
    }, {
      /*
       * Options (https://docs.mongodb.com/manual/reference/method/db.collection.createIndex/#options-for-all-index-types)
       *
       * background: true, // ignored in 4.2+
       * unique: false,
       * name: 'some name',
       * partialFilterExpression: {},
       * sparse: false,
       * expireAfterSeconds: TTL,
       * collation: {},
       * wildcardProjection: {},
       */
    }
  );
/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('pindie');

// Create a new index in the collection.
db.getCollection('users')
  .createIndex(
    {
      /*
       * Keys
       *
       * Normal index
       * fieldA:  1, // ascending
       * fieldB: -1  // descending
       *
       * Wildcard index
       * '$**': 1, // wildcard index on all fields and subfields in a document
       * 'path.to.field.$**': 1 // wildcard index on a specific field and its subpaths
       *
       * Text index
       * fieldA: 'text',
       * fieldB: 'text'
       *
       * Geospatial Index
       * locationField: '2dsphere'
       *
       * Hashed Index
       * fieldA: 'hashed'
       */
    }, {
      /*
       * Options (https://docs.mongodb.com/manual/reference/method/db.collection.createIndex/#options-for-all-index-types)
       *
       * background: true, // ignored in 4.2+
       * unique: false,
       * name: 'some name',
       * partialFilterExpression: {},
       * sparse: false,
       * expireAfterSeconds: TTL,
       * collation: {},
       * wildcardProjection: {},
       */
    }
  );
/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'pindie';
const collection = 'NEW_COLLECTION_NAME';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
