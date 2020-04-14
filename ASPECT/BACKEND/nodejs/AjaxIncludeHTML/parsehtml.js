var fs = require('fs');
const { Console } = require('console');
var filepath = "index.html"
var balise_prefixe = "include-html";
var balise_entiere;
fs.readFile(filepath, function (err, data) {
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
        console.log("FileName=== " + FileName);

        str=str.replace( FullTag, "FILETOINCLUDE");
        console.log(str);
       
    }
    // console.log(str.charAt(PositionFile) + str.charAt(PositionFile + 1) + str.charAt(PositionFile + 2) + str.charAt(PositionFile + 3) + str.charAt(PositionFile + 4) + str.charAt(PositionFile + 5) + str.charAt(PositionFile + 6) + str.charAt(PositionFile + 7));
    // console.log(str.charAt(PositionFile)+str.charAt(PositionFile+1)+str.charAt(PositionFile+2)+str.charAt(PositionFile+3)+str.charAt(PositionFile+4)+str.charAt(PositionFile+5)+str.charAt(PositionFile+6)+str.charAt(PositionFile+7));
});
/*
console.log("html to include");
        var IncludeTag = str.search("<div include-html=");
        console.log(IncludeTag);
        var PositionFileBegin = IncludeTag + 19;
        var filename = "";
        var achar = "";
        var PositionFileEnd = PositionFileBegin;
        console.log("FindingBegin");
        do {
            console.log(str.charAt(PositionFileEnd));
            achar = str.charAt(PositionFileEnd)
            filename.concat(achar);
            PositionFileEnd = PositionFileEnd + 1;
        }
        while (str.charAt(PositionFileEnd) != "\"");
        console.log("Position Begin=" + PositionFileBegin + "  Position End=" + PositionFileEnd);
        filename=str.substring(PositionFileBegin, PositionFileEnd);
        console.log("FileNameIs=" + filename);
*/