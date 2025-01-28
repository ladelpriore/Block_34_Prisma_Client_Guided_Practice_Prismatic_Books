# Block 34, Prisma Client, Guided Practice: Prismatic Books
Build a simple CRUD API using Prisma and Express, and use a relational database schema. 

[Prisma schemas](https://www.prisma.io/docs/concepts/components/prisma-schema), 
[perform CRUD operations with Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client/crud).

## Table of Contents

### [Initialize the Database](/docs/1-init_db.md)
Initialize Prisma to connect to PostgreSQL and create the schema.prisma file:   npx prisma init --datasource-provider postgresql
Create a new PostgreSQL database:  createdb prismatic-books
In the schema.prisma file, add a Book model with fields 
### [Seed the Database](/docs/2-seed_db.md)
Create a new file index.js in the prisma folder. In that file, create and export a new PrismaClient.
Create a new file seed.js in the prisma folder. Refer to the docs on how to create many records.
Update package.json to configure Prisma's integrated seeding functionality.
Use Prisma Migrate to completely reset and seed the database: npx prisma migrate reset
### [Serve the Data with Express](/docs/3-express.md)
Create an Express app
Create a /books router.
Install nodemon and add a dev script to package.json.

## Extensions

If you're done early, or want to see how this code might be improved, checkout [possible extensions](/docs/4-extensions.md).
