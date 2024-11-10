// ==UserScript==
// @name         EZ App Pro
// @match        https://ezapp.ushealthgroup.com/QuickQuoteMobile.aspx
// ==/UserScript==

alert("HELLO");

qv=0; // set to 0 for exact Q, set to 1 for private and public Q
B=125; // add price on top of private
l0=45; // lower limit
l1=75; // higher limit

// DO NOT TOUCH ANYTHING BELOW !!!!!
{
    function cq(ct) {
        x = document.getElementsByClassName('qoute_total');
        for (i = 0; i < x.length; i++) {
            if (x[i].innerText.includes('hly P')) q = x[i + 1].innerText.split(' ')[1];
        }
        if (qv == 0) {
            navigator.clipboard.writeText("Alright, I found full health coverage plans, with low deduct/copay, that are starting at $" + Math.round(q) + "/month,\n\nIs that something you would be interested in?");
        }
        (qv == 1 && ct == 0) ? navigator.clipboard.writeText("Happy to help. There are private market options starting in the " + (q.substr(1) < l0 ? 'low' : (q.substr(1) < l1 ? 'mid' : 'high')) + " $" + q[0] + "00's/mo and go up from there! You just have to be relatively healthy to qualify.") : 0;
        if (qv == 1 && ct == 1) {
            q = (q * 1 + B).toString();
            navigator.clipboard.writeText("You also have Obama Care plans starting in the " + (q.substr(1) < l0 ? 'low' : (q.substr(1) < l1 ? 'mid' : 'high')) + " $" + q[0] + "00's/mo and are great for people with major pre-existing conditions. Which market are you leaning towards?");
        }
    }

    oncontextmenu = e => { if (e.target.className == 'orangBtn') e.preventDefault(); };

    // Create and insert the textarea element
    const t = document.createElement('textarea');
    t.id = 'at';
    t.style = 'position:fixed;left:0;top:0;height:50px';
    document.getElementsByClassName('footerContent')[0].after(t);

    // Event listener for selecting text on mouse enter
    t.addEventListener('mouseenter', e => e.target.select());

    // Event listener for pasting text
    t.addEventListener('paste', e => {
        setTimeout(() => {
            const lines = e.target.value.split('\n');
            if (lines.length >= 2) {
                primaryDOB.value = lines[1].replace(/\D/g, '');
                if (primaryDOB.value * 1 < 100) primaryDOB.value = '01/01/' + (2025 - primaryDOB.value);
            }
            if (lines.length === 3 && (lines[2] === 'M' || lines[2] === 'F')) {
                ddlPrimarySex.value = lines[2];
            }
            txtPrimaryW.value = 150;
            if (txtZipCode.value !== lines[0]) {
                txtZipCode.value = lines[0];
                zipCodeChanged();
                Z < 125 ? setTimeout('__doPostBack(\'txtZipCode\',\'\')', 0) : null;
            }
        });
    });

    // Remainder of original code
    ti = setInterval(function () {
        if (UpdateProgress10.style.display == 'none') {
            clearInterval(ti);
            if (ddlAppType.innerText.includes("Fixed Indemnity") && ddlAppType.value != 25) {
                ddlAppType.value = 25;
                getSessionStorageByAppTypeID();
                setTimeout('__doPostBack(\'ddlAppType\',\'\')', 0);
            } else if (ddlAppType.innerText.includes("Premier Choice") && ddlAppType.value != 17) {
                ddlAppType.value = 17;
                getSessionStorageByAppTypeID();
                setTimeout('__doPostBack(\'ddlAppType\',\'\')', 0);
            } else if (ddlAppType.innerText.includes("SecureAdvantage") && ddlAppType.value != 13) {
                ddlAppType.value = 13;
                getSessionStorageByAppTypeID();
                setTimeout('__doPostBack(\'ddlAppType\',\'\')', 0);
            }
        }
    }, 200);
}
