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
router.post("/api/admins", adminActions.add); //test
router.delete("/api/admins/:id", adminActions.destroy);

import hotelsActions from "./modules/hotels/hotelsActions";
router.get("/api/hotels", hotelsActions.browse);
router.get("/api/hotels/:id", hotelsActions.read);
router.put("/api/hotels/:id", hotelsActions.edit);
router.post("/api/hotels", hotelsActions.add);
router.delete("/api/hotels/:id", hotelsActions.destroy);

import keywordActions from "./modules/keyword/keywordActions";
router.get("/api/keywords", keywordActions.browse);
router.get("/api/keywords/:id", keywordActions.read);
router.put("/api/keywords/:id", keywordActions.edit);
router.post("/api/keywords", keywordActions.add);
router.delete("/api/keywords/:id", keywordActions.destroy);

import activityActions from "./modules/activities/activityActions";
router.get("/api/activities", activityActions.browse);
router.get("/api/activities/:id", activityActions.read);
router.put("/api/activities/:id", activityActions.edit);
router.post("/api/activities", activityActions.add);
router.delete("/api/activities/:id", activityActions.destroy);

import { checkClientExists } from "./middleware/checkClientExists/checkClientsExists";
import clientsActions from "./modules/clients/clientsActions";
router.get("/api/clients", clientsActions.browse);
router.get("/api/clients/:id", clientsActions.read);
router.post("/api/clients", clientsActions.add);
router.put("/api/clients/:id", checkClientExists, clientsActions.update);
router.delete("/api/clients/:id", clientsActions.destroy);

import validateChr from "./middleware/chrValidation/chrValidation";
import restaurantActions from "./modules/restaurant/restaurantActions";
router.get("/api/restaurants", restaurantActions.browse);
router.get("/api/restaurants/:id", restaurantActions.read);
router.put("/api/restaurants/:id", restaurantActions.edit);
router.post("/api/restaurants", validateChr, restaurantActions.add);
router.delete("/api/restaurants/:id", restaurantActions.destroy);

import genderActions from "./modules/gender/genderActions";
router.get("/api/genders", genderActions.browse);
router.get("/api/genders/:id", genderActions.read);
router.put("/api/genders/:id", genderActions.edit);
router.post("/api/genders", genderActions.add);
router.delete("/api/genders/:id", genderActions.destroy);
/* ************************************************************************* */
export default router;
