const { exec } = require('child_process')
const { appName, projectName } = require('../config/_config.js')
const excelConfig = require(`../src/${appName}/${projectName}/config.js`).excel

let cmdStr = `excel-tobe-json2 -x ${excelConfig.input} -o ${excelConfig.output} -t ${excelConfig.dataType} -m ${excelConfig.module}`

exec(cmdStr, {timeout: 5000}, (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`)
		return;
	}
	console.log(`excel转换完毕: stdout: ${stdout}`)
})
