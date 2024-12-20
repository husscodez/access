//alert("HELLO FROM TESTING !!")


console.log("MP -> MO loaded")

alert("34")


// auto scroll >>>

oncontextmenu=e=>{
if(e.target.className=='account-logo'){
e.preventDefault()
if([...document.querySelectorAll('div')].find(e=>e.textContent==='Emailed items'))
mp_to_mon()
sif=setInterval(function(){
if(![...document.querySelectorAll('div')].find(e=>e.textContent==='Emailed items'))document.getElementById('board-wrapper-first-level-content').scrollBy(0,100)
else clearInterval(sif),document.getElementById('board-wrapper-first-level-content').scrollBy(0,-150)
})
}
}

// auto scroll ^^^





function mp_to_mon(){
M_b_id=location.pathname.split('boards/')[1].split('/')[0]

apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQ0MjkxMzA5NywiYWFpIjoxMSwidWlkIjo2OTA5MzY5NSwiaWFkIjoiMjAyNC0xMS0zMFQyMDo1MTozNi4zNzJaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjY3Mzc4NzcsInJnbiI6InVzZTEifQ.lulYiR65sKd3BLFJczw4kRadLh4n5qdrQYUD5gUaj8o"


x=[...document.querySelectorAll("div")].find(e=>e.textContent=="Emailed items").parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('name-cell-component-side-cell navigableCell--gFQEL')


function addLead(c){
M_g_id = "new_group__1"
M_name = c.split('First Name:\n')[1].split('\n')[0]+' '+c.split('Last Name:\n')[1].split('\n')[0]
M_state = c.split('State:\n')[1].split('\n')[0]
M_phone = "1"+c.split('Primary Phone:\n')[1].split('\n')[0]
M_dob = c.split('Date of Birth:\n')[1].split('\n')[0]
M_zip = c.split('Zip:\n')[1].split('\n')[0]
M_email = c.split('Email:\n')[1].split('\n')[0]
M_address = c.split('Address:\n')[1].split('\n')[0]

columnValues={
"text__1": M_state,
"phone__1": M_phone,
"text1__1": M_dob,
"text3__1": M_zip,
"email__1": { "email": M_email, "text": M_email },
"text5__1": M_address
}

const query = `
  mutation {
    create_item (
      board_id: "${M_b_id}", 
      group_id: "${M_g_id}",
      item_name: "${M_name}"
			
      column_values: "${JSON.stringify(columnValues).replace(/"/g, '\\"')}"
    ) {
      id
    }
  }
`;

fetch('https://api.monday.com/v2', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : apiKey
  },
  body: JSON.stringify({
    query: query
  })
}).then(response => response.json())
  .then(data => console.log(data));
}



function getE(pid){
fetch("https://api.monday.com/v2", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : apiKey
  },
  body: JSON.stringify({
    query: `{
      items (ids: ${pid}) {
        id
        name
        updates {
          id
          text_body
        }
      }
    }`
  })
})
.then(r=>r.json())
.then(d=>{
console.log(`***** ${pid} *****`)
addLead(d.data.items[0].updates[0].text_body)
});
}

for(i=0;i<x.length;i++){
x[i].click()
console.log(x[i].previousElementSibling.innerText+", "+location.pathname.split('pulses/')[1])
if(x[i].previousElementSibling.innerText.startsWith("New Lead $")){
getE(location.pathname.split('pulses/')[1])
setTimeout(function(){
    document.getElementsByClassName('item-page-header-component__close-btn')[0].click()
})
}
if(i==x.length-1)setTimeout(function(){
sif=setInterval(function(){
if(![...document.querySelectorAll('div')].find(e=>e.textContent==='PITCHED GHOSTED/NEED TO COMPLETE APP'))document.getElementById('board-wrapper-first-level-content').scrollBy(0,-100)
else clearInterval(sif),document.getElementById('board-wrapper-first-level-content').scrollBy(0,100)
})
},5e3)
}
}
