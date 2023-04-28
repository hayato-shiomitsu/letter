/* 
 */

//Info
const commercialnames = ["Laetitia BAYART", "Adeline Barros", "Floriane COCHET", "Sakina PELLEN", "Valerie PICARD", "Marie PIGNARD", "Slobodan VASIC"];
const commercialnumbers = ["01 39 94 68 06", "04 72 96 17 85", "01 39 94 68 28", "05 34 25 29 95", "06 80 82 07 72", "04 78 90 46 48", "01 39 94 68 10"];
const commercialemails = ["laetitia.bayart@dmgmori.com", "adeline.barros@dmgmori.com", "floriane.cochet@dmgmori.com", "sakina.pellen@dmgmori.com", "valerie.picard@dmgmori.com", "marie.pignard@dmgmori.com", "slobodan.vasic@dmgmori.com"];
const acommercial = ["aaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa.","aaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaa"];

const productmanagernames = ["Remy DE GASQUET", "Olivier POULETAUD", "Jean-Julien SEVELINGE", "Sebastien VASSENT", "Jerome VITTE"];
const productmanagernumbers = ["06 74 66 88 21", "06 79 33 56 21", "06 27 03 56 93", "06 37 58 08 12", "07 86 57 22 19"];
const productmanageremails = ["remy.degasquet@dmgmori.com","olivier.pouletaud@dmgmori.com","jean-julien.sevelinge@dmgmori.com", "sebastien.vassent@dmgmori.com","jerome.vitte@dmgmori.com"];
const aproductmanager = ["aaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaa","...........................","aaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaa"];

const responsablenames = ["Joel BIQUET", "Jacques COLIN", "Yannick HEGO", "Xavier THOMASSE", "Thomas VIALETON"];
const responsablenumbers = ["06 61 92 46 02", "06 37 88 67 62", "06 33 50 57 59", "07 87 62 19 24", "06 78 91 59 23"];
const responsableemails = ["joel.biquet@dmgmori.com","jacques.colin@dmgmori.com","yannick.hego@dmgmori.com","xavier.thomasse@dmgmori.com", "thomas.vialeton@dmgmori.com"];
const aresponsable = ["aaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaa.."];

let counter = 0;

