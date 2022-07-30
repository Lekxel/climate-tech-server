import AWS from "aws-sdk";
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  // region: AWS_REGION,
});

const s3Bucket = new AWS.S3({
  params: { Bucket: process.env.AWS_BUCKET || "pavelify" },
});

export const uploadFileToCloud = async (
  file: string,
  fileType: string,
  fileName: string
) => {
  try {
    const base64Data = Buffer.from(
      file.replace(/^data:.+;base64,/, ""),
      "base64"
    );

    const params = {
      Bucket: process.env.AWS_BUCKET || "pavelify",
      Key: `${fileName}`, // type is not required
      Body: base64Data,
      ACL: "public-read",
      ContentEncoding: "base64", // required
      ContentType: fileType, // required. Notice the back ticks
    };

    let location = "";
    let key = "";
    try {
      const { Location, Key } = await s3Bucket.upload(params).promise();
      location = Location;
      key = Key;
    } catch (error) {
      console.log(error);
    }

    return location;
  } catch (err) {
    console.log(err);
    return false;
  }
};
