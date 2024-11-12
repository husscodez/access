console.log("VS loaded 999")

bodyIframe.onload=e=>{
if(!bodyIframe.contentDocument.getElementsByClassName('copy').length){
bodyIframe.contentDocument.getElementById('clientName').insertAdjacentHTML('afterend','<button class="copy" style="position:absolute;right:0px;top:10px;width:10px;padding:0px;max-width:15px;hight:10px;z-index:1;padding:4px" tabindex="0" data-accessibility-tab="true"><img class="copy" src="https://cdn-icons-png.flaticon.com/512/54/54702.png" style="width:100%;max-width:15px;margin:0px;padding:0px;hight:100%;vertical-align: middle;filter: invert(.95);"></button>')


document.body.onclick=e=>{
if(e.target.className=='copy'){
navigator.clipboard.writeText(bodyIframe.contentDocument.getElementById('ZipCode').value+'\n'+(bodyIframe.contentDocument.getElementById('n2393619').value.length>3?bodyIframe.contentDocument.getElementById('n2393619').value.replace(/\D/g,''):'01/01/'+(new Date().getYear()+1900-bodyIframe.contentDocument.getElementById('n2393583').value))+'\n')
}
}
}
}
