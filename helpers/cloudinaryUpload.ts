import cloudi from "cloudinary";
require("dotenv").config();
const cloudinary = cloudi.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

type UploadFolder = "profile" | "company";

const uploadToCloudinary = async (
  image: string,
  fileID: string,
  uploadFolder: UploadFolder,
  exists: boolean = false
) => {
  try {
    if (exists) {
      let des = await cloudinary.uploader.destroy(
        `pavelify/${uploadFolder}/` + fileID
      );
    }
    let url = await cloudinary.uploader.upload(image, {
      folder: `pavelify/${uploadFolder}/` + fileID + "/",
    });
    return url.secure_url;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default uploadToCloudinary;
