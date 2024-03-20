const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route for adding two numbers
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;

    // Check if both numbers are provided
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Please provide both numbers' });
    }

    // Parse numbers from string to integer
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);

    // Check if the inputs are valid numbers
    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Please provide valid numbers' });
    }

    // Calculate the sum
    const sum = n1 + n2;

    // Send the result
    res.json({ result: sum });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
