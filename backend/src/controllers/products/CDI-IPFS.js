require('dotenv').config();require('dotenv').config();
const {API_KEY_PINATA, API_SECRET_KEY_PINATA} = process.env;
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const recursive = require('recursive-fs');
const basePathConverter = require('base-path-converter');




            // const url = `https://api.pinata.cloud/data/testAuthentication`;
            // const requestPinata = await axios.get(url, {
            //         headers: {
            //             pinata_api_key: `${API_KEY_PINATA}`,
            //             pinata_secret_api_key: `${API_SECRET_KEY_PINATA}`,
            //         }
            //     })
            //     console.log("Solicitud API",requestPinata.data)

function pinDirectoryToIPFS (req, res, API_KEY_PINATA = '9386821204b6b65257d7', API_SECRET_KEY_PINATA = '8dfee843896104bc4e80c9e4a9da04bd1eb79568ecf6d5cdfb5d70fa7770f1e5') {
    
    const {image} = req.body
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const src = './desktop';

    //we gather the files from a local directory in this example, but a valid readStream is all that's needed for each file in the directory.
    recursive.readdirr(src, function (err, dirs, files) {
        let data = new FormData();
        files.forEach((image) => {
            //for each file stream, we need to include the correct relative file path
            data.append(`file`, fs.createReadStream(image), {
                filepath: basePathConverter(src, image)
            });
        });

        const metadata = JSON.stringify({
            name: 'testname',
            keyvalues: { exampleKey: 'exampleValue' }
            });
        data.append('pinataMetadata', metadata);

        return axios
        .post(url, data, {
            maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large directories
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                pinata_api_key: API_KEY_PINATA,
                pinata_secret_api_key: API_SECRET_KEY_PINATA
            }
        })
        .then(function (response) {
            console.log(response)
            // const data = JSON.parse(JSON.stringify(response))
            res.json(response)
        })
        .catch(function (error) {
            //handle error here
            console.log(error)
            res.json(error)
        });
});
};


module.exports = {
    pinDirectoryToIPFS
}
