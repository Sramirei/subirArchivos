const fs = require('fs')
const { google } = require('googleapis')

const GOOGLE_API_FOLDER_ID = '1nvAXzOsH8to4NvdpMaSPlYwe7flczsQc'

const date = new Date()
.toLocaleDateString()
.replace('/','-').replace('/','-')

async function uploadFile(){
    try{
        const auth = new google.auth.GoogleAuth({
            keyFile: './credentials.json',
            scopes: ['https://www.googleapis.com/auth/drive']
        })

        const driveService = google.drive({
            version: 'v3',
            auth
        })

        const fileMetaData = {
            'name': `${date}-snow.sql`,
            'parents': [GOOGLE_API_FOLDER_ID]
        }

        const media = {
            mimeType: 'application/sql',
            body: fs.createReadStream(`./Nueva carpeta/${date}-snow.jpg`)
        }

        const response = await driveService.files.create({
            resource: fileMetaData,
            media: media,
            field: 'id'
        })
        return response.data.id

    }catch(err){
        console.log('Upload file error', err)
    }
}

uploadFile().then(data => {
    console.log(data)
})