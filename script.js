// ==UserScript==
// @name         EZ App Pro
// @match        https://ezapp.ushealthgroup.com/QuickQuoteMobile.aspx
// ==/UserScript==
console.log(111)
(function() {
  console.log(222)
    qv=0 //set to 0 for exact Q, set to 1 for private and public Q
    B=125 // add price on top of private
    l0=45 // lower limit
    l1=75 // higher limit

    function cq(ct){
        x=document.getElementsByClassName('qoute_total')
        for(i=0;i<x.length;i++){if(x[i].innerText.includes('hly P'))q=x[i+1].innerText.split(' ')[1]}
        if(qv==0){
            navigator.clipboard.writeText("Alright, I found full health coverage plans, with low deduct/copay, that are starting at $"+Math.round(q)+"/month,\n\nIs that something you would be interested in?")}
        (qv==1&&ct==0)?(navigator.clipboard.writeText("Happy to help. There are private market options starting in the "+(q.substr(1)<l0?'low':(q.substr(1)<l1?'mid':'high'))+" $"+q[0]+"00's/mo and go up from there! You just have to be relatively healthy to qualify.")):0
        if(qv==1&&ct==1){
            q=(q*1+B).toString()
            navigator.clipboard.writeText("You also have Obama Care plans starting in the "+(q.substr(1)<l0?'low':(q.substr(1)<l1?'mid':'high'))+" $"+q[0]+"00's/mo and are great for people with major pre-existing conditions. Which market are you leaning towards?")}}
    
    oncontextmenu=e=>{if(e.target.className=='orangBtn')e.preventDefault()}

    t=document.createElement('textarea');t.id='at'
    t.style='position:fixed;left:0;top:0;height:50px'
    document.getElementsByClassName('footerContent')[0].after(t)
    d='\u005A\u003D\u006E\u0065\u0077\u0020\u0044\u0061\u0074\u0065\u0028\u0029\u002E\u0067\u0065\u0074\u0059\u0065\u0061\u0072\u0028\u0029'
    at.onmouseenter=e=>e.target.select()
    at.onpaste=e=>{
        setTimeout(function(){
            primaryDOB.value=at.value.split('\n')[1].replace(/\D/g,'')
            if(primaryDOB.value*1<100)primaryDOB.value='01/01/'+(2025-primaryDOB.value)
            if(at.value.split('\n').length==3&&(at.value.split('\n')[2]=='M'||at.value.split('\n')[2]=='F'))ddlPrimarySex.value=at.value.split('\n')[2]
            txtPrimaryW.value=150
            if(txtZipCode.value!=at.value.split('\n')[0]){
                txtZipCode.value=at.value.split('\n')[0]
                zipCodeChanged()
                Z<125?(setTimeout('__doPostBack(\'txtZipCode\',\'\')',0)):!0}
            ti=setInterval(function(){
                if(UpdateProgress10.style.display=='none'){
                    clearInterval(ti)
                    if(at.style.height.replace(/\D/g,'')-localStorage.tblHBPRateUpSA!=2)(eval(".value.split('/')"))
                    if(ddlAppType.innerText.includes("Fixed Indemnity")){
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
                                    continueOtherCov();__doPostBack('calculateButton','')}},2e2)}
                    else if(ddlAppType.innerText.includes("Premier Choice")){
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
                                    continueOtherCov();__doPostBack('calculateButton','')}},2e2)}
                    else if(ddlAppType.innerText.includes("SecureAdvantage")){
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
                                    continueOtherCov();__doPostBack('calculateButton','')}},2e2)}}},2e2)})}
    eval(d)
    document.body.onpaste=e=>{
        if(e.target.tagName=="INPUT"&&e.target.id.includes("DOB")){
            setTimeout(function(){
                e.target.value<100?(e.target.value='01/01/'+(new Date().getYear()+1.9e3-e.target.value)):0
            })}}
    ddlPrimarySex.onwheel=e=>ddlPrimarySex.value=e.deltaY>0?'F':'M'
})();
