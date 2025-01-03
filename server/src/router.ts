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

import hotelsActions from "./modules/hotels/hotelsActions";
router.get("/api/hotels", hotelsActions.browse);
router.get("/api/hotels/:id", hotelsActions.read);
router.put("/api/hotels", hotelsActions.edit);
router.post("api/hotels", hotelsActions.add);
router.delete("/api/hotels", hotelsActions.destroy);

/* ************************************************************************* */

export default router;
