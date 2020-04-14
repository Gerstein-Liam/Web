var fs = require('fs');
const { Console } = require('console');
var filepath = "index.html"
var balise_prefixe = "include-html";
var balise_entiere;
var myHTML;
let FinalHTML="";


console.log("-------------START------------------");

function CreateHTML(str) {
    var TagBeginDefine = "<div include-html=\"";
    var TagEndDefine = "\"></div>";
    var TagBeginIndex;
    var TagEndIndex;
    var FullTag;
    var FileNameBeginIndex;
    var FileNameEndIndex;
    var FileName;
    var TmpPART;
    if (str.includes(TagBeginDefine)) {
        TagBeginIndex = str.search(TagBeginDefine);
        TmpPART = str.substring(TagBeginIndex, (TagBeginIndex + 100));
        //      console.log("Portion="+TmpPART );
        TagEndIndex = str.search(TagEndDefine) + TagEndDefine.length;
        FullTag = str.substring(TagBeginIndex, TagEndIndex);
        //      console.log("Full Tag=== " + FullTag);
        FileName = str.substring((str.search(TagBeginDefine) + TagBeginDefine.length), str.search(TagEndDefine));
        //      console.log("FileName=== " + FileName.substring);
        var include = fs.readFileSync(FileName, "utf-8");
        str = str.replace(FullTag, include);
        // console.log(str);
        return CreateHTML(str);
    }
    else { 
        //console.log(str);
        //console.log(FinalHTML);
        return str;
       // FinalHTML=str;
         //console.log(FinalHTML);
     }
}
try{
    myHTML=fs.readFileSync(filepath, "utf-8");
}
catch(err){
    console.log("error");
}
finally{

    FinalHTML=CreateHTML(myHTML);
}

console.log(FinalHTML);

fs.writeFileSync("buildeldhtml.html",FinalHTML);


console.log("-------------END------------------");