const router=require("express").Router();
const {getOAuthToken}=require("../middleware/generateToken")
const transacControllers=require("../controllers/transacControllers")
router.post("/stk",getOAuthToken,transacControllers.payAmount)
router.post("/myCallBackUrl",getOAuthToken,transacControllers.myCallBack)
router.get("/allTransactions",transacControllers.fetchAllTransactions)

module.exports=router;