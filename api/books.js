const express = require("express"); //Create and export a new express router
const router = express.Router();
module.exports = router;

const prisma = require("../prisma");    //IMport the prisma client so we can accesss the database

router.get("/", async (req, res, next) => {     //Send an array of the books
    try {
      const books = await prisma.book.findMany();
      res.json(books);
    } catch (e) {
      next(e);
    }
});


router.get("/:id", async (req, res, next) => {      //Send a single book with specified id
    const { id } = req.params;
  
    try {
      // `id` has to be converted into a number before looking for it!
      const book = await prisma.book.findUnique({ where: { id: +id } });
      if (book) {
        res.json(book);
      } else {
        next({ status: 404, message: `Book with id ${id} does not exist.` });
      }
    } catch (e) {
      next(e);
    }
});


router.put("/:id", async (req, res, next) => {      //Update the book according to the request body. 
    const { id } = req.params;
    const { title } = req.body;
  
    // Check if title was provided
    if (!title) {
      return next({
        status: 400,
        message: "A new title must be provided.",
      });
    }
  
    try {
      // Check if the book exists
      const book = await prisma.book.findUnique({ where: { id: +id } });
      if (!book) {
        return next({
          status: 404,
          message: `Book with id ${id} does not exist.`,
        });
      }
  
      // Update the book
      const updatedBook = await prisma.book.update({
        where: { id: +id },
        data: { title },
      });
      res.json(updatedBook);
    } catch (e) {
      next(e);
    }
});


router.post("/", async (req, res, next) => {        //Add a new book to the database
    const { title } = req.body;
    if (!title) {
      return next({
        status: 400,
        message: "Title must be provided for a new book.",
      });
    }
    try {
      const book = await prisma.book.create({ data: { title } });
      res.status(201).json(book);
    } catch (e) {
      next(e);
    }
});

router.delete("/:id", async (req, res, next) => {       //Delete the book with the specified id
    const { id } = req.params;
  
    try {
      // Check if the book exists
      const book = await prisma.book.findUnique({ where: { id: +id } });
      if (!book) {
        return next({
          status: 404,
          message: `Book with id ${id} does not exist.`,
        });
      }
  
      // Delete the book
      await prisma.book.delete({ where: { id: +id } });
      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
});

//Together these create a fully working CRUD API