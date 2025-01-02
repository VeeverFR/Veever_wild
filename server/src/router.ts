import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import restaurantActions from "./modules/restaurant/restaurantActions";
router.get("/api/restaurants", restaurantActions.browse);
router.get("/api/restaurants/:id", restaurantActions.read);
router.put("/api/restaurants", restaurantActions.edit);
router.post("api/restaurants", restaurantActions.add);
router.delete("/api/restaurants", restaurantActions.deleteRestaurant);
/* ************************************************************************* */
export default router;
