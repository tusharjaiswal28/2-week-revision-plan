const crypto = require("crypto");
const ApiKey = require("../models/ApiKey");

exports.generateApiKey = async (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
        return res.status(400).json({
            success: false,
            message: "Invalid email format"
        });
    }

    const existing = await ApiKey.findOne({ email });

    if (existing) {
        return res.status(400).json({
            success: false,
            message: "Email already registered. Use existing API key."
        });
    }

    const apiKey = "ak_" + crypto.randomBytes(16).toString("hex");

    const newKey = await ApiKey.create({ email, apiKey });

    res.status(201).json({
        success: true,
        message: "API key generated successfully",
        data:{
            email: newKey.email,
            apiKey: newKey.apiKey
        }
    });
};
