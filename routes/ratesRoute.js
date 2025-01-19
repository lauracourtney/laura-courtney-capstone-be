import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();

router.route("/rates").post(async (req, res) => {
  let checkin = req.body[0];
  let checkout = req.body[1];

  try {
    const rates = await knex("rates").whereBetween("dates", [
      checkin,
      checkout,
    ]);

    // Remove checkout day rate as its NA
    rates.pop();

    // Reduce loops over the rates array and for each value add its to the accumulator(accumulator starts at 0)
    const rateFee = rates.reduce(
      (accumulator, currentValue) => accumulator + currentValue.rates,
      0
    );

    if (!rates) {
      return res.status(404).send({
        message: `No rates available for selected dates`,
      });
    }

    res.json({ rateFee: rateFee });
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
});

export default router;
