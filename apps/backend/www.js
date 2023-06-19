import app from "./index.js";
import { startConnectionWithDatabase } from "./mongo/index.js";

const port = process.env.PORT || 3003;

console.log("hi");

startConnectionWithDatabase()
  .then(() => {
    console.log("Connection with database was successful");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
