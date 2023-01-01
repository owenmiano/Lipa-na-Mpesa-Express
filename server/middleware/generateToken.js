const axios=require('axios')

const getOAuthToken=async(req,res,next)=>{

    let consumer_key = process.env.consumer_key;
    let consumer_secret = process.env.consumer_secret;

    let url = process.env.oauth_token_url;

    

    let auth = new Buffer.from(`${consumer_key}:${consumer_secret}`).toString('base64');

    try{

        let {data} = await axios.get(url,{
            "headers":{
                "Authorization":`Basic ${auth}`
            }
        });

        req.token = data['access_token'];

        return next();

    }catch(err){
        return res.send({
            success:false,
            message:err.message
        });

    }
    
};
module.exports={
    getOAuthToken
}