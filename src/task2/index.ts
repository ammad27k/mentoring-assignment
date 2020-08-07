import csvtojson from "csvtojson";
import { pipeline } from "stream";
import fs from "fs";

const csvFilePath = "./resource/csv/nodejs-hw1-ex1.csv"
const outFilePath = "./resource/json/nodejs-hw1-ex1.txt"

const parameter = {delimiter : ";"};

pipeline(
    csvtojson(parameter).fromFile(csvFilePath),
    fs.createWriteStream(outFilePath),
    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
      }
    }
  );