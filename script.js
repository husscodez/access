console.log(1111111)

// create text area
t=document.createElement('textarea');t.id='at'
t.style='position:fixed;left:0;top:0;height:50px'
document.getElementsByClassName('footerContent')[0].after(t)

at.onmouseenter=e=>{
if(e.target.value=='')e.target.select()
}

ddlPrimarySex.onwheel=e=>ddlPrimarySex.value=e.deltaY>0?'F':'M'

function qf(){
setTimeout(function(){
primaryDOB.value=at.value.split('\n')[1].replace(/\D/g,'')
if(at.value.split('\n').length==3&&(at.value.split('\n')[2]=='M'||at.value.split('\n')[2]=='F'))ddlPrimarySex.value=at.value.split('\n')[2]
txtPrimaryW.value=150
if(txtZipCode.value!=at.value.split('\n')[0]){
txtZipCode.value=at.value.split('\n')[0]
zipCodeChanged();setTimeout('__doPostBack(\'txtZipCode\',\'\')', 0)
}
ti=setInterval(function(){
if(UpdateProgress10.style.display=='none'){
clearInterval(ti)
if(ddlAppType.innerText.includes("Fixed Indemnity"))p0()
else if(ddlAppType.innerText.includes("Premier Choice"))p1()
else if(ddlAppType.innerText.includes("Secure Advantage"))p2()
}
},200)
})
}

at.onpaste=e=>{
qf()
}





function p0(){
if(ddlAppType.value!=25){
ddlAppType.value=25
getSessionStorageByAppTypeID();setTimeout('__doPostBack(\'ddlAppType\',\'\')',0)}
ti=setInterval(function(){
if(UpdateProgress10.style.display=='none'){
clearInterval(ti)
tii=setInterval(function(){
if(UpdateProgress10.style.display=='none'){
clearInterval(tii)
document.getElementsByClassName('buttonWrapper')[3].innerHTML='<input type="button" value=Quote class=orangBtn onclick=cq(0) oncontextmenu="cq(1)">'+document.getElementsByClassName('buttonWrapper')[3].innerHTML}},200)
checkPrimaryDOB()
ContinueHomeToPrimary()
ddlPremierAdvantageProduct.value=ddlPremierAdvantageProduct.getElementsByTagName('option')[1].value
ddlPremierAdvantageProduct_SelectedIndexChanged()
continuePrimaryCov()
if(!ddlAssociation.innerText.includes('Select'))ddlAssociation.value=ddlAssociation.getElementsByTagName('option')[ddlAssociation.getElementsByTagName('option').length-1].value
continueOtherCov();__doPostBack('calculateButton','')}},2e2)
}




function p1(){
if(ddlAppType.value!=17){
ddlAppType.value=17
getSessionStorageByAppTypeID();setTimeout('__doPostBack(\'ddlAppType\',\'\')',0)}
ti=setInterval(function(){
if(UpdateProgress10.style.display=='none'){
clearInterval(ti)
tii=setInterval(function(){
if(UpdateProgress10.style.display=='none'){
clearInterval(tii)
document.getElementsByClassName('buttonWrapper')[3].innerHTML='<input type="button" value=Quote class=orangBtn onclick=cq(0) oncontextmenu="cq(1)">'+document.getElementsByClassName('buttonWrapper')[3].innerHTML}},200)
checkPrimaryDOB()
ContinueHomeToPrimary()
ddlFIProduct.value=ddlFIProduct.getElementsByTagName('option')[1].value
ddlFIProduct_SelectedIndexChanged()
ddlPCHWProduct.value=ddlPCHWProduct.getElementsByTagName('option')[0].value
ddlPCHWProduct_SelectedChanged()
continuePrimaryCov()
if(ddlAssociation.value>-1){
ddlAssociation.value=ddlAssociation.getElementsByTagName('option')[ddlAssociation.getElementsByTagName('option').length-1].value}
continueOtherCov();__doPostBack('calculateButton','')}},2e2)
}





function p2(){
if(ddlAppType.value!=13){
ddlAppType.value=13
getSessionStorageByAppTypeID();setTimeout('__doPostBack(\'ddlAppType\',\'\')',0)}
ti=setInterval(function(){
if(UpdateProgress10.style.display=='none'){
clearInterval(ti)
tii=setInterval(function(){
if(UpdateProgress10.style.display=='none'){
clearInterval(tii)
document.getElementsByClassName('buttonWrapper')[3].innerHTML='<input type="button" value=Quote class=orangBtn onclick=cq(0) oncontextmenu="cq(1)">'+document.getElementsByClassName('buttonWrapper')[3].innerHTML}},200)
checkPrimaryDOB()
ContinueHomeToPrimary()
ddlSecAdvSickCoIns.value=ddlSecAdvSickCoIns.getElementsByTagName('option')[ddlSecAdvSickCoIns.getElementsByTagName('option').length-1].value
SecAdvSickCoInsChanged()
ddlSecAdvSickDeduct.value=ddlSecAdvSickDeduct.getElementsByTagName('option')[ddlSecAdvSickDeduct.getElementsByTagName('option').length-1].value
SecAdvSickDeductibleChanged()
ddlSecAdvSickLifetimeMax.value=ddlSecAdvSickLifetimeMax.getElementsByTagName('option')[1].value
ddlSecAdvSickPremiumRateGuaranteePeriod.value=ddlSecAdvSickPremiumRateGuaranteePeriod.getElementsByTagName('option')[1].value
ddlSecAdvPPONetwork.value=10100
SecAdvPPONetworkChanged()
ddlSecAdvAccDeduct.value=ddlSecAdvAccDeduct.getElementsByTagName('option')[ddlSecAdvAccDeduct.getElementsByTagName('option').length-1].value
SecAdvAccDeductChanged()
if(ddlAssociation.value>-1)ddlAssociation.value=ddlAssociation.getElementsByTagName('option')[ddlAssociation.getElementsByTagName('option').length-1].value
continuePrimaryCov()
continueOtherCov();__doPostBack('calculateButton','')}},2e2)
}








console.log(1010101)
