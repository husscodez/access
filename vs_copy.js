console.log("VS loaded!")

function add_copy_btn(){
bodyIframe.contentDocument.getElementById('clientName').insertAdjacentHTML('afterend','<button class="copy" style="position:absolute;right:0px;top:10px;width:10px;padding:0px;max-width:15px;hight:10px;z-index:1;padding:4px" tabindex="0" data-accessibility-tab="true"><img class="copy" src="https://cdn-icons-png.flaticon.com/512/54/54702.png" style="width:100%;max-width:15px;margin:0px;padding:0px;hight:100%;vertical-align: middle;filter: invert(.95);"></button>')
}

bodyIframe.onload=e=>{
if(!bodyIframe.contentDocument.getElementsByClassName('copy').length){
  add_copy_btn()
  if(!bodyIframe.contentDocument.getElementsByClassName('copy').length){
    setTimeout(function(){
      if(!bodyIframe.contentDocument.getElementsByClassName('copy').length){add_copy_btn()}
    },4e3)
  }
document.body.onclick=e=>{
  if(e.target.id=='searchTerm')e.target.select()
  
  if(e.target.className=='copy'){ // COPY INFO JUST IN CASE
    navigator.clipboard.writeText(bodyIframe.contentDocument.getElementById('ZipCode').value+'\n'+(bodyIframe.contentDocument.getElementById('n2393619').value.length>3?bodyIframe.contentDocument.getElementById('n2393619').value.replace(/\D/g,''):'01/01/'+(new Date().getYear()+1900-bodyIframe.contentDocument.getElementById('n2393583').value))+'\n')
  }

if(e.target.innerText=='NC DEFAULT'||e.target.innerText=='No Contact'||e.target.innerText.includes('Retry ')||e.target.innerText=='OutDefault'){
  if(bodyIframe.contentDocument.getElementById('comments').value==""){
    if(e.target.innerText=='NC DEFAULT'||e.target.innerText=='No Contact'){
      bodyIframe.contentDocument.getElementById('comments').value="NC"
    } else if(e.target.innerText.includes('Retry ')){
      bodyIframe.contentDocument.getElementById('comments').value=e.target.innerText
    } else{
      bodyIframe.contentDocument.getElementById('comments').value="OUT"
    }
  }
  setTimeout(function(){
    bodyIframe.contentDocument.getElementsByClassName('notifyButtonWrapper')[0].childNodes[0].click()
    setTimeout(function(){
      e.target.click()
      if(bodyIframe.contentDocument.getElementsByClassName('notifyButtonWrapper').length)bodyIframe.contentDocument.getElementsByClassName('notifyButtonWrapper')[0].childNodes[0].click()
    },bodyIframe.contentDocument.getElementsByClassName('notificationContent')[0].innerText.split('have ')[1].split(' seconds')[0]*1000)
  },200)
}}}

} // on load end


// 24 hr btn >>>
let name_hist=""
document.body.onmousedown=e=>{
  /*if(e.target.innerText=='NC DEFAULT'||e.target.innerText=='No Contact'){
    name_hist=(bodyIframe.contentDocument.getElementById('FirstName').value+bodyIframe.contentDocument.getElementById('LastName').value).toLocaleUpperCase()
    name_hist_int=setInterval(function(){
      if((bodyIframe.contentDocument.getElementById('FirstName').value+bodyIframe.contentDocument.getElementById('LastName').value).toLocaleUpperCase()!=name_hist){
        clearInterval(name_hist_int)
        setTimeout(function(){
          if(!bodyIframe.contentDocument.getElementById('clientPanelPhoneFetch').innerText.includes('1 (')){
            //bodyIframe.contentDocument.getElementById('tcpaShowNumbers').click()
            //bodyIframe.contentDocument.getElementsByClassName('notificationButton notificationButtonBlue notifyButton')[0].click()
            //bodyIframe.contentDocument.getElementsByClassName('dialphone')[0].click()
          }
        },1e3)
      }
    },500)
  }*/
  if(e.target.id=='tcpaShowNumbers'){
    setTimeout(function(){
      bodyIframe.contentDocument.getElementById('tcpaShowNumbers').click()
      bodyIframe.contentDocument.getElementsByClassName('notificationButton notificationButtonBlue notifyButton')[0].click()
      bodyIframe.contentDocument.getElementsByClassName('dialphone')[0].click()
    },100)
  }
}
// 24 hr btn ^^^


// search numb format >>>
bodyIframe.contentDocument.addEventListener("paste",e=>{
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

