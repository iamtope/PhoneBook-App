function fnccopytext()
{
   document.getElementById('cp').innerHTML  = fullname.value;
   document.getElementById('unq').style.color = 'blue';   
}
function fnccopytext1()
{
   document.getElementById('unq1').style.color = 'blue';   
}
function fnccopytext2()
{
   document.getElementById('unq2').style.color = 'blue';   
}
function fnccopytext3()
{
   document.getElementById('unq3').style.color = 'blue';   
}
function fnccopytext4()
{
   document.getElementById('unq4').style.color = 'blue'; 
}

window.onload = function(){
    // Buttons
    let quickAddBtn = document.getElementById('QuickAdd');
    let quickAddFormDiv = document.querySelector('.quickaddForm')
    let cancelBtn = document.getElementById('Cancel');
    let AddBtn = document.getElementById('Add');
    // Form Fields
    let fullname = document.getElementById('fullname');
    let phone = document.getElementById('phone');
    let address = document.getElementById('address');
    let city = document.getElementById('city');
    let email = document.getElementById('email');
    // Divs etc.
    let addBookDiv = document.querySelector('.addbook');

    quickAddBtn.addEventListener("click", function(){
        // display the form div
        quickAddFormDiv.style.display = "block";
       QuickAdd.style.display = "none";
    });

    cancelBtn.addEventListener("click", function(){
        quickAddFormDiv.style.display = "none";
       QuickAdd.style.display = "block";
    });

    AddBtn.addEventListener("click", addToBook);

    addBookDiv.addEventListener("click", removeEntry);

    // Storage Array
    let addressBook = [];

    //localStorage['addbook'] = '[{"fullname":"Abass Adamo","email":"abass@example.com","phone":"+234XXXXXXXX","address":"Ikorodu","city":"Lagos"}]';

    function jsonStructure(fullname,phone,address,city,email){
        this.fullname = fullname;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.email = email;
    }

    function addToBook(){
        let isNull = fullname.value!='' && phone.value!='' && address.value!='' && city.value!='' && email.value!='';
        if(isNull){
            // format the input into a valid JSON structure
            let obj = new jsonStructure(fullname.value,phone.value,address.value,city.value,email.value);
            addressBook.push(obj);
            localStorage['addbook'] = JSON.stringify(addressBook);
            quickAddFormDiv.style.display = "none";
            clearForm();
            showAddressBook();
        }
    }

    function removeEntry(e){
        // Remove an entry from the addressbook
        if(e.target.classList.contains('delbutton')){
            let remID = e.target.getAttribute('data-id');
            addressBook.splice(remID,1);
            localStorage['addbook'] = JSON.stringify(addressBook);
            showAddressBook();
        }
    }

    function clearForm(){
        let formFields = document.querySelectorAll('.formFields');
        for(let i in formFields){
            formFields[i].value = '';
        }
    }

    function showAddressBook(){
        if(localStorage['addbook'] === undefined){
            localStorage['addbook'] = '';
        } else {
            addressBook = JSON.parse(localStorage['addbook']);
            // Loop over the array addressBook and insert into the page
            addBookDiv.innerHTML = '';
            for(let n in addressBook){
                let str = '<div class="entry">';
                    str += '<div class="name"><p>' + addressBook[n].fullname + '</p></div>';
                    str += '<div class="email"><p>' + addressBook[n].email + '</p></div>';
                    str += '<div class="phone"><p>' + addressBook[n].phone + '</p></div>';
                    str += '<div class="address"><p>' + addressBook[n].address + '</p></div>';
                    str += '<div class="city"><p>' + addressBook[n].city + '</p></div>';
                    str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
                    str += '</div>';
                addBookDiv.innerHTML += str;
            }
        }
    }

    showAddressBook();

}

































































































































































































/*
 $(document).ready(function(){
 $("#cp").html().val("fullname");
 $("#unq").css("background", "blue");
});

 $(document).ready(function(){
 $("#unq1").css("background", "blue");
});

 $(document).ready(function(){
 $("#unq2").css("background", "blue");
});

 $(document).ready(function(){
 $("#unq3").css("background", "blue");
});


 $(document).ready(function(){
 $("#unq4").css("background", "blue");
});

$(document).ready(function(){
$('#QuickAdd').click(function(){
$(this).show();
    });
});
   
$(".quickaddForm")

$('#Cancel').click(function(){
$("#Cancel").css("display", "block");
    });
   
$("#Add")

    // Form Fields
$("#fullname")
$("#phone")
    
$("#address")

$("#city")

$("#email")

$("#addbook").click(function(){
$("addbook").append("addToBook")
    })

$("#addbook").click(function(){
$("addbook").remove("removeEntry")

    })


    // Storage Array
let addressBook = [];

    //localStorage['addbook'] = '[{"fullname":"Abass Adamo","email":"abc@example.com","phone":"09038552395","address":"something","city":"Lagos"}]';

$(document).ready(function(){
$("#fullname").val(fullname);
$("#phone").val(phone);
$("#address").val(address);
$("#city").val(city);
$("#email").val(email);
    })

function addToBook(){
    let isNull = fullname.value!='' && phone.value!='' && address.value!='' && city.value!='' && email.value!='';
        if(isNull){
            // format the input into a valid JSON structure
    let obj = new jsonStructure(fullname.value,phone.value,address.value,city.value,email.value);
    addressBook.push(obj);
    localStorage['addbook'] = JSON.stringify(addressBook);
    quickAddFormDiv.style.display = "none";
        clearForm();
        showAddressBook();
        }
    }

function removeEntry(e){
    // Remove an entry from the addressbook
if(e.target.classList.contains('delbutton')){
let remID = e.target.getAttribute('data-id');
addressBook.splice(remID,1);
localStorage['addbook'] = JSON.stringify(addressBook);
showAddressBook();
 }
    }

function clearForm(){
let formFields = document.querySelectorAll('.formFields');
for(let i in formFields){
formFields[i].value = '';
     }

    }

function showAddressBook(){
if(localStorage['addbook'] === undefined){
   localStorage['addbook'] = '';
        } else {
            addressBook = JSON.parse(localStorage['addbook']);
            // Loop over the array addressBook and insert into the page
            addBookDiv.innerHTML = '';}

        for(let n in addressBook){
             let str = '<div class="entry">';
                str += '<div class="name"><p>' + addressBook[n].fullname + '</p></div>';
                str += '<div class="email"><p>' + addressBook[n].email + '</p></div>';
                str += '<div class="phone"><p>' + addressBook[n].phone + '</p></div>';
                str += '<div class="address"><p>' + addressBook[n].address + '</p></div>';
                str += '<div class="city"><p>' + addressBook[n].city + '</p></div>';
                str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
                str += '</div>';
                addBookDiv.innerHTML += str;
            }
        };
*/