function genPDF(){
    //DMG MORI Logo
    var imgData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAAgCAMAAABpemc5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABjUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGZodN4AAAAgdFJOUwAIEBggKDA4QEhQWGBocHiAh4+Xn6evt7/Hz9ff5+/3v+H4wgAAAAlwSFlzAAAPYQAAD2EBqD+naQAAA91JREFUWEftmNt24jAMRROgLS3T0lJaLk1I/v8rR5cjWTIwZNa8zeK81HZsWdu2ZNPmrrvuuuu/0X6s1O8/X/CtQxOpf0Lb8oQW0labVrsBDar+a6UfREu0sj7R1nyjgbWQlsU2zEY67eBFblb9bGSQ+b6XjqQzGFb/LN+inaO05DaBWfygFrVrpTMrwoxLbXtGVSR+rVGJOsz4yyWYcRzY0jSYcfzF35KdR+n+hJqIYdrLk22kNyvBYC+/UBUxzCvKWQfue9n+eJpPhxmob7aj7n2iJmLX3lCuNPjWJJhBFnuWjiXBtD3KlfikXYEZ3/4A0+1FqKnvyc6J3cuzMswR5fEo4z2icKAqmPGVm36hoiKYsjED2ShzsJfmhDp4QE0mvwrzrtV2h/oPVfKicFS/oKwiezMU7VzNLIJo4VQZRkKvLBmLYLYodthP23/eX3MCDjr3BJjSmQ5EhuEh6bCzPafTlFHGe9BkGA69OYoQwdhEXxjjCYL2t4J5QHUSjB8BysUZhmbNh53tOTuHMWu+VD2gXsMQZJW5aCRK4wfGuMeUh67BUP0mzIVF6XH0PozUbgmCeUdxxPBzGcyH/unbRk/i0aJt0bQouRML1DnEKhhfbDoKN2F8ISmTwE73qH97dO4NmGA2KDKMRKjJTowbXCJ2V7D2ajMviu9nMNRgMMhQlmE4+KbDlB3uLGVhGzbWh2AsdBkGJVWn5gLMSv/udcipvQBjWeMSTNaBj/F0GEpeDlPl0gATdwYl1TlMTusbnznAyFVNugWz08fVdJgSM12+Xr69TxUzKKnOYRpEjeohwHh+X2NM3KqLOzNs+Pa9CeObEGGSH88Rxh8A9GJ4Z9lW2VsuwMxDLvwuM0/MZpU4Jm/CuHflniGYcDXQbRpgEAjCLkJ4lwkKTHwrU3oJMBbVZDCNCSsKB2dug4LmFkxr7wU+JgUm+EE7H2Di6RbZuTu7NMkv91FMBhizzs8Olh2ECy8AvzrCcpzBVJlPtjHAuA1+KgYYn+uk482cvBFFAaY85DhtBRg/DuqFd2MvK5iYLK7C1OIXf4BxP3jFI4ynsyx9HrMijL0X5GuAidEUxczXYOg+nQojQyOMLR5DRpgrr3c7dRmmxcbLL84AkxOdS5LINRiqT4MZ9PaKMK0unoyLMM2jn8wg+aKKMLaP8kMvwpTLN6iTL/8GM+zXYiXD6PNwEDcSTDNbV5szbKUXlGDmQq7jEkyzrB3p3vT3wN/APOKVC0U3midtw/8yZlQsJZa/jK2BxT9Ro+wbgohsYqlsZvyGqVxBmztho1pUuW4DktN33XXXFDXNbyEYb5zEkiGfAAAAAElFTkSuQmCC';
    
    //Creates PDF
    var doc = new jsPDF();
    
    //Adds Logo to PDF
    doc.addImage(imgData, 'JPEG', 19, 15, 55, 8);
    
    function machine(){
        var displaynumber = document.getElementById("number");
        const display1 = document.querySelector('#number1');
        const displaytext1 = document.querySelector('#machine1');
        const display2 = document.querySelector('#number2');
        const displaytext2 = document.querySelector('#machine2');
        const display3 = document.querySelector('#number3');
        const displaytext3 = document.querySelector('#machine3');
        
        if (displaynumber.value === "1") {
            document.getElementById("changemachine").innerHTML = display1.value + " " + displaytext1.value;
        } else if (displaynumber.value === "2"){
            document.getElementById("changemachine").innerHTML = display1.value + " " + displaytext1.value + " et " + display2.value + " " + displaytext2.value;
        } else{
            document.getElementById("changemachine").innerHTML = display1.value + " " + displaytext1.value + ", " + display2.value + " " + displaytext2.value + " et " + display3.value + " " + displaytext3.value;    
        }
    }
    
    //Changes Inputted Value
    const assistant = document.querySelector('#assistant');
    const productmanager = document.querySelector('#productmanager');
    const responsable = document.querySelector('#responsable');
    const client = document.querySelector('#client');
    const contact = document.querySelector('#contact');
    const gender = document.querySelector('#gender');
    const street1 = document.querySelector('#street1');
    const street2 = document.querySelector('#street2');
    const post = document.querySelector('#post');
    const city = document.querySelector('#city');
    const country = document.querySelector('#country');
    
    var displaynumber = document.getElementById("number");
    const display1 = document.querySelector('#number1');
    const displaytext1 = document.querySelector('#machine1');
    const display2 = document.querySelector('#number2');
    const displaytext2 = document.querySelector('#machine2');
    const display3 = document.querySelector('#number3');
    const displaytext3 = document.querySelector('#machine3');
    
    const changestreet2 = document.querySelector('#changestreet2');
    if (street2.value === '') {
        changestreet2.parentNode.removeChild(changestreet2);
    } 
    else {
        document.getElementById("changestreet2").innerHTML = street2.value;
    }
                
    console.log(displaytext1.value);
    if (displaynumber.value === "1" && (display1.value === 'Null' || displaytext1.value === '')) {
        alert('Please enter all information!!!');
    } else if (displaynumber.value === "2" && (display1.value === 'Null' || displaytext1.value === '' || display2.value === 'Null' || displaytext2.value === '')){
        alert('Please enter all information!!!');
    } else if (displaynumber.value === "3" && (display1.value === 'Null' || displaytext1.value === '' || display2.value === 'Null' || displaytext2.value === '' || display3.value === 'Null' || displaytext3.value === '')){
        alert('Please enter all information!!!');
    } else if (displaynumber.value === "Null") {
        alert('Please enter all information!!!');
    } else{
        var blank = "";

        if (assistant.value === 'Null' || productmanager.value === 'Null' || responsable.value === 'Null' || client.value === '' || street1.value === '' || post.value === '' || city.value === '' || country.value === '') {
            alert('Please enter all information!!!');
          } 
        else {
            var checkbox = document.querySelector('input[type="checkbox"]');
            if(checkbox.checked && (contact.value === '' || gender.value === 'Null')) {
                alert('Please enter all information!!!');
            }
            else if (checkbox.checked && (contact.value !== ''&& gender.value !== 'Null')) {
                document.getElementById("changeclient").innerHTML = client.value;
                document.getElementById("changecontact").innerHTML = gender.value + ' ' + contact.value;
                document.getElementById("changestreet1").innerHTML = street1.value;
                document.getElementById("changepost").innerHTML = post.value + " " + city.value;
                document.getElementById("changecountry").innerHTML = country.value;

                machine();

                document.getElementById("changecommercial").innerHTML = commercialnames[assistant.value];
                document.getElementById("changecommercialnum").innerHTML = commercialnumbers[assistant.value];
                document.getElementById("acommercial").innerHTML = acommercial[assistant.value];
                document.getElementById("changeproductmanager").innerHTML = productmanagernames[productmanager.value];
                document.getElementById("changeproductmanagernum").innerHTML = productmanagernumbers[productmanager.value];
                document.getElementById("aproductmanager").innerHTML = aproductmanager[productmanager.value];
                document.getElementById("changeresponsable").innerHTML = responsablenames[responsable.value];
                document.getElementById("changeresponsablenum").innerHTML = responsablenumbers[responsable.value];
                document.getElementById("aresponsable").innerHTML = aresponsable[responsable.value];

                email();

                //If Div should be Hidden
                var specialElementHandlers = {
                    '#hidediv' : function(element,render) {return true;}
                };

                doc.fromHTML($('#main').get(0), 20,20,{
                   'width':500,
                   'elementHandlers': specialElementHandlers
                });

                let name = client.value + " Lettre d'Accompagnement";
                //Download PDF
                doc.save(name + '.pdf');
                counter = 1;
            }
            else {
                document.getElementById("changeclient").innerHTML = blank;
                document.getElementById("changecontact").innerHTML = client.value;
                document.getElementById("changecontact").style.fontSize= "15px";
                document.getElementById("changecontact").style.fontWeight= "bold";   
                document.getElementById("changestreet1").innerHTML = street1.value;
                document.getElementById("changepost").innerHTML = post.value + " " + city.value;
                document.getElementById("changecountry").innerHTML = country.value;

                machine();

                document.getElementById("changecommercial").innerHTML = commercialnames[assistant.value];
                document.getElementById("changecommercialnum").innerHTML = commercialnumbers[assistant.value];
                document.getElementById("acommercial").innerHTML = acommercial[assistant.value];
                document.getElementById("changeproductmanager").innerHTML = productmanagernames[productmanager.value];
                document.getElementById("changeproductmanagernum").innerHTML = productmanagernumbers[productmanager.value];
                document.getElementById("aproductmanager").innerHTML = aproductmanager[productmanager.value];
                document.getElementById("changeresponsable").innerHTML = responsablenames[responsable.value];
                document.getElementById("changeresponsablenum").innerHTML = responsablenumbers[responsable.value];
                document.getElementById("aresponsable").innerHTML = aresponsable[responsable.value];

                email();

                //If Div should be Hidden
                var specialElementHandlers = {
                    '#hidediv' : function(element,render) {return true;}
                };

                doc.fromHTML($('#main').get(0), 20,20,{
                   'width':500,
                   'elementHandlers': specialElementHandlers
                });

                let name = client.value + " Lettre d'Accompagnement";
                //Download PDF
                doc.save(name + '.pdf');
                document.getElementById("changecontact").style.fontSize= "12px";
                document.getElementById("changecontact").style.fontWeight= "normal";
                counter = 1;
            }
        }    	
    } 	
}

