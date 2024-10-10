const PORT = process.env.PORT ?? 8000;
const express = requiere("express");
const app = express();
//get all todos
app.get("/todos", async (req, res) => {
  try {
    //await
  } catch (err) {
    console.error(error);
  }
});
app.listen(PORT, () => `Server running on PORT ${PORT}`);
