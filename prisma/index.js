const { PrismaClient } = require("@prisma/client");     //Create and export a new PrismaClient
const prisma = new PrismaClient();
module.exports = prisma;
