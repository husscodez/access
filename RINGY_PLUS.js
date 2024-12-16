console.log("Ringy PLUS +++!!!!!+++++")

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



function addMondayBtn(){
const btn_observer=new MutationObserver(()=>{
if(document?.querySelector('#master-go-back-from-lead-button')?.previousElementSibling?.previousElementSibling?.className){
btn_observer.disconnect()
const target_btn=document.querySelector('#master-go-back-from-lead-button')
const monday_btn=target_btn.previousElementSibling.previousElementSibling.cloneNode(true)
monday_btn.className=monday_btn.className.replace(' Mui-disabled','')
monday_btn.innerHTML='Monday'
monday_btn.id='monday'
target_btn.parentElement.appendChild(monday_btn)
monday_btn.onclick=e=>{
var ci=document.getElementsByClassName('lead-primary-info-column')[0].childNodes[0].childNodes[0]
  console.log("MONDAY Scrape")
console.log(`
Name: ${ci.childNodes[0].innerText}
Phone: ${ci.childNodes[1].innerText}
Email: ${ci.childNodes[2].innerText}
Full Address: ${ci.childNodes[3]?.innerText}
Street Address: ${ci.childNodes[3]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.innerText}
State: ${ci.childNodes[3]?.childNodes[0]?.childNodes[0]?.childNodes[1]?.nodeValue?.split(', ')[1]?.split(' ')[0]}
Zip Code: ${(ci.childNodes[3]?.childNodes[0]?.childNodes[0]?.childNodes[1]?.nodeValue?.split(', ')[1]?.split(' ')[1])}
Birthday: ${document.getElementsByClassName('lead-other-info-column')[0]?.innerText?.split('Birthday: ')[1]?.split('\n')[0]?.replace(/(\d{2}\/\d{2}\/)(\d{2})$/,(_,p1,p2)=>p1+(p2<50?'20':'19')+p2)}
`)
// **** MONDAY CODE **** >>>
apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQ0MjkxMzA5NywiYWFpIjoxMSwidWlkIjo2OTA5MzY5NSwiaWFkIjoiMjAyNC0xMS0zMFQyMDo1MTozNi4zNzJaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjY3Mzc4NzcsInJnbiI6InVzZTEifQ.lulYiR65sKd3BLFJczw4kRadLh4n5qdrQYUD5gUaj8o"

//M_b_id = 7954892781
M_g_id = "new_group__1"
M_name = ci.childNodes[0].innerText
M_state = ci.childNodes[3]?.childNodes[0]?.childNodes[0]?.childNodes[1]?.nodeValue?.split(', ')[1]?.split(' ')[0]
M_phone = ci.childNodes[1].innerText.replace(/\D/g,'')
M_status = "POSITIVE RESPONSE"//"APPT SET"
M_source = "VS DSL"
M_dob = convertDate(document.getElementsByClassName('lead-other-info-column')[0]?.innerText?.split('Birthday: ')[1]?.split('\n')[0]?.replace(/(\d{2}\/\d{2}\/)(\d{2})$/,(_,p1,p2)=>p1+(p2<50?'20':'19')+p2))
M_texting = "RINGY 1"
M_zip = (ci.childNodes[3]?.childNodes[0]?.childNodes[0]?.childNodes[1]?.nodeValue?.split(', ')[1]?.split(' ')[1])
M_email = ci.childNodes[2].innerText
M_address = ci.childNodes[3]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.innerText

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
// **** MONDAY CODE **** ^^^
}
}
})
btn_observer.observe(document,{subtree:true,childList:true,attributes:true})
setTimeout(()=>btn_observer.disconnect(),10e3)
}





let lastUrl=location.href;
new MutationObserver(e=>{
if(location.href!==lastUrl){
lastUrl=location.href
console.log('URL changed:',lastUrl)
if(lastUrl.includes('https://app.ringy.com/home/leads?leadId=')||lastUrl.includes('https://app.ringy.com/home/sms?leadId='))addMondayBtn()
}
}).observe(document,{subtree:true,childList:true})

onload=e=>{
addMondayBtn()
}
