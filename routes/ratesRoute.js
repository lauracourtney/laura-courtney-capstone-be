import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();

router.get("/rates", async (req, res) => {
  try {
    const rates = await knex("rates").where({ id: req.params.id }).first();

    if (!rates) {
      return res.status(404).send({
        message: `No rates available for selected dates`,
      });
    }

    await knex("inventories").where({ id: req.params.id }).del();
    res.status(204).send("Inventory item deleted");
  } catch (e) {
    res.status(500).json({
      message: `Error deleting Inventory ${req.params.id}`,
      error: e.message,
    });
  }
});
