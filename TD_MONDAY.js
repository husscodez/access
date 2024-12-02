console.log("TD TESTING ******!!")

// ***
fetch("https://raw.githubusercontent.com/husscodez/access/main/list.json?timestamp=" + new Date().getTime())
  .then(r => r.json())
  .then(d => {
    const u = d.u.find(u => u.c === localStorage.EXT_KEY);
    console.log(u)
    console.log(u.m)
    M_b_id = u.m
  })
  .catch(error => console.error('Error:', error));
// ***

convertDate=date=>date.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/,(m,d,mth,y)=>`${d.padStart(2,'0')}/${mth.padStart(2,'0')}/${y.length==2?'20'+y:y}`)

onclick=e=>{
if(e.target.id=='sel_username'){
c=document.createElement('button')
c.className='btn btn-info'
c.id='copy'
c.innerText='Copy'
/*q=document.createElement('button')
q.className='btn btn-info'
q.id='quote'
q.innerText='Quote'*/
abi=setInterval(function(){
if(document.getElementsByClassName('btn-light')[0]!=undefined){
//setTimeout(function(){ // testing timeout **?**
dobv=document.getElementsByName('birthdate')[0]
if(dobv.value.split('-')[0].length==4)document.getElementsByName('birthdate')[0].value=dobv.value.split('-')[1]+'-'+dobv.value.split('-')[2]+'-'+dobv.value.split('-')[0]
//},1e3) // testing timeout **?**
clearInterval(abi)
//document.getElementsByClassName('btn-light')[0].before(q)
document.getElementsByClassName('btn-light')[0].before(c)
document.getElementsByClassName('btn-light')[0].parentElement.innerHTML+='<img id="info_btn" src="https://seeklogo.com/images/I/information-desk-symbol-logo-871156055D-seeklogo.com.png" style="position:absolute;left:0;bottom:0;width:20px;height:20px;filter:invert(1);cursor:pointer" title="Quote button:&#013;Left click -> Quote Male&#013;Right click -> Quote Female">'
info_btn.onclick=e=>alert('Quote button:\nLeft click -> Quote Male\nRight click -> Quote Female')
// copy btn >>>
document.getElementById('copy').onclick=e=>{
/*bdv=document.getElementsByName('birthdate')[0].value
if(bdv.split(/\D/)[2]<50)bdv=bdv.split(/\D/)[0]+'/'+bdv.split(/\D/)[1]+'/20'+bdv.split(/\D/)[2]
else if(bdv.split(/\D/)[2]<100)bdv=bdv.split(/\D/)[0]+'/'+bdv.split(/\D/)[1]+'/19'+bdv.split(/\D/)[2]
navigator.clipboard.writeText(zip_code.value+'\n'+convertDate(bdv))*/
apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQ0MjkxMzA5NywiYWFpIjoxMSwidWlkIjo2OTA5MzY5NSwiaWFkIjoiMjAyNC0xMS0zMFQyMDo1MTozNi4zNzJaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjY3Mzc4NzcsInJnbiI6InVzZTEifQ.lulYiR65sKd3BLFJczw4kRadLh4n5qdrQYUD5gUaj8o"

//M_b_id = 7954892781
M_g_id = "new_group__1"
M_name = document.getElementsByName('name')[0].value+' '+document.getElementsByName('last_name')[0].value
M_state = document.getElementsByName('state')[0].value
M_phone = document.querySelectorAll('[name=phone]')[1].value.slice(1)
M_status = "POSITIVE RESPONSE"//"APPT SET"
M_source = "VS DSL"
M_dob = convertDate(document.querySelectorAll('[name=birthdate]')[0].value)
M_texting = "TD 1"
M_zip = document.querySelectorAll('[name=zipcode]')[0].value
M_email = document.querySelectorAll('[name=email]')[0].value
M_address = document.querySelectorAll('[name=address]')[0].value

columnValues={
"text__1": M_state,
"phone__1": M_phone,
"status": M_status,
"status_1__1": M_source,
"text1__1": M_dob,
"dropdown__1": M_texting,
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
// copy btn ^^^
}
},50)
}
if(e.target.id=='threedot') add_tag.click()
}
