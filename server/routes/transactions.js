const router=require("express").Router();
const {getOAuthToken}=require("../middleware/generateToken")
const transacControllers=require("../controllers/transacControllers")
router.post("/stk",getOAuthToken,transacControllers.payAmount)

module.exports=router;