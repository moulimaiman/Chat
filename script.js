
const name = document.getElementById("nam");
var numero , t ;

function infonameview() {
    var naminf = document.getElementById("nameinfo");
    naminf.style.display = "block";
    naminf.style.opacity = "100%";
    changebackg() ;
    delcancel() ;
    hidoptions() ;
    antiadd() ;
}

function infonamehid() {
    var naminf = document.getElementById("nameinfo");
    naminf.style.opacity = "0%";
    setTimeout(function () {
        naminf.style.display = "none";
    }, 2000);
    hidcreatename() ; 
}

function seeoptions() {
    var optioninfo = document.getElementById("seeoption");
    optioninfo.style.width = "270px";
    optioninfo.style.height = "170px";
    optioninfo.style.padding = "5px";
    optioninfo.style.opacity = "100%";
    var optionlist = document.getElementById("listoptions");
    setTimeout(() => {
        optionlist.style.display = "inline-block";
    }, 900);
    changebackg() ;
    delcancel() ;
}

function hidoptions() {
    var optioninfo = document.getElementById("seeoption");
    optioninfo.style.width = "0px";
    optioninfo.style.height = "0px";
    optioninfo.style.padding = "0px";
    optioninfo.style.opacity = "0%";
    var optionlist = document.getElementById("listoptions");
    optionlist.style.display = "none";
}

function infonameviiiew() {
    var naminf = document.getElementById("nameinfo");
    naminf.style.display = "block";
    naminf.style.opacity = "100%";
    setTimeout(hidoptions, 50);
}

function editbackg() {
    setTimeout(hidoptions, 50);
    var backgedit = document.getElementById("colorbackg");
    backgedit.style.width = "300px";
    backgedit.style.padding = "10px";
    backgedit.style.opacity = "100%";
    document.getElementById("spacechbgd").style.display = "inline-block" ; 
}

function changebackg() {
    document.getElementById("messg").style.background = document.getElementById("backgdcolor").value;
    var backgedit = document.getElementById("colorbackg");
    backgedit.style.width = "0px";
    backgedit.style.padding = "0px";
    backgedit.style.opacity = "0%";
    document.getElementById("spacechbgd").style.display = "none" ; 
}

function deletemessg() {
    setTimeout(hidoptions, 50);
    var backgedit = document.getElementById("delmessg");
    backgedit.style.width = "300px";
    backgedit.style.padding = "10px";
    backgedit.style.opacity = "100%";
    document.getElementById("spacedelmessg").style.display = "inline-block" ; 
}

function messgdel() {
    document.getElementById("contentmessg").innerHTML = "" ; 
    var timde = document.getElementById("loadingdel") ; 
    timde.style.height = "0px" ; 
    timde.style.opacity = "0%" ; 
    document.getElementById("spaceloadel").style.display = "none" ; 
}

function messgdelsure() {
    var timde = document.getElementById("loadingdel") ; 
    timde.style.height = "30px" ;
    timde.style.opacity = "100%" ; 
    timde.style.padding = "7px" ;
    document.getElementById("spaceloadel").style.display = "inline-block" ; 
    var backgedit = document.getElementById("delmessg");
    backgedit.style.width = "0px";
    backgedit.style.padding = "0px";
    backgedit.style.opacity = "0%";
    document.getElementById("spacedelmessg").style.display = "none" ;
    t = setTimeout(messgdel,7000) ; 
}

function messgdelcancel() {
    clearTimeout(t) ;
    var timde = document.getElementById("loadingdel") ; 
    timde.style.height = "0px" ; 
    timde.style.opacity = "0%" ; 
    document.getElementById("spaceloadel").style.display = "none" ;  
}

function delcancel() {
    var backgedit = document.getElementById("delmessg");
    backgedit.style.width = "0px";
    backgedit.style.padding = "0px";
    backgedit.style.opacity = "0%";
    document.getElementById("spacedelmessg").style.display = "none" ;
}

function infoproprety() {
    var propretyinfo = document.getElementById("proprety");
    propretyinfo.style.width = "250px";
    propretyinfo.style.height = "40px";
    propretyinfo.style.padding = "5px";
    propretyinfo.style.opacity = "100%";
    document.getElementById("editname").style.display = "block";
    hidcreatename() ;
}

function hidproprety() {
    var propretyinfo = document.getElementById("proprety");
    propretyinfo.style.width = "0px";
    propretyinfo.style.height = "0px";
    propretyinfo.style.padding = "0px";
    propretyinfo.style.opacity = "0%";
    document.getElementById("editname").style.display = "none";
}

function createmessg() {
    var messg = document.getElementById("writemessg").value;
    var mydate = new Date();
    var h = mydate.getHours();
    var m = mydate.getMinutes();
    var s = mydate.getSeconds();
    if (h < 10) { h = "0" + h; }
    if (m < 10) { m = "0" + m; }
    if (s < 10) { s = "0" + s; }
    if (messg == "") { }
    else {
        document.getElementById("contentmessg").innerHTML += "<div class='spacemessg'><div class='messagewrite'> <span class='messageread'> " + messg + " </span><br><span class='hour'>" + h + ":" + m + ":" + s + " </span></div></div>";
        document.getElementById("writemessg").value = "";
        document.getElementById("messg").scrollTop = document.getElementById("contentmessg").scrollHeight;
    }
}

function createmessg1(event) {
    if ( event.keyCode === 13 ) {
        createmessg() ; 
    }
}

function createmessg2() {
    createmessg() ; 
}

function viewoptmessg() {
    document.getElementsByTagName("spaidnum").style.display = "block" ; 
}

function addmessage() {
    var messgadd = document.getElementById("adding");
    var elmntadd = document.getElementById("elemntadd");
    setTimeout(() => {
        elmntadd.style.display = "inline-block";
    }, 1000);
    messgadd.style.height = "200px";
    messgadd.style.width = "300px";
    messgadd.style.opacity = "100%";
}

function antiadd() {
    var messgadd = document.getElementById("adding");
    var elmntadd = document.getElementById("elemntadd");
    elmntadd.style.display = "none";
    messgadd.style.height = "0px";
    messgadd.style.width = "0px";
    messgadd.style.opacity = "0%";
}

function viewdetail() {
    var datainfo = document.getElementById("infodetail");
    datainfo.style.height = "200px";
    datainfo.style.opacity = "100%";
    datainfo.style.padding = "10px";
}

function hidetail() {
    var datainfo = document.getElementById("infodetail");
    datainfo.style.height = "0px";
    datainfo.style.opacity = "0%";
    datainfo.style.padding = "0px";
}

function copiernum() {
    numero = document.getElementById("phoneinfo").value;
}

function namenumberedit() {
    var editnum = document.getElementById("createname");
    editnum.style.width = "270px";
    editnum.style.padding = "10px";
    editnum.style.opacity = "100%";
    document.getElementById("spacecreate").style.display = "inline-block" ; 
}

function hidcreatename() {
    var editnum = document.getElementById("createname");
    editnum.style.width = "0px";
    editnum.style.padding = "0px";
    editnum.style.opacity = "0%";
    document.getElementById("spacecreate").style.display = "none" ; 
}

function editchange() {
    document.getElementById("namepersn").innerHTML = document.getElementById("newname").value;
    document.getElementById("nam").innerHTML = document.getElementById("newname").value;
    document.getElementById("phoneinfo").innerHTML = document.getElementById("newnumber").value;
    hidcreatename() ;
}