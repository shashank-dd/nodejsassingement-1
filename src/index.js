const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	 fs.writeFile(fileName,  fileContent,function (err) {
		if (err) return callback(err);
		console.log("file created successfully!")
	});
	console.log("okjhh")
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName, "utf-8",(err, data) => {
		if(err) throw err;
		console.log(data)
	});
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent,(err)=>{
		console.log(err)
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlinkSync(fileName, (err) =>  {
		if(err) throw err;
	})
}
 myFileWriter("fop.txt","hello world says hii")
myFileReader("fop.txt")
myFileUpdater("fop.txt","hello world ")
myFileReader("fop.txt")
//myFileDeleter("fop.txt")//


// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }