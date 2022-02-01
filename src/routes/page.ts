import express from "express";

import controllers from "../controllers";

const router = express.Router();

router
  .route("/")
  .get(controllers.pages.getHome);

router
  .route("/about")
  .get(controllers.pages.getAbout);

export default router;