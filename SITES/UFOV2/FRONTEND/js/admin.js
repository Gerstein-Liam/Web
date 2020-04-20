AddPersonModal= new Modal("AddPersonModal");


function AddPerson(){





let lastname = document.getElementById("lastname").value;
let firstname = document.getElementById("firstname").value;
let fonction  = document.getElementById("fonction").value;

let domain = document.getElementById("domain").value;
let country = document.getElementById("country").value;
let implication = document.getElementById("implication").value;
let position = document.getElementById("position").value;



console.log(`LASTNAME= ${lastname}  FIRSTNAME=${firstname}  FONCTION= ${fonction} `);
console.log(`DOMAIN= ${domain}  COUNTRY=${country}  IMPLICATION= ${implication}  POSITION ${position} `);

}