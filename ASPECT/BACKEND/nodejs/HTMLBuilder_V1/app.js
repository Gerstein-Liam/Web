var htmlBuilder= require("./htmlBuilder")


htmlBuilder.HTMLBuild("index_seed.html");

const { exec } = require("child_process");
exec("echo %cd%",function(err,std_out,std_err){

console.log(std_out, 'utf-8');

});
/*
const { exec } = require("child_process");
exec("ipconfig",function(err,std_out,std_err){

console.log(std_out, 'utf-8');

});
*/
