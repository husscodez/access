console.log("EZ loaded !!")


onload=e=>{
  console.log(localStorage)
convertDate=date=>date.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/,(m,d,mth,y)=>`${d.padStart(2,'0')}/${mth.padStart(2,'0')}/${y.length==2?'20'+y:y}`)


// quote button start

qv=0 //set to 0 for exact Q, set to 1 for private and public Q
B=125 // add price on top of private
l0=45 // lower limit
l1=75 // higher limit

function cq(ct){
x=document.getElementsByClassName('qoute_total')
for(i=0;i<x.length;i++){
if(x[i].innerText.includes('hly P'))q=x[i+1].innerText.split(' ')[1]
}
if(qv==0){
navigator.clipboard.writeText("Alright I found full health coverage PPO plans, with low deduct/copays, that are starting at $"+Math.round(q)+"/month,\n\nIs that something you would be interested in?")
}
if(qv==1&&ct==0){
navigator.clipboard.writeText("Happy to help. There are private market options starting in the "+(q.substr(1)<l0?'low':(q.substr(1)<l1?'mid':'high'))+" $"+q[0]+"00's/mo and go up from there! You just have to be relatively healthy to qualify.")
}
if(qv==1&&ct==1){
q=(q*1+B).toString()
navigator.clipboard.writeText("You also have Obama Care plans starting in the "+(q.substr(1)<l0?'low':(q.substr(1)<l1?'mid':'high'))+" $"+q[0]+"00's/mo and are great for people with major pre-existing conditions. Which market are you leaning towards?")
}
}
window.cq=cq

oncontextmenu=e=>{
if(e.target.className=='orangBtn')e.preventDefault()
}
// quote button end




// create text area
t=document.createElement('textarea');t.id='at'
th=document.createElement('textarea');th.id='ath'
t.style='position:fixed;left:0;top:0;width:100px;height:50px'
th.style='position:fixed;left:0;top:50px;width:100px;height:50px;display:none'
t.setAttribute('onmouseenter','this.select()')
th.setAttribute('onmouseenter','this.select()')
document.getElementsByClassName('footerContent')[0].after(t)
document.getElementsByClassName('footerContent')[0].after(th)

ddlPrimarySex.onwheel=e=>ddlPrimarySex.value=e.deltaY>0?'F':'M'

function qf(){
setTimeout(function(){
  if(at.value.split('\n')[0]==''||at.value.split('\n')[1]==''){
    alert("Missing some info...")
    return false;
  }
bdv=convertDate(at.value.split('\n')[1].replace(/\D/g,''))
if(bdv.split(/\D/)[2]<50)bdv=bdv.split(/\D/)[0]+'/'+bdv.split(/\D/)[1]+'/20'+bdv.split(/\D/)[2]
else if(bdv.split(/\D/)[2]<100)bdv=bdv.split(/\D/)[0]+'/'+bdv.split(/\D/)[1]+'/19'+bdv.split(/\D/)[2]
primaryDOB.value=bdv
if(at.value.split('\n').length==3&&(at.value.split('\n')[2].toUpperCase()=='M'||at.value.split('\n')[2].toUpperCase()=='F'))ddlPrimarySex.value=at.value.split('\n')[2]
txtPrimaryW.value=150
if(txtZipCode.value!=at.value.split('\n')[0]){
txtZipCode.value=at.value.split('\n')[0]
zipCodeChanged();setTimeout('__doPostBack(\'txtZipCode\',\'\')', 0)
}
ti=setInterval(function(){
if(UpdateProgress10.style.display=='none'){
clearInterval(ti)
if((new Date().getYear()/10+'').split('.')[1]){
if(ddlAppType.innerText.includes("Fixed Indemnity"))p0()
else if(ddlAppType.innerText.includes("Premier Choice"))p1()
else if(ddlAppType.innerText.includes("SecureAdvantage"))p2()
}
}
},200)
})
}

at.onpaste=e=>{
qf()
}
atvh=''
setInterval(function(){
if(ath.value!=atvh){
  at.value=ath.value
  qf()
  atvh=ath.value
}
},200)


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



console.log("EZ end")

}
