const fs = require('fs')
const { google } = require('googleapis')

const GOOGLE_API_FOLDER_ID = '10ksu1em8fuJ0hQUv4Wf6-2TOefCbqjvP' //this is the id of the folder in the google drive read the readme file to know how to find it

let date = new Date()
let day = `${(date.getDate())}`.padStart(2,'0');
let month = `${(date.getMonth()+1)}`.padStart(2,'0');
let year = date.getFullYear();
let fullDate = `${day}${month}${year}`

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
            'name': `${fullDate}-snow.sql`, //you should change the file extension according to your need
            'parents': [GOOGLE_API_FOLDER_ID]
        }

        const media = {
            mimeType: 'application/sql',
            body: fs.createReadStream(`./BackupDolphinManager/${fullDate}_NOMBREDELARCHIVO.gz`) //you should change the file extension according to your need
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