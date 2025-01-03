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

// Defin admin-related routes
import adminActions from "./modules/admin/adminActions";

router.get("/api/admins", adminActions.browse);
router.get("/api/admins/:id", adminActions.read);
router.put("/api/admins/:id", adminActions.edit);
router.post("/api/admins", adminActions.add);
router.delete("/api/admins/:id", adminActions.destroy);

/* ************************************************************************* */

export default router;
