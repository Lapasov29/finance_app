import { Router } from "express";
import { categoryCreateHandler } from "../../../handler/category/category.handler.js";
import { categoryValidation } from "../../../middleware/category.validation.js";

const route = Router();

route.post("/", categoryValidation, categoryCreateHandler);

export default route;
