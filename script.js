/* 
 */

//Info
const commercialnames = ["Laetitia BAYART", "Floriane COCHET", "Sakina PELLEN", "Valerie PICARD", "Marie PIGNARD", "Slobodan VASIC"];
const commercialnumbers = ["01 39 94 68 06", "01 39 94 68 28", "05 34 25 29 95", "06 80 82 07 72", "04 78 90 46 48", "01 39 94 68 10"];
const commercialemails = ["laetitia.bayart@dmgmori.com", "floriane.cochet@dmgmori.com", "sakina.pellen@dmgmori.com", "valerie.picard@dmgmori.com", "marie.pignard@dmgmori.com", "slobodan.vasic@dmgmori.com"];
const acommercial = ["aaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaa"];

const productmanagernames = ["Olivier POULETAUD", "Jean-Julien SEVELINGE", "Denis VERNIER", "Jerome VITTE"];
const productmanagernumbers = ["06 79 33 56 21", "06 27 03 56 93", "06 03 80 07 97", "07 86 57 22 19"];
const productmanageremails = ["olivier.pouletaud@dmgmori.com","jean-julien.sevelinge@dmgmori.com","denis.vernier@dmgmori.com","jerome.vitte@dmgmori.com"];
const aproductmanager = ["aaaaaaaaaaaaaaaaa","...........................","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaa"];

const responsablenames = ["Joel BIQUET", "Jacques COLIN", "Xavier THOMASSE", "Thomas VIALETON"];
const responsablenumbers = ["06 61 92 46 02", "06 37 88 67 62", "07 87 62 19 24", "06 78 91 59 23"];
const responsableemails = ["joel.biquet@dmgmori.com","jacques.colin@dmgmori.com","xavier.thomasse@dmgmori.com","thomas.vialeton@dmgmori.com"];
const aresponsable = ["aaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaa.."];

let counter = 0;

function genPDF(){
    //DMG MORI Logo
    var imgData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAAgCAMAAABpemc5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABjUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGZodN4AAAAgdFJOUwAIEBggKDA4QEhQWGBocHiAh4+Xn6evt7/Hz9ff5+/3v+H4wgAAAAlwSFlzAAAPYQAAD2EBqD+naQAAA91JREFUWEftmNt24jAMRROgLS3T0lJaLk1I/v8rR5cjWTIwZNa8zeK81HZsWdu2ZNPmrrvuuuu/0X6s1O8/X/CtQxOpf0Lb8oQW0labVrsBDar+a6UfREu0sj7R1nyjgbWQlsU2zEY67eBFblb9bGSQ+b6XjqQzGFb/LN+inaO05DaBWfygFrVrpTMrwoxLbXtGVSR+rVGJOsz4yyWYcRzY0jSYcfzF35KdR+n+hJqIYdrLk22kNyvBYC+/UBUxzCvKWQfue9n+eJpPhxmob7aj7n2iJmLX3lCuNPjWJJhBFnuWjiXBtD3KlfikXYEZ3/4A0+1FqKnvyc6J3cuzMswR5fEo4z2icKAqmPGVm36hoiKYsjED2ShzsJfmhDp4QE0mvwrzrtV2h/oPVfKicFS/oKwiezMU7VzNLIJo4VQZRkKvLBmLYLYodthP23/eX3MCDjr3BJjSmQ5EhuEh6bCzPafTlFHGe9BkGA69OYoQwdhEXxjjCYL2t4J5QHUSjB8BysUZhmbNh53tOTuHMWu+VD2gXsMQZJW5aCRK4wfGuMeUh67BUP0mzIVF6XH0PozUbgmCeUdxxPBzGcyH/unbRk/i0aJt0bQouRML1DnEKhhfbDoKN2F8ISmTwE73qH97dO4NmGA2KDKMRKjJTowbXCJ2V7D2ajMviu9nMNRgMMhQlmE4+KbDlB3uLGVhGzbWh2AsdBkGJVWn5gLMSv/udcipvQBjWeMSTNaBj/F0GEpeDlPl0gATdwYl1TlMTusbnznAyFVNugWz08fVdJgSM12+Xr69TxUzKKnOYRpEjeohwHh+X2NM3KqLOzNs+Pa9CeObEGGSH88Rxh8A9GJ4Z9lW2VsuwMxDLvwuM0/MZpU4Jm/CuHflniGYcDXQbRpgEAjCLkJ4lwkKTHwrU3oJMBbVZDCNCSsKB2dug4LmFkxr7wU+JgUm+EE7H2Di6RbZuTu7NMkv91FMBhizzs8Olh2ECy8AvzrCcpzBVJlPtjHAuA1+KgYYn+uk482cvBFFAaY85DhtBRg/DuqFd2MvK5iYLK7C1OIXf4BxP3jFI4ynsyx9HrMijL0X5GuAidEUxczXYOg+nQojQyOMLR5DRpgrr3c7dRmmxcbLL84AkxOdS5LINRiqT4MZ9PaKMK0unoyLMM2jn8wg+aKKMLaP8kMvwpTLN6iTL/8GM+zXYiXD6PNwEDcSTDNbV5szbKUXlGDmQq7jEkyzrB3p3vT3wN/APOKVC0U3midtw/8yZlQsJZa/jK2BxT9Ro+wbgohsYqlsZvyGqVxBmztho1pUuW4DktN33XXXFDXNbyEYb5zEkiGfAAAAAElFTkSuQmCC';
    
    //Creates PDF
    var doc = new jsPDF();
    
    //Adds Logo to PDF
    doc.addImage(imgData, 'JPEG', 19, 15, 55, 8);
    
    //Changes Inputted Value
    const assistant = document.querySelector('#assistant');
    const productmanager = document.querySelector('#productmanager');
    const responsable = document.querySelector('#responsable');
    const client = document.querySelector('#client');
    const contact = document.querySelector('#contact');
    const gender = document.querySelector('#gender');
    const street = document.querySelector('#street');
    const post = document.querySelector('#post');
    const country = document.querySelector('#country');
    const machine = document.querySelector('#machine');
    var blank = "";
    
    if (assistant.value === 'Null' || productmanager.value === 'Null' || responsable.value === 'Null' || client.value === '' || street.value === '' || post.value === '' || country.value === '' || machine.value === '') {
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
            
            document.getElementById("changestreet").innerHTML = street.value;
            document.getElementById("changepost").innerHTML = post.value;
            document.getElementById("changecountry").innerHTML = country.value;
            document.getElementById("changemachine").innerHTML = machine.value;

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
        
            document.getElementById("changestreet").innerHTML = street.value;
            document.getElementById("changepost").innerHTML = post.value;
            document.getElementById("changecountry").innerHTML = country.value;
            document.getElementById("changemachine").innerHTML = machine.value;

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

