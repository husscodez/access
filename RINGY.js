console.log("Ringy loaded")

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




// ==UserScript==
// @name         Ringy
// @match        https://app.ringy.com/home/leads*
// ==/UserScript==


function addCopy(){
const copy_observer=new MutationObserver(()=>{
if(document?.querySelector('#master-go-back-from-lead-button')?.previousElementSibling?.previousElementSibling?.className.includes('disabled')===false){
copy_observer.disconnect()
const copy_target=document.querySelector('#master-go-back-from-lead-button')
const copy=copy_target.previousElementSibling.previousElementSibling.cloneNode(true)
copy.innerHTML='Monday'
copy.id='copy'
copy_target.parentElement.appendChild(copy)
copy.onclick=e=>{
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
}
}
})
copy_observer.observe(document,{subtree:true,childList:true,attributes:true})
setTimeout(()=>copy_observer.disconnect(),10e3)
}





let lastUrl=location.href;
new MutationObserver(e=>{
if(location.href!==lastUrl){
lastUrl=location.href
console.log('URL changed:',lastUrl)
if(lastUrl.includes('https://app.ringy.com/home/leads?leadId='))addCopy()
}
}).observe(document,{subtree:true,childList:true})

onload=e=>{
addCopy()
}



