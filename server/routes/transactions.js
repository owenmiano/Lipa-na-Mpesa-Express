const router=require("express").Router();
const {getOAuthToken}=require("../middleware/generateToken")
const transacControllers=require("../controllers/transacControllers")
router.post("/stk",getOAuthToken,transacControllers.payAmount)
router.post("/myCallBackUrl",getOAuthToken,transacControllers.myCallBack)
router.get("/allTransactions",getOAuthToken,transacControllers.fetchAllTransactions)

module.exports=router;