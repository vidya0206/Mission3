const express = require("express");
const router = express.Router();

//post request

router.post("/car-value", (req, res) => {
  const { model, year } = req.body;

  // Check if input values are valid
  if (!model || !year || typeof year !== "number") {
    return res.status(400).json({ error: "there is an error" });
  }

  // Calculate the car value
  const modelName = model.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let sum = 0;
  for (let i = 0; i < modelName.length; i++) {
    const charCode = modelName.charCodeAt(i);
    sum += charCode - 96;
  }
  const carValue = sum * 100 + year;

  // Return the calculated car value
  return res.status(200).json({ car_value: carValue });
});

module.exports = router;
