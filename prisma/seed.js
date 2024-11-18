const prisma = require("../prisma"); 
           //Create an empty array. Fill the array with 10 objects. Pass the array in as the data to createMany. 
const seed = async () => {
    const books = [];
    for (let i = 0; i < 10; i++) {
        books.push({ title: `Book ${i}` });
    }
    await prisma.book.createMany({ data: books });
    };

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});


