const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Netflix Login Backend is running!");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const validEmail = "test@gmail.com";
  const validPassword = "123456";

  if (email === validEmail && password === validPassword) {
    res.json({
      success: true,
      message: "Login successful",
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});