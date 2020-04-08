var Context;
var PastName;
var PastVorname;
var PastSector;
var PastCountry;
var PastURL;
function openForm__Mod(index) {
    Context = "Update";
    document.getElementById("open-button").style.display = "none";
    document.getElementById("popup").style.display = "block";
    PastName = document.getElementById("list").rows[index].cells.item(1).innerHTML;
    PastVorname = document.getElementById("list").rows[index].cells.item(2).innerHTML;
    PastSector = document.getElementById("list").rows[index].cells.item(3).innerHTML;
    PastCountry = document.getElementById("list").rows[index].cells.item(4).innerHTML;
    //PastURL= document.getElementById("list").rows[index].cells.item(5).;
    document.getElementById("name_add").value = PastName;
    document.getElementById("vorname_add").value = PastVorname;
    document.getElementById("country_add").value = PastCountry;
    document.getElementById("sector_add").value = PastSector;
    document.getElementById("preslink_add").value = PastURL;
    // console.log(Name + " | " + Vorname + " | " + Country + " | " + Sector);
}
function openForm() {
    Context = "Add";
    document.getElementById("open-button").style.display = "none";
    document.getElementById("popup").style.display = "block";
    document.getElementById("name_add").value = "Enter a name";
    document.getElementById("vorname_add").value = "Enter vorname";
}
function closeForm() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("open-button").style.display = "block";
}
function AddPerson() {
    let NewName = document.getElementById("name_add").value;
    let NewVorname = document.getElementById("vorname_add").value;
    let NewCountry = document.getElementById("country_add").value;
    let NewSector = document.getElementById("sector_add").value;
    let NewpresentationURL = document.getElementById("preslink_add").value;
    //console.log(Name + " | " + Vorname + " | " + Country + " | " + Sector);
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            UpdateResult(" ");
        }
    };
    if (Context == "Add") {
        console.log("ADD CONTEXT");
        xmlhttp.open("GET", `add.php?name=${NewName}&vorname=${NewVorname}&country=${NewCountry}&sector=${NewSector}&preslink=${NewpresentationURL}`, true);
        xmlhttp.send();
    }
    else {
        if (Context == "Update") {
            console.log("UPDATE CONTEXT");
            xmlhttp.open("GET", `update.php?pastname=${PastName}&pastvorname=${PastVorname}&pastcountry=${PastCountry}&pastsector=${PastSector}&newname=${NewName}&newvorname=${NewVorname}&newcountry=${NewCountry}&newsector=${NewSector}&newpreslink=${NewpresentationURL}`, true);
            xmlhttp.send();
        }
    }
}
function UpdateResult(str) {
    let sector = document.getElementById("fsector").value;
    let country = document.getElementById("fcountry").value;
    //let sector = document.getElementById("fsector").selectedIndex;
    console.log(sector);
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "find.php?country=" + country + "&sector=" + sector, true);
    xmlhttp.send();
}
function Load() {
    //let sector = document.getElementById("fsector").selectedIndex;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("result").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "find.php?country=% &sector=%", true);
    xmlhttp.send();
}
