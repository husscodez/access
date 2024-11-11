



// ==UserScript==
// @name         VSoft Pro
// @match        https://vanillasoft.net/Web/default.asp
// ==/UserScript==


clientName.insertAdjacentHTML('afterend','<button class="speak" style="position:absolute;right:0px;top:10px;width:10px;padding:0px;max-width:15px;hight:10px;z-index:1;padding:4px" tabindex="0" data-accessibility-tab="true"><img class="speak" src="https://pngimg.com/d/sound_PNG22.png" style="width:100%;max-width:15px;margin:0px;padding:0px;hight:100%;vertical-align: middle;filter: invert(.95);"></button><button class="copy" style="position:absolute;right:55px;top:10px;width:10px;padding:0px;max-width:15px;hight:10px;z-index:1;padding:4px" tabindex="0" data-accessibility-tab="true"><img class="copy" src="https://cdn-icons-png.flaticon.com/512/54/54702.png" style="width:100%;max-width:15px;margin:0px;padding:0px;hight:100%;vertical-align: middle;filter: invert(.95);"></button>')
tcpaShowNumbers.onclick=e=>{
    setTimeout(function(){
        notification.hide();
        overrideTcpa24hrLimitConfirmed()
        setTimeout(function(){
            document.getElementsByClassName('dialphone')[0].click()
        },300)
    },200)
}
document.ondblclick=e=>{
if(FirstName.value==FirstName.value.toUpperCase())FirstName.value=FirstName.value[0]+FirstName.value.substr(1).toLowerCase()
if(LastName.value==LastName.value.toUpperCase())LastName.value=LastName.value[0]+LastName.value.substr(1).toLowerCase()
}

ondblclick=e=>{
if(e.target.id=='n2980129')open('tel:'+display_n2980129.innerText.split(',')[0])
}

