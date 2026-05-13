import Express from"express";
import cors from"cors";

import eventRoutes from "./routes/eventRoute";
import categoryRoutes from "./routes/categoryRoute";
import pembicraRoute from "./routes/pembicraRoute";

const app = Express();
const port = 3000;

app.use(cors());
app.use(Express.json());

app.get("/", (req, res) => {
  res.send("Ini adalah api untuk invofest");
});

app.use("/events", eventRoutes);
app.use("/categories", categoryRoutes);
app.use("/pembicara", pembicraRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});