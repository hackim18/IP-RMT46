const express = require("express");
const Controller = require("../controllers/controller");
const authentication = require("../middlewares/authentication");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ message: "hello world" }]);
});
router.post("/login", Controller.login); //
router.post("/register", Controller.register); //
router.get("/find-player/:tag", Controller.findPlayerByTag); //
router.get("/find-clan/:tag", Controller.findClanByTag); //
router.get("/player-rankings/:country", Controller.playerRankings); //
router.use(authentication);
router.post("/players/:playerTag/verifytoken", Controller.verifyToken); //
router.post("/add-account", Controller.addAccount); //
router.get("/get-account", Controller.getAccount); //
router.get("/get-country", Controller.getCountry);
router.delete("/delete-account/:id", Controller.deleteAccount); //

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
router.patch("/add-images", upload.array("images", 5), Controller.addImages); // //admin
router.get("/get-image", Controller.getImage); //

router.delete("/delete-image/:id", Controller.deleteImage); // //admin
router.put("/change-password", Controller.changePassword); //

module.exports = router;