document.onmousedown=e=>{

// NEW LEAD TO SHEET ***
if(new Date().toLocaleDateString('en-US',{year:'numeric',month:'2-digit',day:'2-digit'}).replace(/\//g,'-')==tplStatus_contact_added_on.innerText.split(' ')[0]&&e.target.parentElement.id=='quickResultCodes'&&!e.target.innerText.includes('Result')){
sendToSheet()
}
// NEW LEAD TO SHEET ***




    if(e.target.tagName=='BUTTON'&&(e.target.innerText=='NC DEFAULT'||e.target.innerText=='No Contact'||e.target.innerText=='OutDefault'||e.target.innerText.includes('Retry '))){
        if(comments.value.length==0||(comments.value.slice(0,2)=='NC')&&comments.value.length<=7){
            if(e.target.innerText.includes('Retry '))comments.value='NC '+e.target.innerText.split(' ')[1]
            else if(e.target.innerText=='OutDefault')comments.value='OUT'
            else comments.value='NC'
        }
        setTimeout(function(){
            notifyCloseButtonFunction()
            notification.hide()
            setTimeout(function(){
                e.target.click()
            },document.getElementsByClassName('notificationContent')[0].innerText.split('have ')[1].split(' seconds')[0]*1000)
        },200)
    }
}
document.body.onclick=e=>{
if(e.pageX==290&&e.pageY==224&&contactNotification.style.display!='none')document.getElementsByClassName('dialphone')[0].click()
    if(e.target.id=='searchTerm')e.target.select()
    if(e.target.className=='speak'){
        var msg=new SpeechSynthesisUtterance()
        msg.text=FirstName.value
        msg.rate=0.8
        speechSynthesis.speak(msg)
if(clientPanelTcpa.style.display!='none'){
showOverrideTCPA24hrLimitMessage()
notification.hide(); overrideTcpa24hrLimitConfirmed()
document.getElementsByClassName('dialphone')[0].click()
}
}

if(e.target.className.includes('quickResultBtn')){
cn=callbtn_primary_phone.innerText.split('\n1 ')[1]
nto=setTimeout(function(){
clearTimeout(nto)
// *** AUTO DIAL WHEN SERVER ERROR ***
// if(document.getElementsByClassName('callBlocked').length)open('tel:'+display_n2980129.innerText.split(',')[0])
// ***
if(callbtn_primary_phone.innerText.split('\n1 ')[1]!=cn){
cn=callbtn_primary_phone.innerText.split('\n1 ')[1]
document.getElementsByClassName('speak')[0].click()
if(FirstName.value==FirstName.value.toUpperCase())FirstName.value=FirstName.value[0]+FirstName.value.substr(1).toLowerCase()
if(LastName.value==LastName.value.toUpperCase())LastName.value=LastName.value[0]+LastName.value.substr(1).toLowerCase()
document.getElementsByClassName('tab-content p1')[0].scrollBy(0,120)
console.log(callbtn_primary_phone.innerText.split('\n1 ')[1]!=cn)
console.log(callbtn_primary_phone.innerText.split('\n1 ')[1])
console.log(cn+'\n\n')
}
//DRIP()
},6e3)

    }
    if(e.target.className=='copy'){
        navigator.clipboard.writeText(ZipCode.value+'\n'+(n2393619.value.length>3?n2393619.value.replace(/\D/g,''):'01/01/'+(new Date().getYear()+1900-n2393583.value))+'\n')//+n2393623.value[0].toUpperCase())
    }
    if(e.target.id=='n2393619')navigator.clipboard.writeText((n2393619.value.length>3?n2393619.value.replace(/\D/g,''):'01/01/'+(new Date().getYear()+1900-n2393583.value)))
}
document.body.oncontextmenu=e=>{
/*
// HU ON RIGHTCLICK
    if(e.target.tagName=='BUTTON'&&(e.target.innerText=='NC DEFAULT'||e.target.innerText=='No Contact'||e.target.innerText.includes('Retry '))){
        if(comments.value.slice(0,2)=='NC'){
            e.preventDefault()
            if(e.target.innerText.includes('Retry '))comments.value='HU '+e.target.innerText.split(' ')[1]
            else comments.value='HU'
            e.target.click()
        }
        setTimeout(function(){
            notifyCloseButtonFunction()
            notification.hide()
            setTimeout(function(){
                e.target.click()
            },document.getElementsByClassName('notificationContent')[0].innerText.split('have ')[1].split(' seconds')[0]*1000)
        },200)
    }
*/
    if(e.target.className=='speak'){
        e.preventDefault()
        var msg=new SpeechSynthesisUtterance()
        msg.text=LastName.value
        msg.rate=0.8
        speechSynthesis.speak(msg)
    }
    if(e.target.parentElement.className.includes('dialphone')){
        e.preventDefault()
        navigator.clipboard.writeText(e.target.parentNode.innerText.split('1 (')[1].replace(/\D/g,''))
    }
    if(e.target.className=='copy'){
        e.preventDefault()
        navigator.clipboard.writeText(State.value+'\t'+FirstName.value+' '+LastName.value+'\t'+document.getElementsByClassName('phone')[0].value.replace(/[()\- ]/g,'').slice(1)+'\tNotes\t\t'+((new Date().getMonth()+1)+'/'+new Date().getDate())+'\t\t\t'+n2393583.value+'\t'+ZipCode.value+'\tTD\tVS\t\t'+Email.value)
    }



// *** RIGHT CLICK = SEND TO SHEET
if(e.target.parentElement.id=='quickResultCodes'){
e.preventDefault()
e.target.click()
sendToSheet()
}
// *** RIGHT CLICK = SEND TO SHEET



}
sendEmalBtn.oncontextmenu=e=>{
e.preventDefault()
location="sms:"+(document.getElementsByClassName('phone')[0].value.split('(')[1].replace(/\D/g,''))+"?body=Greetings "+FirstName.value+", my name is Huss. I wanted to text you first, just in case it’s not a good time for you to talk.%0A%0AI received your request. I can provide health coverage pricing and options. I have access to ACA (Obamacare), private full coverage, short-term supplemental, and dental and vision policies. I can help you take a look at all of the options and savings. Will the quote be for yourself or the family?"
}
/*sendEmalBtn.oncontextmenu=e=>{
    e.preventDefault()
    e.target.click()
    var tii=setInterval(function(){
        modalFrame.contentWindow.document.getElementsByClassName('oldTable')[0].getElementsByTagName('tr')[7].getElementsByTagName('a')[0].click()
        setTimeout(function(){
            modalFrame.contentWindow.document.getElementById('bSelectEmailTemplateStepEmail').click()
            var ti=setInterval(function(){
                if(modalFrame.contentWindow.document.getElementById('Body_ifr').contentWindow.document.getElementById('tinymce').innerText.length>5){
                    clearInterval(ti)
                    clearInterval(tii)
                    modalFrame.contentWindow.document.getElementById('EmailFormStepSend').click()
                }
            },50)
        },100)
    },50)
    setTimeout(function(){
        clearInterval(ti)
        clearInterval(tii)
    },3e3)
}*/


searchTerm.onpaste=e=>{
    setTimeout(function(){
        if(!isNaN(e.target.value.replace(/[()\- +]/g,''))&&e.target.value.replace(/[()\- +]/g,'').length==11)e.target.value=e.target.value.replace(/[()\- +]/g,'').slice(1,11)
    })
setTimeout(function(){
if(e.target.value.split('000')[0]=='   '){
btnSearch.click()
}
})
}

function onlf(){
onli=setInterval(function(){
if(searchFrame.contentDocument.getElementById('searchTermModal').value.split('000')[0]=='   '){
searchFrame.contentDocument.getElementsByClassName('tbodyLoading')[0].getElementsByTagName('button')[0].click()
}
},3e2)
setTimeout(function(){
clearInterval(onli)
if(tplStatus_contact_id.innerText==document.getElementById('searchTerm').value.split('000')[1])document.getElementsByClassName('dialphone')[0].click()
document.getElementsByClassName('speak')[0].click()
},1.5e3)
}

btnSearch.onclick=e=>{
if(document.getElementById('searchTerm').value.split('000')[0]=='   ')onlf()
}

/*
onload=e=>{
setTimeout(function(){
alert(btnSearch)
if(parent.location.hash.substr(1,3)==000){
searchTerm.value='   '+parent.location.hash.substr(1)
btnSearch.click()
onlf()
}
},6e3)
}
*/


// TIMER CODE ****
tff=e=>e<10?e='0'+e:e
Tt=0
ondblclick=e=>{
if(!Tt){
Tt=1
pd=new Date()
document.getElementsByClassName('dncLight on')[0].insertAdjacentHTML('afterend',"<div class='dncLight on' id='timer' style='background:#000 !important'>00:00:00</div>")//<div class='dncLight on' style='border-radius:20px;background:#9ab !important'><label class='switch' style='border-radius:20px;background:#9ab !important'><input id=si type=checkbox><span class=slider style='background:#9ab !important'></span></label></div>")
cN=clientPanelPhoneFetch.innerText.split('\n1 ')[1]
setInterval(function(){
nd=new Date()
if(clientPanelPhoneFetch.innerText.split('\n1 ')[1]!=cN)pd=new Date(),cN=clientPanelPhoneFetch.innerText.split('\n1 ')[1]
tM=tff(Math.floor((nd-pd)/1000/60))
tS=tff(Math.floor((nd-pd)/1000%60))
tMS=tff(Math.floor(Math.floor((nd-pd)%1000)/10))
if((tS>=30||tM>0)&&comments.value==''){
timer.setAttribute('style','background:rgb('+(Math.round(Math.random()*255))+','+(Math.round(Math.random()*255))+','+(Math.round(Math.random()*255))+') !important')
//document.querySelectorAll('*').forEach(el => el.setAttribute('style','background:rgb('+(Math.round(Math.random()*255))+','+(Math.round(Math.random()*255))+','+(Math.round(Math.random()*255))+') !important'))
}
else timer.setAttribute('style','background:#000 !important')
timer.innerHTML=tM+':'+tS+':'+tMS
})


/* //adds stats page to main, sets iframe very far
clientName.insertAdjacentHTML('afterend','<iframe src="https://vanillasoft.net/Web/caller/userstats.asp" style="position:fixed;left:100000px;" id="sef"></iframe>')

// ondblclick alert Number of Dials
ondblclick=e=>{
nod=sef.contentDocument.body.getElementsByClassName('oldTable')[0].getElementsByTagName('tbody')[0].getElementsByTagName('td')[1].innerText
alert(nod)
}
*/

}
}













// *** AUTO LLR ***
/*
$.ajax({
	url: "https://landlineremover.com/api/check-number?apikey=ZZCgPXqxKYndDkan5I0ljqKltNd8y2AJUt8jVHXn&number=12109064258",
	method: "GET",
	success: function (response) {
		console.log(response["data"]["LineType"])
	}
})
*/
// *** AUTO LLR ***



// *** AUTO TD ***

function DRIP(){
fetch('https://api.textdrip.com/api/create-contact-with-tag', {
  method:'POST',
  headers:{
    'Authorization':'Bearer 78962|7YW6FCsmvEpXOsdkBnEBOixDAooXAdgWs4lmxO8W',
    'Accept':'application/json',
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    "name":$("#FirstName").val()+" "+$("#LastName").val(),
    "phone":display_n2980129.innerHTML.split(',')[0],//$('[placeholder="Phone Number"]').eq(0).val(),
    "email":$("#Email").val(),
    "birthdate":$("#n2393619").val(),
    "address":$("#Address1").val(),
    "city":$("#City").val(),
    "state":$("#State").val(),
    "zipcode":$("#ZipCode").val(),
    "opted_out":0,
    "campaign": "f753a756-a80f-43f7-9ab2-ebcb891c2f9d",
    "tags":[{value:"Vanillasoft_TDNR"}]
  })
})
.then(response => response.json())
.then(data => console.log(JSON.stringify(data)))
.catch(error => console.error('Error: '+error))
}

