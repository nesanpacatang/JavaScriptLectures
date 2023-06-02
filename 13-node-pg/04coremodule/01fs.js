// Writing/creating a File

// Callback version

// const fs = require("fs");

// fs.writeFile("file1.txt", "Hello World", (err) => {
//   if (err) throw (err, console.log("File created"));
// });

// promise version

// const fs = require("fs/promises");

// fs
//   .writeFile("file2.txt", "hello world from promises")
//   .then(() => console.log("file created"))
//   .catch((err) => console.log(err));

//Sync version

// const fs = require("fs");
// fs.writeFileSync("file3.txt", "hello world 3 from sync");
// console.log("file created");

//Async Await
// const fs = require("fs/promises");
// async function createFile(filename, content) {
//   try {
//     await fs.writeFile(filename, content);
//     console.log("file create");
//   } catch (error) {
//     console.log(err);
//   }
// }

// createFile("file4.txt", "hello world 4 from async/await");

//READING A FILE
// const fs = require("fs/promises");
// async function readFile(filename) {
//   try {
//     const data = await fs.readFile(filename, "utf8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// readFile("file1.txt");
// readFile("file2.txt");
// readFile("file3.txt");
// readFile("file4.txt");

//Delete a file

// const fs = require("fs/promises");
// async function deleteFile(filename) {
//   try {
//     await fs.unlink(filename);
//     console.log(`file ${filename} deleted`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// deleteFile("file4.txt");

//rename a file

// const fs = require("fs/promises");
// async function renameFile(oldName, newName) {
//   try {
//     await fs.rename(oldName, newName);
//     console.log(`file ${oldName} renamed to ${newName}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// renameFile("file3.txt", "mytiredself.txt");

// CREATING A FOLDER

const fs = require("fs/promises");
async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`folder ${folderName} was created`);
  } catch (error) {
    console.log(error);
  }
}

createFolder("nesanluvjay");
