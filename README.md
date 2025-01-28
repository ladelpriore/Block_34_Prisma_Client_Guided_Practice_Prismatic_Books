# Guided Practice - Prismatic Books

This activity guides you through building a simple CRUD API using Prisma and Express. It requires a basic understanding of relational database schemas, how to translate them into the equivalent [Prisma schemas](https://www.prisma.io/docs/concepts/components/prisma-schema), and how to [perform CRUD operations with Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client/crud).

The **solution** branch contains documented solution code. The commit history of that branch follows the instructions below.

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
