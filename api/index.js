const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, Model, DataTypes } = require('sequelize');
const booksSeed = require('./books.seed.json');

const app = express();
const port = 9000;

// Create Sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

// Define Carts model
class Cart extends Model {}
Cart.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  category: DataTypes.STRING,
  thumbnail: DataTypes.STRING,
  author: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
}, { sequelize, modelName: 'cart' });

// Define Books model
class Books extends Model {}
Books.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  category: DataTypes.STRING,
  thumbnail: DataTypes.STRING,
  author: DataTypes.STRING,
  price: DataTypes.DECIMAL,
}, { sequelize, modelName: 'book' });

// Sync models with database
sequelize.sync();

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// CRUD routes for Books model
// ============================================================================================================
app.get('/api/books', async (req, res) => {
  const tasks = await Books.findAll();
  res.json(tasks);
});

app.get('/api/books/:id', async (req, res) => {
  const task = await Books.findByPk(req.params.id);
  res.json(task);
});

app.post('/api/books', async (req, res) => {
  const task = await Books.create(req.body);
  res.json(task);
});

app.put('/api/books/:id', async (req, res) => {
  const task = await Books.findByPk(req.params.id);
  if (task) {
    await task.update(req.body);
    res.json(task);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.delete('/api/books/:id', async (req, res) => {
  const task = await Books.findByPk(req.params.id);
  if (task) {
    await task.destroy();
    res.json({ message: 'Book deleted' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});
// ============================================================================================================



// CRUD routes for Cart model
// ============================================================================================================
app.get('/api/cart', async (req, res) => {
  const cart = await Cart.findAll();
  res.json(cart);
});

app.get('/api/cart/count', async (req, res) => {
  const cart = await Cart.count();
  res.json(cart);
});

app.post('/api/cart', async (req, res) => {
  const cart = await Cart.create(req.body);
  res.json(cart);
});

app.put('/api/cart/:bookId', async (req, res) => {
  const cart = await Cart.findByPk(req.params.bookId);
  if (cart) {
    await cart.update(req.body);
    res.json({ message: 'Cart item updated' });
  } else {
    res.status(404).json({ message: 'Cart item not found' });
  }
});

app.delete('/api/cart/:bookId', async (req, res) => {
  const cart = await Cart.findByPk(req.params.bookId);
  if (cart) {
    await cart.destroy();
    res.json({ message: 'Cart item deleted' });
  } else {
    res.status(404).json({ message: 'Cart item not found' });
  }
});
// ============================================================================================================



// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  setTimeout(() => {
    Books.bulkCreate(booksSeed, { ignoreDuplicates: true })
      .then(() => {
        console.log('Seed data created');
        console.log();
        console.log('---> Ready to go! <---');
      });
  }, 2000);
});
