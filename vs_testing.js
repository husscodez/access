console.log("VS loaded! --- TESTING ----!!-")

function add_copy_btn(){
  console.log("--- ADD COPY BTN ---")
  document.getElementById('clientName').insertAdjacentHTML('afterend','<button class="copy" style="position:absolute;right:0px;top:10px;width:10px;padding:0px;max-width:15px;hight:10px;z-index:1;padding:4px" tabindex="0" data-accessibility-tab="true"><img class="copy" src="https://cdn-icons-png.flaticon.com/512/54/54702.png" style="width:100%;max-width:15px;margin:0px;padding:0px;hight:100%;vertical-align: middle;filter: invert(.95);"></button>')
}

// on load begin >>>
onload=e=>{
  // add copy btn >>>
  if(!document.getElementsByClassName('copy').length){
    add_copy_btn()
    if(!document.getElementsByClassName('copy').length){
      setTimeout(function(){
        if(!document.getElementsByClassName('copy').length){add_copy_btn()}
        else{
          setTimeout(function(){
            if(!document.getElementsByClassName('copy').length){add_copy_btn()}
            else{
              setTimeout(function(){
                if(!document.getElementsByClassName('copy').length){add_copy_btn()}
              },3e3)
            }
          },3e3)
        }
      },3e3)
    }
  }// add copy btn ^^^

  // search numb format >>>
  document.body.onclick=e=>{
    if(e.target.id=='searchTerm')e.target.select()
    if(e.target.className=='copy'){
      navigator.clipboard.writeText(document.getElementById('ZipCode').value+'\n'+(document.getElementById('n2393619').value.length>3?document.getElementById('n2393619').value.replace(/\D/g,''):'01/01/'+(new Date().getYear()+1900-document.getElementById('n2393583').value))+'\n')
    }
  }// search numb format ^^^

  onmousedown=e=>{
		// NC + wait/hide notif >>>
    if(e.target.tagName=='BUTTON'&&(e.target.innerText=='NC DEFAULT'||e.target.innerText=='No Contact'||e.target.innerText=='OutDefault'||e.target.innerText.includes('Retry '))){
      if(comments.value.length==0||comments.value.slice(0,2)=='NC'&&comments.value.length==2||comments.value.slice(0,3)=='NC '&&comments.value.length<=7||comments.value=='OUT'){
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
  }// NC + wait/hide notif ^^^

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
  })// search numb format ^^^


  // 24 hr btn >>>
  let name_hist=""
  document.body.onmousedown=e=>{
    if(e.target.id=='tcpaShowNumbers'){
      setTimeout(function(){
        document.getElementById('tcpaShowNumbers').click()
        document.getElementsByClassName('notificationButton notificationButtonBlue notifyButton')[0].click()
        document.getElementsByClassName('dialphone')[0].click()
      },100)
    }
  } // 24 hr btn ^^^








} // onload end ^^^


