var fs = require('fs');
const { Console } = require('console');
var filepath = "index.html"
var balise_prefixe = "include-html";
var balise_entiere;
fs.readFile(filepath, function (err, data) {
    str = data.toString();
    console.log(str);
    if (str.includes("<div include-html=")) {
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
        console.log("FileNameIs=" + str.substring(PositionFileBegin, PositionFileEnd));
        // console.log(str.charAt(PositionFile) + str.charAt(PositionFile + 1) + str.charAt(PositionFile + 2) + str.charAt(PositionFile + 3) + str.charAt(PositionFile + 4) + str.charAt(PositionFile + 5) + str.charAt(PositionFile + 6) + str.charAt(PositionFile + 7));
        let TagBegin;
        let TagEnd;
        // console.log(str.charAt(PositionFile)+str.charAt(PositionFile+1)+str.charAt(PositionFile+2)+str.charAt(PositionFile+3)+str.charAt(PositionFile+4)+str.charAt(PositionFile+5)+str.charAt(PositionFile+6)+str.charAt(PositionFile+7));
    }
});