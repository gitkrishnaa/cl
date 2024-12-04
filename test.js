
const fs = require('fs')
const path = require('path');
const { double_slash, code_with_multiline_comments, remove_console_log } = require('./filter');
const { cl } = require('./test2');

main()
function main() {
    const file_path = path.join(__dirname + "/" + 'sample.js')
    const data = fs.readFileSync(file_path).toString();
    // console.log(data);
    const code_data = data.split('\n');
    let new_data = "";
    code_data.map(e => {
        // new_data+= code_with_multiline_comments(e)?code_with_multiline_comments(e)+"\n":"";
        let temp_line = e;
        temp_line = double_slash(temp_line);
        temp_line = code_with_multiline_comments(temp_line);
        temp_line = remove_console_log(temp_line);
        new_data +=  temp_line? temp_line + "\n" : "";
    })
    console.log(new_data);
    
    return new_data;
    // fs.writeFileSync(file_path, JSON.stringify(data))
}


// logLocation('hello iam',"ghjk")
// logLocation('hello iam',"ghjk")
cl('ok')
