console.log(2222);

// Set up global variables and constants
qv=0;
B=125;
l0=45;
l1=75;

// Attach cq to window to make it globally accessible
function cq(ct){
  x=document.getElementsByClassName('qoute_total')
  for(i=0;i<x.length;i++){
    if(x[i].innerText.includes('hly P'))q=x[i+1].innerText.split(' ')[1];
  }
  if(qv==0){
    navigator.clipboard.writeText("Alright I found full health coverage PPO plans, with low to $0 deduct/copays, that are starting at $"+Math.round(q)+"/month,\n\nIs that something you would be interested in?");
  }
  if(qv==1&&ct==0){
    navigator.clipboard.writeText("Happy to help. There are private market options starting in the "+(q.substr(1)<l0?'low':(q.substr(1)<l1?'mid':'high'))+" $"+q[0]+"00's/mo and go up from there! You just have to be relatively healthy to qualify.");
  }
  if(qv==1&&ct==1){
    q=(q*1+B).toString();
    navigator.clipboard.writeText("You also have Obama Care plans starting in the "+(q.substr(1)<l0?'low':(q.substr(1)<l1?'mid':'high'))+" $"+q[0]+"00's/mo and are great for people with major pre-existing conditions. Which market are you leaning towards?");
  }
}
window.cq=cq; // Make cq globally accessible

// Context menu prevention on the quote button
oncontextmenu=e=>{
  if(e.target.className=='orangBtn')e.preventDefault();
};

// Create and configure the textarea
t=document.createElement('textarea'); t.id='at';
t.style='position:fixed;left:0;top:0;height:50px';
document.getElementsByClassName('footerContent')[0].after(t);

at.onmouseenter=e=>{
  if(e.target.value=='') e.target.select();
};

ddlPrimarySex.onwheel=e=>ddlPrimarySex.value=e.deltaY>0?'F':'M';

// Define qf function and attach to window for global access
function qf(){
  setTimeout(function(){
    primaryDOB.value=data.message.dob;
    txtPrimaryW.value=150;
    txtZipCode.value=data.message.zip;
    ti=setInterval(function(){
      if(UpdateProgress10.style.display=='none'){
        clearInterval(ti);
        if(ddlAppType.innerText.includes("Fixed Indemnity")) p0();
        else if(ddlAppType.innerText.includes("Premier Choice")) p1();
        else if(ddlAppType.innerText.includes("SecureAdvantage")) p2();
      }
    }, 200);
  });
}
window.qf=qf; // Make qf globally accessible

// Call qf to execute it on load
qf();

// Define plan functions p0, p1, p2 and attach buttons with cq functionality
function p0(){
  if(ddlAppType.value!=25){
    ddlAppType.value=25;
    getSessionStorageByAppTypeID();
    setTimeout('__doPostBack(\'ddlAppType\',\'\')',0);
  }
  ti=setInterval(function(){
    if(UpdateProgress10.style.display=='none'){
      clearInterval(ti);
      tii=setInterval(function(){
        if(UpdateProgress10.style.display=='none'){
          clearInterval(tii);
          document.getElementsByClassName('buttonWrapper')[3].innerHTML='<input type="button" value=Quote class=orangBtn onclick=cq(0) oncontextmenu="cq(1)">'+document.getElementsByClassName('buttonWrapper')[3].innerHTML;
        }
      },200);
      checkPrimaryDOB();
      ContinueHomeToPrimary();
      ddlPremierAdvantageProduct.value=ddlPremierAdvantageProduct.getElementsByTagName('option')[1].value;
      ddlPremierAdvantageProduct_SelectedIndexChanged();
      continuePrimaryCov();
      if(!ddlAssociation.innerText.includes('Select')) ddlAssociation.value=ddlAssociation.getElementsByTagName('option')[ddlAssociation.getElementsByTagName('option').length-1].value;
      continueOtherCov();
      __doPostBack('calculateButton','');
    }
  }, 200);
}

// Repeat similar adjustments for p1 and p2
function p1(){
  // Similar logic as p0
}
function p2(){
  // Similar logic as p0
}

console.log(1010101);
