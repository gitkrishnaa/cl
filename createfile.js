const path = require('path');
const fs = require('fs');
// const { cl_readLine } = require('./cl');
let entered_file_path=""
function create_file_option(is_create_file, filepath) {
  // console.log(fileName)
  if (is_create_file === true) {
    // console.log(fileName)
    file_creater(filepath)
     
  }
  else if (is_create_file === false) {
    console.log("file not created");

  }
  else {
    console.log("please choose correct option")
  }

}
function js_file(filepath) {

  try {
    const res=fs.writeFileSync(filepath,
      `const {cl}=require('cl-print');`
    )
 
  
  } catch (error) {
    console.log(error)
  }
}
function non_js_file(filename) {
  const res=fs.writeFileSync(filepath,``
  )
}
module.exports.create_file = function (fileName, currentDir, already_creating_option) {
  //  console.log(path.relative(fileName))
  //  console.log(path.dirname(fileName))
  //  console.log(path.basename(fileName))
  //  console.log(path.extname(fileName))
  const filepath = path.join(currentDir,"/", fileName);
entered_file_path=fileName;
  // console.log(filepath,"ok")
  if (path.basename(filepath).includes('.')) {
    if (fs.existsSync(filepath)) {
      console.log('file aready exist');
      already_creating_option(create_file_option, filepath);
    }
    else {
      file_creater(filepath);
     
    }
  } else {
    console.log('please specify a file name');
    process.exit(0);
  }

  // if (fileName.endsWith('.ts') || fileName.endsWith('.js')) {
  //   js_file(fileName, currentDir, already_creating_option);

  // }
  // else {
  //   non_js_file(fileName, currentDir)
  // }
}

function file_creater(fileName) {
  // filename is with file path
  if (fileName.endsWith('.ts') || fileName.endsWith('.js')) {
    // create_folder(entered_file_path)
    js_file(fileName);
    console.log(path.basename(filepath),'is created successfully :)')
    process.exit(0);
    // console.log('js file');
  }
  else {
  
    non_js_file(fileName)
    console.log(path.basename(filepath),'is created successfully :)')
    process.exit(0);
  }
}




function directory_format(filepath) {

}
function create_folder (folderName, basePath = __dirname) {
  // Construct the folder path inside the base path
  const folderPath = path.join(basePath, folderName);
  if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
  } else {
  }
  return folderPath;
};