// *** AUTO TD ***














/*
// PIPELINE/AGED CODE ****
a=[]
sc=false

onload=e=>{
if(JSON.parse(localStorage.getItem('data')))a=JSON.parse(localStorage.getItem('data'))
sc=JSON.parse(localStorage.getItem('sc'))
clientName.insertAdjacentHTML('afterend',"<div id=da style='position:fixed;right:0;bottom:0;width:0;height:0;z-index:999;background:#0001;color:#fff;padding:20px;border-top-left-radius:50px;transition:.6s'></div>")

da.onmouseenter=e=>{
da.innerHTML="<div style='width:100%;float:right;'><button class='mbtn' id='btnC' style='background:#c11'>CLEAR</button><button class='mbtn' id='btnS' style='background:#1c1'>SAVE</button><div class=mbtn><label class=switch><input id=si type=checkbox><span class=slider></span></label></div><div style='margin-left:13px' id='cntE'><h3>Count: "+a.length+"</h3></div></div><div id=ge></div>"
setTimeout(function(){
if(sc)si.checked=true
else si.checked=false
})
for(i=0;i<a.length;i++){
ge.innerHTML="<div class='br0'>"+a[i].first+"</div><div>"+a[i].last+"</div><div"+(a[i].dob.split('/')[2]<1974?' style=color:'+(a[i].dob.split('/')[2]<1964?'#d62d0b':'#fca53a'):'')+">"+a[i].dob+"</div><div>"+a[i].zip+"</div><div>"+a[i].state+"</div><div><a style='color:#fff;font-size:16px' href='tel:"+a[i].phone+"'>"+a[i].phone+"</a></div><div>"+a[i].email+"</div><div class='br1'><div class='btnX' id=btn_"+i+">❌</div></div>"+ge.innerHTML
}

document.getElementsByClassName('slider')[0].onmouseup=e=>{
setTimeout(function(){
if(e.target.previousSibling.checked)sc=true
else sc=false
localStorage.setItem('sc',sc)
})
}


da.onmouseout=e=>{
setTimeout(function(){if(!da.contains(e.relatedTarget))da.innerHTML=''},150)
}

document.onclick=e=>{
if(e.target.innerText=="❌"){
a.splice(e.target.id.split('_')[1],1)
e.target.parentElement.parentElement.remove()
localStorage.setItem('data',JSON.stringify(a))
}}
}}


function addCF(pp){
first=FirstName.value
last=LastName.value
dob=(n2393619.value.length>3?n2393619.value.replace(/-/g,'/'):'01/01/'+(new Date().getYear()+1900-n2393583.value))
zip=ZipCode.value
state=State.value
phone=document.getElementsByClassName('phone')[0].value.replace(/[()\- ]/g,'').slice(1)
email=Email.value
source=tplStatus_lead_source.innerText
if(a.some(obj=>obj.phone==phone)){
if(pp)alert("Contact already added")
}
else{
a.push({
first:first,
last:last,
dob:dob,
zip:zip,
state:state,
phone:phone,
email:email,
source:source
})
localStorage.setItem('data',JSON.stringify(a))
}
}
onmousedown=e=>{
if(comments.value!="LL"&&(e.target.tagName=="BUTTON"||e.target.tagName=="IMG")&&(e.target.innerText=="No Contact"||e.target.innerText.includes("Retry ")||e.target.innerText=="OutDefault"||e.target.innerText=="NC DEFAULT"||e.target.className=='copy')&&(e.button==1||(e.button==0||e.button==2)&&sc&&e.target.className!='copy')){
if(e.target.className!='copy'){
addCF(false)
if(e.button==1){
e.target.click()
setTimeout(function(){
notifyCloseButtonFunction()
notification.hide()
setTimeout(function(){
e.target.click()
},document.getElementsByClassName('notificationContent')[0].innerText.split('have ')[1].split(' seconds')[0]*1000)
},200)
}
}
else addCF(true)
}

//if(e.button==1&&e.target.className=='speak'){
//open(encodeURI(`data:text/csv;charset=utf-8,First,Last,DOB,ZipCode,State,Phone,Email\n${a.map(o=>Object.values(o).join(',')).join('\n')}`))
//}

onclick=e=>{
if(e.target.id=='btnS'){
if(a.length>0){
tp=prompt("File Name:")
if(tp!==null){
tl=document.createElement('a')
tl.style.display='none'
document.body.appendChild(tl)
tl.href=encodeURI(`data:text/csv;charset=utf-8,FirstName,LastName,Birthday,ZipCode,State,Phone,Email,Source\n${a.map(o=>Object.values(o).join(',')).join('\n')}`)
tl.download=tp==''?new Date().toLocaleDateString().replace(/\//g,'-')+" ["+a.length+"]":tp
tl.click()
tl.remove()
}
}
else alert("List is empty")
}

if(e.target.id=='btnC'&&confirm("Are you sure you want to clear list?")){
a=[]
localStorage.setItem('data',JSON.stringify(a))
ge.innerHTML=''
}

}

}
//onbeforeunload=e=>{return 0}

*/














