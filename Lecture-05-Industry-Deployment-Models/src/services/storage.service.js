const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey:"private_4AsUGQ7T07puOuKtXrsVpEuyEQQ="

    
})

async function uploadFile(buffer){
    const result = await imagekit.client.upload({
        file:buffer,
        fileName:"image.jpg",
    })

    return result;
    
}

module.exports = uploadFile;