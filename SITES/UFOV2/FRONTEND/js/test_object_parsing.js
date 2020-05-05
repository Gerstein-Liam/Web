var object = ' [{"Lastname":"Lettye","Firstname":"Denis","Fonction":"Former air force general","Domain":"Army","Country":"France","Implication":"Indirect","Position":"Believer"},{"Lastname":"Rine","Firstname":"Jacques","Fonction":"Former air force pilot","Domain":"Army","Country":"France","Implication":"Direct","Position":"Expectant"},{"Lastname":"Giraud","Firstname":"René","Fonction":"Former air force pilot","Domain":"Army","Country":"France","Implication":"Direct","Position":"Expectant"},{"Lastname":"Fartek","Firstname":"Jean-Pierre","Fonction":"Former air force pilot","Domain":"Army","Country":"France","Implication":"Direct","Position":"Expectant"},{"Lastname":"Patenet","Firstname":"Jean-Pierre","Fonction":"GEIPAN (CNES) Director","Domain":"Civil","Country":"France","Implication":"Indirect","Position":"Expectant"},{"Lastname":"Haigneré","Firstname":"Jean-Pierre","Fonction":"Spationaut","Domain":"Civil","Country":"France","Implication":"Indirect","Position":"Expectant"},{"Lastname":"Bruneau","Firstname":"Jean-Luc","Fonction":"General De Gaull science councelor","Domain":"Politic","Country":"France","Implication":"Indirect","Position":"Expectant"},{"Lastname":"Michaud","Firstname":"Daniel","Fonction":"Civil pilot","Domain":"Civil","Country":"France","Implication":"Direct","Position":"Expectant"},{"Lastname":"Troade","Firstname":"Jean-Pierre","Fonction":"Army officier","Domain":"Army","Country":"France","Implication":"Direct","Position":"Expectant"},{"Lastname":"Greslé","Firstname":"Jean-Gabriel","Fonction":"Air force pilot","Domain":"Army","Country":"France","Implication":"Direct","Position":"Expectant"},{"Lastname":"Ganachaud","Firstname":"Eri","Fonction":"Air force pilot","Domain":"Army","Country":"France","Implication":"Direct","Position":"Expectant"}] ';
var obj = JSON.parse(object);
/*
//Trouver index
console.log(obj.findIndex( i=> i.Firstname==="Jacques" && i.Lastname==="Rine"))       
let index=obj.findIndex( i=> i.Firstname==="Jacques" && i.Lastname==="Rine");
console.log(obj);
//Supprimer elements
obj.splice(index,1);
console.log(obj)
//Remplacer
index=obj.findIndex( i=> i.Firstname==="Denis" && i.Lastname==="Lettye");
console.log(index);
obj[index].Firstname="Daniel";
console.log(obj)
//
let filter_result= obj.filter( element => element.Domain==="Army")
console.log(filter_result);
console.log(obj);
*/
//Rechercher un chain de caractère

console.log("--------FILTER--------------------");

let _DomainQuery = "Civil";
let _ImplicationQuery = "Direct";
let tmp = obj;
console.log(tmp);
if (_DomainQuery != "%") {
    tmp = tmp.filter(element => element.Domain === _DomainQuery)
}
if (_ImplicationQuery != "%") {
    tmp = tmp.filter(element => element.Implication === _ImplicationQuery)
}


//filter_result= obj.filter( element => element.Firstname=== -1)
console.log(tmp);
//Ajout
obj.push({ Lastname: "gerstein", Firstname: "Denis", Fonction: "Former air force general", Domain: "Army", Country: "France", Implication: "Indirect", Position: "Believer" })
//console.log(obj)