# subirArchivos

To upload the files it is necessary to take into account the following steps,

1. We will create the service account within the Google cloud console as shown in the image "1" in the images folder.

2. We need to grant access to this service account. You must select all rights as owner as shown in image "2" in the image folder.

3.create the jsoncredentials key file as shown in image "3" in the images folder.

4. And now you need to include the credentials.json file inside the root directory of your project.

5. In the variable named "GOOGLE_API_FOLDER_ID" you must assign the id of the folder to which the file will be uploaded.
We enter the google drive, then the folder where it will be saved and then we extract the url id as shown in image "4" in the images folder.

👍😁