// **** MONDAY ****
/*

onmousedown=e=>{
if(e.button==1&&e.target.className=="copy"){

M_name=FirstName.value+' '+LastName.value
M_state=State.value
M_zip=ZipCode.value
M_phone=document.getElementsByClassName('phone')[0].value.replace(/[()\- ]/g,'').slice(1)
M_dob=n2393619.value.replace(/(\d{2})[\-/]?(\d{2})[\-/]?(\d{4})/,'$3-$1-$2')


M_source="VS"
M_stage="SET"

const query = `
  mutation {
    create_item (board_id: 7549195236, group_id: "mp_pipeline_1727831533_xlsx__1", item_name: "`+M_name+`", column_values: "{\\"status\\":\\"`+M_source+`\\", \\"dup__of_source__1\\":\\"`+M_stage+`\\", \\"text__1\\":\\"`+M_state+`\\", \\"text9__1\\":\\"`+M_zip+`\\", \\"phone__1\\":\\"`+M_phone+`\\", \\"date__1\\":\\"`+M_dob+`\\"}") {
      id
    }
  }
`;

fetch('https://api.monday.com/v2', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQxODIxOTUzMCwiYWFpIjoxMSwidWlkIjo2NjcwOTU0MCwiaWFkIjoiMjAyNC0xMC0wMlQwMDo0MDowMC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjU3MDg2MjgsInJnbiI6InVzZTEifQ.U5vun-UzELv2J9elZaUot8VcLVbWv2unmwmzojj-570'
  },
  body: JSON.stringify({
    query: query
  })
}).then(response => response.json())
  .then(data => console.log(data));
}
}
*/





