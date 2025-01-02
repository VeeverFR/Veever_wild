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

import clientsActions from "./modules/clients/clientsActions";

router.get("/api/clients", clientsActions.browse);
router.get("/api/clients/:id", clientsActions.read);
router.post("/api/clients", clientsActions.add);
router.put("/api/clients/:id", clientsActions.update);
router.delete("/api/clients/:id", clientsActions.delete);

/* ************************************************************************* */

export default router;
