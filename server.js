const express = require("express");
const connectDB = require("./db");

const Answers = require("./models/Answers");

const app = express();
connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <form method="POST" action="/results"   >
          <div>
            <div  >
              <h3>Is javascript a dynamic language ?</h3>
              <label><input name="q1" type="checkbox" value="true" />True</label>
            </div>
            <div  >
              <label
                ><input name="q1" type="checkbox" value="false" />False</label
              >
            </div>
            <div  >
              <label><input name="q1" type="checkbox" value="No" />No</label>
            </div>
            <div  >
              <label
                ><input name="q1" type="checkbox" value="no-opinion" />I
                don't know</label
              >
            </div>
          <div>
            <div  >
              <h3>Is javascript a dynamic language ?</h3>
              <label><input name="q2" type="checkbox" value="true" />True</label>
            </div>
            <div  >
              <label
                ><input name="q2" type="checkbox" value="false" />False</label
              >
            </div>
            <div  >
              <label><input name="q2" type="checkbox" value="No" />No</label>
            </div>
            <div  >
              <label
                ><input name="q2" type="checkbox" value="no-opinion" />I
                don't know</label
              >
            </div>
          <div>
            <div  >
              <h3>Is javascript a dynamic language ?</h3>
              <label><input name="q3" type="checkbox" value="true" />True</label>
            </div>
            <div  >
              <label
                ><input name="q3" type="checkbox" value="false" />False</label
              >
            </div>
            <div  >
              <label><input name="q3" type="checkbox" value="No" />No</label>
            </div>
            <div  >
              <label
                ><input name="q3" type="checkbox" value="no-opinion" />I
                don't know</label
              >
            </div>
          <div>
            <div  >
              <h3>Is javascript a dynamic language ?</h3>
              <label><input name="q4" type="checkbox" value="true" />True</label>
            </div>
            <div  >
              <label
                ><input name="q4" type="checkbox" value="false" />False</label
              >
            </div>
            <div  >
              <label><input name="q4" type="checkbox" value="No" />No</label>
            </div>
            <div  >
              <label
                ><input name="q4" type="checkbox" value="no-opinion" />I
                don't know</label
              >
            </div>
          <div>
            <div  >
              <h3>Is javascript a dynamic language ?</h3>
              <label><input name="q5" type="checkbox" value="true" />True</label>
            </div>
            <div  >
              <label
                ><input name="q5" type="checkbox" value="false" />False</label
              >
            </div>
            <div  >
              <label><input name="q5" type="checkbox" value="No" />No</label>
            </div>
            <div  >
              <label
                ><input name="q5" type="checkbox" value="no-opinion" />I
                don't know</label
              >
            </div>
          <div>
            <div  >
              <h3>Is javascript a dynamic language ?</h3>
              <label><input name="q6" type="checkbox" value="true" />True</label>
            </div>
            <div  >
              <label
                ><input name="q6" type="checkbox" value="false" />False</label
              >
            </div>
            <div  >
              <label><input name="q6" type="checkbox" value="No" />No</label>
            </div>
            <div  >
              <label
                ><input name="q6" type="checkbox" value="no-opinion" />I
                don't know</label
              >
            </div>
          <div>
            <div  >
              <h3>Is javascript a dynamic language ?</h3>
              <label><input name="q7" type="checkbox" value="true" />True</label>
            </div>
            <div  >
              <label
                ><input name="q7" type="checkbox" value="false" />False</label
              >
            </div>
            <div  >
              <label><input name="q7" type="checkbox" value="No" />No</label>
            </div>
            <div  >
              <label
                ><input name="q7" type="checkbox" value="no-opinion" />I
                don't know</label
              >
            </div>
          <div>
            <div  >
              <h3>Is javascript a dynamic language ?</h3>
              <label><input name="q8" type="checkbox" value="true" />True</label>
            </div>
            <div  >
              <label
                ><input name="q8" type="checkbox" value="false" />False</label
              >
            </div>
            <div  >
              <label><input name="q8" type="checkbox" value="No" />No</label>
            </div>
            <div  >
              <label
                ><input name="q8" type="checkbox" value="no-opinion" />I
                don't know</label
              >
            </div>
          <div>
            <div  >
              <h3>Is javascript a dynamic language ?</h3>
              <label><input name="q9" type="checkbox" value="true" />True</label>
            </div>
            <div  >
              <label
                ><input name="q9" type="checkbox" value="false" />False</label
              >
            </div>
            <div  >
              <label><input name="q9" type="checkbox" value="No" />No</label>
            </div>
            <div  >
              <label
                ><input name="q9" type="checkbox" value="no-opinion" />I
                don't know</label
              >
            </div>
          <div>
            <div  >
              <h3>Is javascript a dynamic language ?</h3>
              <label><input name="q10" type="checkbox" value="true" />True</label>
            </div>
            <div  >
              <label
                ><input name="q10" type="checkbox" value="false" />False</label
              >
            </div>
            <div  >
              <label><input name="q10" type="checkbox" value="No" />No</label>
            </div>
            <div  >
              <label
                ><input name="q10" type="checkbox" value="no-opinion" />I
                don't know</label
              >
            </div><br/>
            <input type="submit" value="Submit my answers"/>
          </div>
        </form>
      </body>
    </html>
    
    `);
});

app.post("/results", async (req, res) => {
  let answers = null;
  try {
    answers = new Answers({
      results: [
        { q1: req.body.q1 },
        { q2: req.body.q2 },
        { q3: req.body.q3 },
        { q4: req.body.q4 },
        { q5: req.body.q5 },
        { q6: req.body.q6 },
        { q7: req.body.q7 },
        { q8: req.body.q8 },
        { q9: req.body.q9 },
        { q10: req.body.q10 }
      ]
    });

    await answers.save();
  } catch (err) {
    console.log(err.message);
  }
  res.send("This if your final results");
});

app.listen(3000, () => {
  console.log("server listenning on port 3000");
});
