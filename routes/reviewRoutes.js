import { Router } from "express";
import {
  addReview,
  getReview,
  deleteReview,
} from "../controllers/reviewController.js";
import { isReviewExists } from "../middlewares/isExists.js";
import { isMyself } from "../middlewares/isPermitted.js";

const reviewRouter = Router();

reviewRouter.post("/add", addReview);

reviewRouter
  .route("/:id")
  .get(isReviewExists, getReview)
  .delete(isReviewExists, isMyself, deleteReview);

export default reviewRouter;
