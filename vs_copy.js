console.log("VS loaded")

function add_copy_btn(){
bodyIframe.contentDocument.getElementById('clientName').insertAdjacentHTML('afterend','<button class="copy" style="position:absolute;right:0px;top:10px;width:10px;padding:0px;max-width:15px;hight:10px;z-index:1;padding:4px" tabindex="0" data-accessibility-tab="true"><img class="copy" src="https://cdn-icons-png.flaticon.com/512/54/54702.png" style="width:100%;max-width:15px;margin:0px;padding:0px;hight:100%;vertical-align: middle;filter: invert(.95);"></button>')
}

bodyIframe.onload=e=>{
if(!bodyIframe.contentDocument.getElementsByClassName('copy').length){
  add_copy_btn()
  if(!bodyIframe.contentDocument.getElementsByClassName('copy').length){
    setTimeout(function(){add_copy_btn()},3e3)
  }
document.body.onclick=e=>{
if(e.target.className=='copy'){
  navigator.clipboard.writeText(bodyIframe.contentDocument.getElementById('ZipCode').value+'\n'+(bodyIframe.contentDocument.getElementById('n2393619').value.length>3?bodyIframe.contentDocument.getElementById('n2393619').value.replace(/\D/g,''):'01/01/'+(new Date().getYear()+1900-bodyIframe.contentDocument.getElementById('n2393583').value))+'\n')
}
if(e.target.innerText=='NC DEFAULT'||e.target.innerText=='No Contact'){
  if(bodyIframe.contentDocument.getElementById('comments').value==""){
    bodyIframe.contentDocument.getElementById('comments').value="NC"
  }
  setTimeout(function(){
    //notifyCloseButtonFunction()
    //notification.hide()
    bodyIframe.contentDocument.getElementsByClassName('notifyButtonWrapper')[0].childNodes[0].click()
    setTimeout(function(){
      e.target.click()
      if(bodyIframe.contentDocument.getElementsByClassName('notifyButtonWrapper').length)bodyIframe.contentDocument.getElementsByClassName('notifyButtonWrapper')[0].childNodes[0].click()
    },bodyIframe.contentDocument.getElementsByClassName('notificationContent')[0].innerText.split('have ')[1].split(' seconds')[0]*1000)
  },200)
}
}}}
