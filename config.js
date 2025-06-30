const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined? "0vlXBKBJ#WarOd9CCSDyhqHIV9ybyIa9bVHIFRaccVKV0HMgVbq8":process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb://mongo:auzkmuHxllwCUaXkJbIkgPPfLCOxZJFC@interchange.proxy.rlwy.net:44312",
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDzyQ7tnQkquWX8bc1y9TE0auCHbC_QQO8",
tokenm: process.env.GITHUB_TOKEN || "false",
repo: process.env.GITHUB_REPO || "RAWANA-MD",
}; 


