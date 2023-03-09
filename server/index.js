const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers

const userRouter = require("./routes/Users");
const rankRouter = require("./routes/Ranks");
const documentTypeRouter = require("./routes/DocumentType");
const religionRouter = require("./routes/Religion");
const regionRouter = require("./routes/RegionAssignment");
const employeeRouter = require("./routes/Employee");
const roleRouter = require("./routes/Role");
const genderRouter = require("./routes/Gender");
const taxRouter = require("./routes/TaxStatuses");
const schoolRouter = require("./routes/School");
const attRouter = require("./routes/Attachments");








app.use("/auth", userRouter);
app.use("/ranks", rankRouter);
app.use("/documenttype", documentTypeRouter);
app.use("/religion", religionRouter);
app.use("/region", regionRouter);
app.use("/employee", employeeRouter);
app.use("/role", roleRouter);
app.use("/gender", genderRouter);
app.use("/taxstatuses", taxRouter);
app.use("/school", schoolRouter);
app.use("/attachments", attRouter);



app.use('/Images', express.static('./Images'))




db.sequelize.sync().then(() => {
  app.listen(3020, () => {
    console.log("Server running on port 3020");
  });
});