function email(){
    document.getElementById("emailcontact").href = commercialemails[assistant.value];
    document.getElementById("emailcontact").innerHTML = commercialemails[assistant.value];
    document.getElementById("changecommercialemail").href = commercialemails[assistant.value];
    document.getElementById("changecommercialemail").innerHTML = commercialemails[assistant.value];
    document.getElementById("changeproductmanageremail").href = productmanageremails[productmanager.value];
    document.getElementById("changeproductmanageremail").innerHTML = productmanageremails[productmanager.value];
    document.getElementById("changeresponsableemail").href = responsableemails[responsable.value];
    document.getElementById("changeresponsableemail").innerHTML = responsableemails[responsable.value];
}

//Toggle Slider
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var displaycontact = document.getElementById("displaycontact");
    var displaygender = document.getElementById("displaygender");
 
    checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        displaycontact.style.display = "block";
        displaygender.style.display = "block";
    } else {
        displaycontact.style.display = "none";
        displaygender.style.display = "none";
    }
  });
});

//Machine Types
document.addEventListener('DOMContentLoaded', function () {
    var displaynumber = document.getElementById("number");
    var display1 = document.getElementById("display1");
    var displaytext1 = document.getElementById("displaytext1");
    var display2 = document.getElementById("display2");
    var displaytext2 = document.getElementById("displaytext2");
    var display3 = document.getElementById("display3");
    var displaytext3 = document.getElementById("displaytext3");
    
    displaynumber.addEventListener('change', function () {
    if (displaynumber.value === "1") {
        display1.style.display = "block";
        displaytext1.style.display = "block";
        display2.style.display = "none";
        displaytext2.style.display = "none";
        display3.style.display = "none";
        displaytext3.style.display = "none";
    } else if (displaynumber.value === "2"){
        display1.style.display = "block";
        displaytext1.style.display = "block";
        display2.style.display = "block";
        displaytext2.style.display = "block";
        display3.style.display = "none";
        displaytext3.style.display = "none";
    } else{
        display1.style.display = "block";
        displaytext1.style.display = "block";
        display2.style.display = "block";
        displaytext2.style.display = "block";
        display3.style.display = "block";
        displaytext3.style.display = "block";
    }
  });
});
