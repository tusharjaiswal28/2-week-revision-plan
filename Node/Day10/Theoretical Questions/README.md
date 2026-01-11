1. What is MongoDB? What makes it different from relational databases?

ANS-> MongoDB is a NoSQL, document-oriented database that stores data in JSON-like documents. MongoDB is different from relational databases because it stores data as flexible JSON-like documents instead of tables, doesn’t require a fixed schema, and is designed for horizontal scalability without complex joins.



2. What are collections and documents in MongoDB?

ANS-> Collections are like tables in relational databases — they store groups of related documents.

Documents are like rows, but stored in JSON/BSON format with flexible fields and structure.

Collection = group of documents, Document = single record.



3. What is BSON? How does it differ from JSON?

ANS-> BSON (Binary JSON) is a binary-encoded format used by MongoDB to store documents.
The main difference between BSON and JSON are:
-> BSON are Binary format while JSON are Text-based (human-readable).
-> JSON have limited data types while BSON supports more data types like int, long, date, binary.
-> JSON are larger in size and slower to parse while BSON are smaller in size, faster to parse and optimized for storage.



4. Explain the structure of a MongoDB document. What is _id?

ANS-> A MongoDB document is a key-value structure which stored as BSON format and can be nested.
_id is primary key of a document that automatically generated if not provided and must be unique.



5. What are the data types supported in MongoDB?

ANS-> Some Common data types are:
1. String
2. Number (Int32, Int64, Double)
3. Boolean
4. Array
5. Object (embedded document)
6. Date
7. ObjectId
8. Null
9. Binary



6. What are embedded documents vs references in MongoDB?

ANS-> Embedded Documents:
1. Store related data inside a single document.
2. Good for one-to-few relationships.
3. Fast read because everything is in one place

References Documents:
1. Store related data in separate documents and link using IDs.
2. Good for one-to-many or many-to-many relationships.
3. Requires extra query to fetch related data.



7. When should you embed vs reference data?

ANS-> Embed When:
1. Data is used together
2. One-to-few relationship
3. Data does not change frequently

Reference When:
1. One-to-many or many-to-many
2. Data is large
3. Data is shared across documents



8. What are the advantages and disadvantages of MongoDB?

ANS-> Advantages:
1. Flexible schema
2. Easy horizontal scaling
3. High performance for reads/writes
4. Suitable for large datasets

Disadvantages:
1. No strong joins
2. Higher memory usage
3. Complex transactions
4. Data duplication risk



9. Explain schema design in MongoDB. Is MongoDB schema-less?

ANS-> MongoDB schema design is about modeling data around your queries, balancing embedding and referencing, and leveraging flexibility for performance. MongoDB is schema-flexible, not schema-less.



10. What is the aggregation pipeline in MongoDB?

ANS-> The aggregation pipeline processes data through stages.

Some common Stages are $match, $group, $sort, $project, $lookup.