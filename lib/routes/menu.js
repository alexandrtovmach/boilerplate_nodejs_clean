const express = require("express");
const router = express.Router();
const menuService = require("../services/menu");

router.get("/", (req, res, next) => {
  menuService.getAll((err, result) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    }
    res.status(200).send(result);
  });
});

router.get("/:id", (req, res, next) => {
  menuService.getMenuById(req.params.id, (err, result) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    }
    res.status(200).send(result);
  });
});

router.post("/", (req, res, next) => {
  menuService.addMenu(req.body, (err, result) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    }
    res.status(200).send(result);
  });
});

router.put("/:id", (req, res, next) => {
  menuService.updateMenu(req.params.id, req.body, (err, result) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    }
    res.status(200).send(result);
  });
});

module.exports = router;
