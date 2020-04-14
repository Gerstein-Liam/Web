var fs = require('fs');
const { Console } = require('console');
var filepath = "index.html"
var balise_prefixe = "include-html";
var balise_entiere;
function CreateHTML(file){
var str;
    fs.readFile(file, function (err, data) {
        str = data.toString();
         console.log(str);
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
            console.log("Portion="+TmpPART );
            TagEndIndex = str.search(TagEndDefine) + TagEndDefine.length;
            FullTag = str.substring(TagBeginIndex, TagEndIndex);
            console.log("Full Tag=== " + FullTag);
            FileName = str.substring((str.search(TagBeginDefine) + TagBeginDefine.length), str.search(TagEndDefine));
            console.log("FileName=== " + FileName.substring);
            fs.readFile(FileName, function (err, incdata) {
                var include= incdata.toString();
                str=str.replace( FullTag, include);
                console.log(str);
            });
        }
    });
    return str;
}
var finalhtml= CreateHTML("index.html");
