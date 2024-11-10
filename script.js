console.log(1)

// create text area
t=document.createElement('textarea');t.id='at'
t.style='position:fixed;left:0;top:0;height:50px'
document.getElementsByClassName('footerContent')[0].after(t)

t.onpaste=e=>{
  setTimeout(function(){
    primaryDOB.value=at.value.split('\n')[1].replace(/\D/g,'')
      if(primaryDOB.value*1<100)primaryDOB.value='01/01/'+(2025-primaryDOB.value)
      if(at.value.split('\n').length==3&&(at.value.split('\n')[2]=='M'||at.value.split('\n')[2]=='F'))ddlPrimarySex.value=at.value.split('\n')[2]
      txtPrimaryW.value=150
  })
}

console.log(1010101)
