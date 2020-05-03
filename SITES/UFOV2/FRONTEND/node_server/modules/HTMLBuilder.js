exports.HTMLBuild=BuildHTML;
var fs = require('fs');
const { Console } = require('console');

var TemplatedHTML;
var FinalHTML="";
//console.log("-------------START------------------");
function BuildHTML(seed_file,dest_file){
    try{
        TemplatedHTML=fs.readFileSync(seed_file, "utf-8");
    }
    catch(err){
        console.log("Check FileName");
    }
    finally{
        FinalHTML=GenerateHTML_ForClient(TemplatedHTML);
    }
    fs.writeFileSync(dest_file,FinalHTML);
}
function GenerateHTML_ForClient(str) {
    var TagBeginDefine = "<div include-html=\"";
    var TagEndDefine = ".html\"></div>";
    var TagBeginIndex;
    var TagEndIndex;
    var FullTag;
    var FileName;
    var TmpPART;
    if (str.includes(TagBeginDefine)) {
        TagBeginIndex = str.search(TagBeginDefine);
        TmpPART = str.substring(TagBeginIndex, (TagBeginIndex + 100));
        //      console.log("Portion="+TmpPART );
        TagEndIndex = str.search(TagEndDefine) + TagEndDefine.length;
        FullTag = str.substring(TagBeginIndex, TagEndIndex);
        //      console.log("Full Tag=== " + FullTag);
        FileName = str.substring((str.search(TagBeginDefine) + TagBeginDefine.length), (str.search(TagEndDefine)+5));
        //      console.log("FileName=== " + FileName.substring);
        var include = fs.readFileSync(FileName, "utf-8");
        str = str.replace(FullTag, include);
        // console.log(str);
        return GenerateHTML_ForClient(str);
    }
    else { 
        return str;
     }
}
