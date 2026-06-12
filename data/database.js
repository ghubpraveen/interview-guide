const database = {

    title: "Database Basics for DevOps & Performance Engineering",

    icon: "🗄️",

    questions: [

        {
            question: "How do you identify if a performance issue is caused by the database?",

            answer: `
• Compare application response times with database query execution times.

• Review APM traces using tools such as Dynatrace.

• Check database connection pool utilization.

• Review slow query logs.

• Check for lock waits and blocking sessions.

• Analyze database CPU, memory and disk I/O.

• If application CPU is low but database response times are high, the database is often the bottleneck.
`
        },

        {
            question: "What is a slow query?",

            answer: `
• A query that takes longer than expected to execute.

• Common causes include:

  - Missing indexes

  - Full table scans

  - Large result sets

  - Poor query design

• Slow queries often become visible during performance testing and peak traffic periods.
`
        },

        {
            question: "What is indexing?",

            answer: `
• An index improves data retrieval performance.

• Similar to an index in a book.

• Without an index, the database may scan every row.

• With an index, the database can locate data much faster.

• Incorrect indexing is one of the most common causes of database performance issues.
`
        },

        {
            question: "What is a full table scan?",

            answer: `
• The database reads every row in a table to find matching data.

• Usually occurs when:

  - No suitable index exists

  - Query design prevents index usage

• Full table scans can become very expensive on large tables.
`
        },

        {
            question: "What is a database connection pool?",

            answer: `
• A pool of reusable database connections.

• Applications borrow connections from the pool instead of creating new ones.

• Reduces connection overhead.

• Common issue during load testing:

  - Connection pool exhaustion

  - Requests waiting for available connections

  - Increased response times
`
        },

        {
            question: "What is connection pool exhaustion?",

            answer: `
• All available database connections are in use.

• New requests must wait for a free connection.

• Symptoms:

  - High response times

  - Timeouts

  - Increased error rates

• This is a common bottleneck identified during performance testing.
`
        },

        {
            question: "What is database locking?",

            answer: `
• A mechanism used to maintain data consistency.

• One transaction may prevent another transaction from modifying the same data.

• Excessive locking can cause:

  - Slow response times

  - Blocked sessions

  - Reduced throughput
`
        },

        {
            question: "What is database replication?",

            answer: `
• Data is copied from a primary database to one or more replica databases.

• Benefits:

  - High availability

  - Disaster recovery

  - Read scalability

• Common architecture:

  Primary Database

      ↓

  Read Replicas
`
        },

        {
            question: "What is the difference between vertical and horizontal database scaling?",

            answer: `
Vertical Scaling:

• Add CPU, memory or storage to an existing server.

• Simpler approach.

Horizontal Scaling:

• Add additional database instances.

• Improves scalability and availability.

• More complex implementation.

Cloud-native architectures often combine both approaches.
`
        },

        {
            question: "Tell me about a database-related performance issue you investigated.",

            answer: `
• During performance testing at Cavisson, response times increased significantly under sustained load.

• Infrastructure utilization appeared normal.

• Dynatrace traces showed requests waiting for database connections.

• Investigation revealed connection pool exhaustion.

• Pool configuration was adjusted and performance improved significantly.

• This demonstrated the importance of correlating application and database metrics.
`
        },

        {
            question: "What database metrics are important during performance testing?",

            answer: `
• Query response time

• Transactions per second

• Active connections

• Connection pool utilization

• Lock waits

• Disk I/O

• CPU utilization

• Memory utilization

• Replication lag
`
        },

        {
            question: "How do you troubleshoot a database issue during a production incident?",

            answer: `
• Identify impacted application transactions.

• Review APM traces.

• Check active connections.

• Review slow query logs.

• Check database CPU and memory.

• Analyze lock waits.

• Correlate findings with application behavior.

• Work with database administrators if deeper investigation is required.
`
        },

        {
    question: "What is indexing?",

    answer: `
• An index is a database object used to improve query performance.

• It works similar to an index in a book.

• Instead of scanning every row, the database can quickly locate the required records.

• Indexes significantly improve SELECT query performance.

• However, excessive indexing can slow down INSERT and UPDATE operations.

Example:

Without Index:

SELECT * FROM employees
WHERE employee_id = 100;

Database scans entire table.

With Index:

Database directly locates employee_id = 100.

This reduces query execution time significantly.
`
},

{
    question: "What is a Primary Key?",

    answer: `
• A Primary Key uniquely identifies each record in a table.

• Primary Key values cannot be NULL.

• Duplicate values are not allowed.

Example:

Employee Table

employee_id | name

1001        | John
1002        | David
1003        | Smith

Here employee_id is the Primary Key.

• Primary Keys ensure data uniqueness and integrity.
`
},

{
    question: "What is a Foreign Key?",

    answer: `
• A Foreign Key establishes a relationship between two tables.

• It references the Primary Key of another table.

Example:

Department Table

dept_id | department

10      | HR
20      | IT

Employee Table

emp_id | name | dept_id

1001   | John | 10
1002   | David| 20

Here dept_id in Employee table is a Foreign Key.

• Foreign Keys help maintain referential integrity.
`
},

{
    question: "What is Normalization?",

    answer: `
• Normalization is the process of organizing database tables to reduce redundancy.

• It improves data consistency and maintainability.

Benefits:

• Eliminates duplicate data

• Improves data integrity

• Simplifies maintenance

Example:

Instead of storing department details repeatedly for every employee, department information is stored in a separate table.

Employee Table

emp_id | name | dept_id

Department Table

dept_id | department

This reduces duplication and improves consistency.
`
},

{
    question: "What is Replication?",

    answer: `
• Replication is the process of copying data from one database server to another.

• Used for high availability and disaster recovery.

Typical Architecture:

Primary Database

        ↓

Read Replica 1

Read Replica 2

Benefits:

• Improved availability

• Better read scalability

• Disaster recovery support

• Reduced load on primary database
`
},

{
    question: "What is Sharding?",

    answer: `
• Sharding is a database scaling technique.

• Data is split across multiple database servers.

• Each server stores only a portion of the total data.

Example:

Shard 1

Customer IDs:
1 - 100000

Shard 2

Customer IDs:
100001 - 200000

Benefits:

• Horizontal scalability

• Improved performance

• Better handling of large datasets

Sharding is commonly used in large-scale applications.
`
},

{
    question: "What is Connection Pooling?",

    answer: `
• Connection Pooling is the practice of maintaining a pool of reusable database connections.

• Applications borrow and return connections instead of creating new ones every time.

Benefits:

• Faster response times

• Reduced connection overhead

• Better resource utilization

Common Performance Issue:

Connection Pool Exhaustion

• All available connections are in use.

• New requests wait for free connections.

• Response times increase significantly.

This is a common issue observed during load testing.
`
},

{
    question: "What is Database Failover?",

    answer: `
• Database Failover is the automatic switching from a failed primary database to a standby database.

Example:

Primary Database

      ↓ Failure

Standby Database becomes Primary

Benefits:

• High Availability

• Reduced downtime

• Improved reliability

Cloud platforms such as AWS RDS and Cloud SQL support automated failover.
`
},

{
    question: "What is a Read Replica?",

    answer: `
• A Read Replica is a copy of the primary database used only for read operations.

Example:

Primary Database

      ↓

Read Replica

Applications can send reporting and analytics queries to replicas.

Benefits:

• Reduced load on primary database

• Improved read performance

• Better scalability

• Enhanced reporting capabilities
`
},

{
    question: "How do you identify a database bottleneck?",

    answer: `
• Start by reviewing application response times.

• Use APM tools such as Dynatrace to identify where time is being spent.

• Check:

  - Slow query logs

  - Active connections

  - Connection pool utilization

  - Lock waits

  - Database CPU usage

  - Memory utilization

  - Disk I/O

• If application CPU is low but database wait times are high, the database is often the bottleneck.

Real Example:

At Cavisson, during performance testing we observed increasing response times while infrastructure metrics appeared healthy.

Dynatrace analysis showed requests waiting for database connections.

Investigation revealed connection pool exhaustion.

After tuning connection pool settings, response times improved significantly.
`
}

    ]

};

export default database;