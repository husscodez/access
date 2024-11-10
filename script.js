console.log(555)

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
    if(txtZipCode.value!=at.value.split('\n')[0]){
      txtZipCode.value=at.value.split('\n')[0]
      zipCodeChanged();setTimeout('__doPostBack(\'txtZipCode\',\'\')',0)
			ti=setInterval(function(){
				if(UpdateProgress10.style.display=='none'){
					clearInterval(ti)
					if(ddlAppType.innerText.includes("Fixed Indemnity"))p0()
					if(ddlAppType.innerText.includes("Premier Choice"))p1()
					if(ddlAppType.innerText.includes("SecureAdvantage"))p2()
				}
			},50)			
    }
	})
}

function p0(){
	if(ddlAppType.value!=25){
		ddlAppType.value=25
		getSessionStorageByAppTypeID();setTimeout('__doPostBack(\'ddlAppType\',\'\')', 0)
	}
}

function p1(){

}

function p2(){

}

console.log(1010101)
