
const express = require('express');
const app = express()
const path = require('path');
const Subscriber = require('./models/subscribers');


// Your code goes here
app.use(express.static(path.join(__dirname, '../public')));

// Route to get subscriber
app.get('/subscribers', async (req, res) => {
    try {
      const subscribers = await Subscriber.find();
      res.json(subscribers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
// Route to get subscriber names and subscribedChannel only
app.get('/subscribers/names', async (req, res) => {
try {
    const subscribers = await Subscriber.find({}, { name: 1, subscribedChannel: 1, _id: 0 });
    res.json(subscribers);
} catch (err) {
    res.status(500).json({ message: err.message });
}
});

// Route to get a subscriber by id
app.get('/subscribers/:id', async (req, res) => {
try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
    return res.status(400).json({ message: 'Subscriber not found' });
    }
    res.json(subscriber);
} catch (err) {
    res.status(400).json({ message: err.message });
}
});

module.exports = app;
