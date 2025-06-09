/** 
* @param filename
* @param accelerated
* @returns string
* @example  
* const file = s3("filename.jpg", true);
* @output 
* https://s3-accelerate.amazonaws.com/bucketname/filename.jpg
*/

export function s3(filename: string, accelerated = true): string {

    if(filename === "") {
        throw new Error("Filename is empty");
    }

    const s3bucket = import.meta.env.REACT_APP_S3_BUCKET ?? "";

    if(!s3bucket || s3bucket === "") {
        throw new Error("REACT_APP_S3_BUCKET is not set in environment variables");
    }

    if(accelerated) {
        return `https://${s3bucket}.s3-accelerate.amazonaws.com/${filename}`;
    }

    const s3bucketRegion = import.meta.env.REACT_APP_S3_BUCKET_REGION ?? "eu-west-1";    


  return `https://${s3bucket}.s3.${s3bucketRegion}.amazonaws.com/${filename}`;
}