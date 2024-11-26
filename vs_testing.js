console.log("VS loaded!")

function add_copy_btn(){
document.getElementById('clientName').insertAdjacentHTML('afterend','<button class="copy" style="position:absolute;right:0px;top:10px;width:10px;padding:0px;max-width:15px;hight:10px;z-index:1;padding:4px" tabindex="0" data-accessibility-tab="true"><img class="copy" src="https://cdn-icons-png.flaticon.com/512/54/54702.png" style="width:100%;max-width:15px;margin:0px;padding:0px;hight:100%;vertical-align: middle;filter: invert(.95);"></button>')
}

onload=e=>{
if(!document.getElementsByClassName('copy').length){
  add_copy_btn()
  if(!document.getElementsByClassName('copy').length){
    setTimeout(function(){
      if(!document.getElementsByClassName('copy').length){add_copy_btn()}
    },4e3)
  }
document.body.onclick=e=>{
  if(e.target.id=='searchTerm')e.target.select()
  
  if(e.target.className=='copy'){ // COPY INFO JUST IN CASE
    navigator.clipboard.writeText(document.getElementById('ZipCode').value+'\n'+(document.getElementById('n2393619').value.length>3?document.getElementById('n2393619').value.replace(/\D/g,''):'01/01/'+(new Date().getYear()+1900-document.getElementById('n2393583').value))+'\n')
  }

if(e.target.innerText=='NC DEFAULT'||e.target.innerText=='No Contact'||e.target.innerText.includes('Retry ')||e.target.innerText=='OutDefault'){
  if(document.getElementById('comments').value==""){
    if(e.target.innerText=='NC DEFAULT'||e.target.innerText=='No Contact'){
      document.getElementById('comments').value="NC"
    } else if(e.target.innerText.includes('Retry ')&&e.target.parentElement.id=="quickResultCodes"){
      document.getElementById('comments').value=e.target.innerText
    } else{
      document.getElementById('comments').value="OUT"
    }
  }
  setTimeout(function(){
    document.getElementsByClassName('notifyButtonWrapper')[0].childNodes[0].click()
    setTimeout(function(){
      e.target.click()
      if(document.getElementsByClassName('notifyButtonWrapper').length)document.getElementsByClassName('notifyButtonWrapper')[0].childNodes[0].click()
    },document.getElementsByClassName('notificationContent')[0].innerText.split('have ')[1].split(' seconds')[0]*1000)
  },500)
}}}


// search numb format >>>
document.addEventListener("paste",e=>{
    if(e.target&&e.target.id=="searchTerm"){
        setTimeout(()=>{
            if(e.target.value==e.target.value.replace(/[a-zA-Z]/g,"")){
                e.target.value=e.target.value.replace(/\D/g,"")
                if(e.target.value.length==11&&e.target.value[0]==1){
                    e.target.value=e.target.value.slice(1,11)
                }
            }
        },20)
    }
})
// search numb format ^^^


} // on load end
