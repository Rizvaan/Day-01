//Question 1: Install TS in your Pc ?

/************************************************************************************* */

/*Question 2: Store a person’s name in a variable 
and print a message to them, like “Hello Asharib ? */
        //This Method called Template Literals

let person_name : string = "asharib";
console.log(`"Hello"${person_name}`);

/************************************************************************************ */

/*Question 3: Name Cases: Store a person’s name in a variable
and then print that person’s name in lowercase, uppercase, and titlecase ?*/
 
//console.log(person_name.toLowerCase());
//console.log(person_name.toUpperCase());

/*yaha per slice(1) ka matlab huwa k index [1] se lekar end character tak
saray LowerCase may print kardo */
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase());
console.log(person_name.slice(1).toUpperCase());
