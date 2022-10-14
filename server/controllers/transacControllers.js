const axios=require('axios')

exports.payAmount=async(req,res)=>{
    const phone=req.body.phone.substring(1)
    const money=req.body.amount
    const date=new Date()
    const timestamp=
         date.getFullYear() +
         ("0" + (date.getMonth() + 1)).slice(-2) +
         ("0" + date.getDate()).slice(-2) +
         ("0" + date.getHours()).slice(-2) +
         ("0" + date.getMinutes()).slice(-2) +
         ("0" + date.getSeconds()).slice(-2) 
    let token = req.token;
    let auth = `Bearer ${token}`;
  console.log(auth)

    let url = process.env.lipa_na_mpesa_url;
    let bs_short_code = process.env.lipa_na_mpesa_shortcode;
    let passkey = process.env.lipa_na_mpesa_passkey;

    let password = new Buffer.from(`${bs_short_code}${passkey}${timestamp}`).toString('base64');
    let transcation_type = "CustomerPayBillOnline";
    let amount = `${money}`; //you can enter any amount
    let partyA = `254${phone}`; //should follow the format:2547xxxxxxxx
    let partyB = bs_short_code;
    let phoneNumber = `254${phone}`; //should follow the format:2547xxxxxxxx
    let callBackUrl = "https://5cec-197-237-246-189.ngrok.io/mpesa/lipa-na-mpesa-callback";
    let accountReference = `254${phone}`;
    let transaction_desc = "Testing"

    try {

        let {data} = await axios.post(url,{
            "BusinessShortCode":bs_short_code,
            "Password":password,
            "Timestamp":timestamp,
            "TransactionType":transcation_type,
            "Amount":amount,
            "PartyA":partyA,
            "PartyB":partyB,
            "PhoneNumber":phoneNumber,
            "CallBackURL":callBackUrl,
            "AccountReference":accountReference,
            "TransactionDesc":transaction_desc
        },{
            "headers":{
                "Authorization":auth
            }
        })
        console.log(data)
        return res.status(200).json(data)
    }catch(err){

        return res.send({
            success:false,
            message:err.message
        });
    }
}