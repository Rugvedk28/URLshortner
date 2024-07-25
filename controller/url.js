const { nanoid }= require("nanoid");
const URL = require("../models/url");
async function handleGenerateNewShortURL(req, res) {
        const body= req.body;
        if(!body.url)
            return res.status(400).json({
                error:"url is required"
            })
        const shortID= nanoid(7);
        await URL.create({
            shortID:shortID,
            redirectedURL:body.url,
            visitHistory:[],
        });
        return res.json({id:shortID});
    }

    module.exports = {
        handleGenerateNewShortURL,
    }