// *** SLACK *** AUTO/HASH

window.onload=e=>{
if(parent.location.hash!=''){
searchTerm.value='   000'+parent.location.hash.split('#')[1]
    setTimeout(function(){
        if(!isNaN(document.getElementById('searchTerm').value.replace(/[()\- +]/g,''))&&document.getElementById('searchTerm').value.replace(/[()\- +]/g,'').length==11)document.getElementById('searchTerm').value=document.getElementById('searchTerm').replace(/[()\- +]/g,'').slice(1,11)
    })
setTimeout(function(){
if(document.getElementById('searchTerm').value.split('000')[0]=='   '){
btnSearch.click()
}
},1600)
}
}















// RIGHT CLICK ON COPY -> SHEETS
ST_phone=S_phone=''

function sendToSheet(){
S_name=FirstName.value+' '+LastName.value
S_state=State.value
S_zip=ZipCode.value
S_phone=document.getElementsByClassName('phone')[0].value.replace(/[()\- ]/g,'').slice(1)
S_email=Email.value
S_dob=n2393619.value.replace(/(\d{2})[\-/]?(\d{2})[\-/]?(\d{4})/,'$1-$2-$3')
S_date=((new Date().getMonth()+1)+'/'+new Date().getDate())

function sendDataToGoogleSheet(S_state,S_name,S_phone,S_date,S_dob,S_zip,S_email) {
  fetch('https://script.google.com/macros/s/AKfycbwfzJJwoykHpqRimyUopLZ0h-07IfMJ9dELvb3iSlHNH-EMqyDqQi9gcTQb0h_0bo9Z/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      b: S_state,
      c: S_name,
      d: S_phone,
      g: S_date,
      h: S_dob,
      i: S_zip,
      j: S_email
    })
  })
  .then(response => console.log('Data sent successfully'))
  .catch(error => console.error('Error:', error));
}
if(ST_phone!=S_phone){
sendDataToGoogleSheet(S_state,S_name,S_phone,S_date,S_dob,S_zip,S_email)
ST_phone=S_phone
}
}





