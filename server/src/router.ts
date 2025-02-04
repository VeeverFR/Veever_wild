import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import validateLogin from "./middlewares/validateLogin";
import verifyToken from "./middlewares/verifyToken";
import userActions from "./modules/user/userActions";
router.post("/api/login", validateLogin, userActions.authenticateUser);
router.get("/api/checkToken", verifyToken, (req, res) => {
  if (!req.user) {
    res.status(401).send("Accès interdit : utilisateur non trouvé");
    return;
  }
  res.status(200).json({ role: req.user.role });
});

router.use("/api", verifyToken);

import authorizeRole from "./middlewares/authorizeRole";
import adminActions from "./modules/admin/adminActions";
router.get("/api/admins", authorizeRole(["admin"]), adminActions.browse);
router.get("/api/admins/:id", authorizeRole(["admin"]), adminActions.read);
router.put("/api/admins/:id", authorizeRole(["admin"]), adminActions.edit);
router.post("/api/admins", authorizeRole(["admin"]), adminActions.add);
router.delete(
  "/api/admins/:id",
  authorizeRole(["admin"]),
  adminActions.destroy,
);

import chrActions from "./modules/chr/chrActions";
router.get("/api/chr", authorizeRole(["admin", "client"]), chrActions.browse);
router.get("/api/chr/:id", authorizeRole(["admin", "client"]), chrActions.read);

import hotelsActions from "./modules/hotels/hotelsActions";
router.get(
  "/api/hotels",
  authorizeRole(["admin", "client"]),
  hotelsActions.browse,
);
router.get(
  "/api/hotels/:id",
  authorizeRole(["admin", "client"]),
  hotelsActions.read,
);
router.put("/api/hotels/:id", authorizeRole(["admin"]), hotelsActions.edit);
router.post("/api/hotels", authorizeRole(["admin"]), hotelsActions.add);
router.delete(
  "/api/hotels/:id",
  authorizeRole(["admin"]),
  hotelsActions.destroy,
);

import keywordActions from "./modules/keyword/keywordActions";
router.get(
  "/api/keywords",
  authorizeRole(["admin", "client"]),
  keywordActions.browse,
);
router.get(
  "/api/keywords/:id",
  authorizeRole(["admin", "client"]),
  keywordActions.read,
);
router.put("/api/keywords/:id", authorizeRole(["admin"]), keywordActions.edit);
router.post("/api/keywords", authorizeRole(["admin"]), keywordActions.add);
router.delete(
  "/api/keywords/:id",
  authorizeRole(["admin"]),
  keywordActions.destroy,
);

import activityActions from "./modules/activities/activityActions";
router.get(
  "/api/activities",
  authorizeRole(["admin", "client"]),
  activityActions.browse,
);
router.get(
  "/api/activities/:id",
  authorizeRole(["admin", "client"]),
  activityActions.read,
);
router.put(
  "/api/activities/:id",
  authorizeRole(["admin"]),
  activityActions.edit,
);
router.post("/api/activities", authorizeRole(["admin"]), activityActions.add);
router.delete(
  "/api/activities/:id",
  authorizeRole(["admin"]),
  activityActions.destroy,
);

import { checkClientExists } from "./middlewares/checkClientExists/checkClientsExists";
import verifyId from "./middlewares/verifyId";
import clientsActions from "./modules/clients/clientsActions";
router.get("/api/clients", authorizeRole(["admin"]), clientsActions.browse);
router.get(
  "/api/clients/:id",
  authorizeRole(["admin", "client"]),
  clientsActions.read,
);
router.post("/api/clients", clientsActions.add);
router.put(
  "/api/clients/:id",
  checkClientExists,
  authorizeRole(["admin", "client"]),
  verifyId,
  clientsActions.update,
);
router.delete(
  "/api/clients/:id",
  authorizeRole(["admin", "client"]),
  verifyId,
  clientsActions.destroy,
);

import validateChr from "./middlewares/chrValidation/chrValidation";
import restaurantActions from "./modules/restaurant/restaurantActions";
router.get(
  "/api/restaurants",
  authorizeRole(["admin", "client"]),
  restaurantActions.browse,
);
router.get(
  "/api/restaurants/:id",
  authorizeRole(["admin", "client"]),
  restaurantActions.read,
);
router.put(
  "/api/restaurants/:id",
  authorizeRole(["admin"]),
  restaurantActions.edit,
);
router.post(
  "/api/restaurants",
  authorizeRole(["admin"]),
  validateChr,
  restaurantActions.add,
);
router.delete(
  "/api/restaurants/:id",
  authorizeRole(["admin"]),
  restaurantActions.destroy,
);

import genderActions from "./modules/gender/genderActions";
router.get(
  "/api/genders",
  authorizeRole(["admin", "client"]),
  genderActions.browse,
);
router.get(
  "/api/genders/:id",
  authorizeRole(["admin", "client"]),
  genderActions.read,
);
router.put("/api/genders/:id", authorizeRole(["admin"]), genderActions.edit);
router.post("/api/genders", authorizeRole(["admin"]), genderActions.add);
router.delete(
  "/api/genders/:id",
  authorizeRole(["admin"]),
  genderActions.destroy,
);
/* ************************************************************************* */
export default router;
