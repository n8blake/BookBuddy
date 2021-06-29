const router = require("express").Router();
const bookRoutes = require("./books");

// Portfolio Item routes
router.use("/books", bookRoutes);

module.exports = router;