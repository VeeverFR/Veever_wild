import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import validateLogin from "./middlewares/validateLogin";
import verifyToken from "./middlewares/verifyToken";
import userActions from "./modules/user/userActions";
router.post("/api/login", validateLogin, userActions.authenticateUser);
router.post("/api/logout", userActions.logoutUser);
router.get("/api/checkToken", verifyToken, (req, res) => {
  if (!req.user) {
    res.status(401).send("Accès interdit : utilisateur non trouvé");
    return;
  }
  res.status(200).json({ role: req.user.role });
});

import authorizeRole from "./middlewares/authorizeRole";
import adminActions from "./modules/admin/adminActions";
router.get(
  "/api/admins",
  verifyToken,
  authorizeRole(["admin"]),
  adminActions.browse,
);
router.get(
  "/api/admins/:id",
  verifyToken,
  authorizeRole(["admin"]),
  adminActions.read,
);
router.put(
  "/api/admins/:id",
  verifyToken,
  authorizeRole(["admin"]),
  adminActions.edit,
);
router.post(
  "/api/admins",
  verifyToken,
  authorizeRole(["admin"]),
  adminActions.add,
);
router.delete(
  "/api/admins/:id",
  verifyToken,
  authorizeRole(["admin"]),
  adminActions.destroy,
);

import chrActions from "./modules/chr/chrActions";
router.get(
  "/api/chr",
  verifyToken,
  authorizeRole(["admin", "client"]),
  chrActions.browse,
);
router.get(
  "/api/chr/:id",
  verifyToken,
  authorizeRole(["admin", "client"]),
  chrActions.read,
);

import hotelsActions from "./modules/hotels/hotelsActions";
router.get(
  "/api/hotels",
  verifyToken,
  authorizeRole(["admin", "client"]),
  hotelsActions.browse,
);
router.get(
  "/api/hotels/:id",
  verifyToken,
  authorizeRole(["admin", "client"]),
  hotelsActions.read,
);
router.put(
  "/api/hotels/:id",
  verifyToken,
  authorizeRole(["admin"]),
  hotelsActions.edit,
);
router.post(
  "/api/hotels",
  verifyToken,
  authorizeRole(["admin"]),
  hotelsActions.add,
);
router.delete(
  "/api/hotels/:id",
  verifyToken,
  authorizeRole(["admin"]),
  hotelsActions.destroy,
);

import keywordActions from "./modules/keyword/keywordActions";
router.get(
  "/api/keywords",
  verifyToken,
  authorizeRole(["admin", "client"]),
  keywordActions.browse,
);
router.get(
  "/api/keywords/:id",
  verifyToken,
  authorizeRole(["admin", "client"]),
  keywordActions.read,
);
router.put(
  "/api/keywords/:id",
  verifyToken,
  authorizeRole(["admin"]),
  keywordActions.edit,
);
router.post(
  "/api/keywords",
  verifyToken,
  authorizeRole(["admin"]),
  keywordActions.add,
);
router.delete(
  "/api/keywords/:id",
  authorizeRole(["admin"]),
  keywordActions.destroy,
);

import activityActions from "./modules/activities/activityActions";
router.get(
  "/api/activities",
  verifyToken,
  authorizeRole(["admin", "client"]),
  activityActions.browse,
);
router.get(
  "/api/activities/:id",
  verifyToken,
  authorizeRole(["admin", "client"]),
  activityActions.read,
);
router.put(
  "/api/activities/:id",
  verifyToken,
  authorizeRole(["admin"]),
  activityActions.edit,
);
router.post(
  "/api/activities",
  verifyToken,
  authorizeRole(["admin"]),
  activityActions.add,
);
router.delete(
  "/api/activities/:id",
  verifyToken,
  authorizeRole(["admin"]),
  activityActions.destroy,
);

import { checkClientExists } from "./middlewares/checkClientExists/checkClientsExists";
import verifyId from "./middlewares/verifyId";
import clientsActions from "./modules/clients/clientsActions";
router.get("/api/clients", authorizeRole(["admin"]), clientsActions.browse);
router.get(
  "/api/clients/:id",
  verifyToken,
  authorizeRole(["admin", "client"]),
  clientsActions.read,
);
router.post("/api/clients", clientsActions.add);
router.put(
  "/api/clients/:id",
  checkClientExists,
  verifyToken,
  authorizeRole(["admin", "client"]),
  verifyId,
  clientsActions.update,
);
router.delete(
  "/api/clients/:id",
  verifyToken,
  authorizeRole(["admin", "client"]),
  verifyId,
  clientsActions.destroy,
);

import validateChr from "./middlewares/chrValidation/chrValidation";
import restaurantActions from "./modules/restaurant/restaurantActions";
router.get(
  "/api/restaurants",
  verifyToken,
  authorizeRole(["admin", "client"]),
  restaurantActions.browse,
);
router.get(
  "/api/restaurants/:id",
  verifyToken,
  authorizeRole(["admin", "client"]),
  restaurantActions.read,
);
router.put(
  "/api/restaurants/:id",
  verifyToken,
  authorizeRole(["admin"]),
  restaurantActions.edit,
);
router.post(
  "/api/restaurants",
  verifyToken,
  authorizeRole(["admin"]),
  validateChr,
  restaurantActions.add,
);
router.delete(
  "/api/restaurants/:id",
  verifyToken,
  authorizeRole(["admin"]),
  restaurantActions.destroy,
);

import genderActions from "./modules/gender/genderActions";
router.get("/api/genders", genderActions.browse);
router.get("/api/genders/:id", genderActions.read);
router.put(
  "/api/genders/:id",
  verifyToken,
  authorizeRole(["admin"]),
  genderActions.edit,
);
router.post(
  "/api/genders",
  verifyToken,
  authorizeRole(["admin"]),
  genderActions.add,
);
router.delete(
  "/api/genders/:id",
  verifyToken,
  authorizeRole(["admin"]),
  genderActions.destroy,
);

// import passport from "passport";
// import "./Auth/Facebook";

// router.get(
//   "/auth/facebook",
//   passport.authenticate("facebook", { scope: ["email"] }),
// );

// router.get(
//   "/auth/facebook/callback",
//   passport.authenticate("facebook", { failureRedirect: "/login" }),
//   (req, res) => {
//     if (!req.user) {
//       return res.status(401).redirect("/login");
//     }
//     const token = jwt.sign(
//       { id: req.user.id, role: req.user.role },
//       process.env.JWT_SECRET as string,
//       { expiresIn: "1h" },
//     );
//     res.cookie("token", token, { httpOnly: true, secure: true });
//     res.redirect("http://localhost:3000/");
//   },
// );
// import "./Auth/Google";
// router.get(
//   "/auth/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"],
//   }),
// );

// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/login",
//   }),
//   (req, res) => {
//     res.redirect("http://localhost:3000/");
//   },
// );
// router.get("/auth/user", verifyToken, (req, res) => {

//   if (req.user) {
//     res.json(req.user);
//   } else {
//     res.status(401).json({ message: "Non authentifié" });
//   }
// });

/* ************************************************************************* */
export default router;
