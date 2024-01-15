const name = document.getElementById("nam");
var numero;

function infonameview() {
    var naminf = document.getElementById("nameinfo");
    naminf.style.display = "block";
    naminf.style.opacity = "100%";
}

function infonamehid() {
    var naminf = document.getElementById("nameinfo");
    naminf.style.opacity = "0%";
    setTimeout(function () {
        naminf.style.display = "none";
    }, 2000);
}

function seeoptions() {
    var optioninfo = document.getElementById("seeoption");
    optioninfo.style.width = "250px";
    optioninfo.style.height = "400px";
    optioninfo.style.padding = "5px";
    optioninfo.style.opacity = "100%";
    var optionlist = document.getElementById("listoptions");
    optionlist.style.display = "block";

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
    document.getElementById("butchangebackg").style.display = "block";
    document.getElementById("backgdcolor").style.display = "block";
}

function changebackg() {
    document.getElementById("messg").style.background = document.getElementById("backgdcolor").value;
    var backgedit = document.getElementById("colorbackg");
    backgedit.style.width = "0px";
    backgedit.style.padding = "0px";
    backgedit.style.opacity = "0%";
    document.getElementById("butchangebackg").style.display = "none";
    document.getElementById("backgdcolor").style.display = "none";
}

function infoproprety() {
    var propretyinfo = document.getElementById("proprety");
    propretyinfo.style.width = "250px";
    propretyinfo.style.height = "150px";
    propretyinfo.style.padding = "5px";
    propretyinfo.style.opacity = "100%";
    document.getElementById("editname").style.display = "block";
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
    var file = document.getElementById("addfile").value;
    var mydate = new Date();
    var h = mydate.getHours();
    var m = mydate.getMinutes();
    if (h < 10) { h = "0" + h; }
    if (m < 10) { m = "0" + m; }
    if (messg == "") {
        if (file == "") { }
        else {
            document.getElementById("contentmessg").innerHTML += "<div class='messagewrite'> <img src='" + file + "' alt='image'><br><span class='hour'>" + h + " : " + m + " </span> </div>";
        }
    }
    else {
        document.getElementById("contentmessg").innerHTML += "<div class='messagewrite'> <span class='messageread'> " + messg + " </span><br><span class='hour'>" + h + " : " + m + " </span> </div>";
        document.getElementById("writemessg").value = "";
    }
}

function addmessage() {
    var messgadd = document.getElementById("adding");
    var elmntadd = document.getElementById("elemntadd");
    elmntadd.style.display = "block";
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
    var numero = document.getElementById("phoneinfo").value;
}

function namenumberedit() {
    var editnum = document.getElementById("createname");
    editnum.style.width = "230px";
    editnum.style.padding = "10px";
    editnum.style.opacity = "100%";
    document.getElementById("newname0").style.display = "block";
    document.getElementById("newnumber0").style.display = "block";
    document.getElementById("newname").style.display = "block";
    document.getElementById("newnumber").style.display = "block";
    document.getElementById("butchangen").style.display = "block";
}

function hidcreatename() {
    var editnum = document.getElementById("createname");
    editnum.style.width = "0px";
    editnum.style.padding = "0px";
    editnum.style.opacity = "0%";
    document.getElementById("newname0").style.display = "none";
    document.getElementById("newnumber0").style.display = "none";
    document.getElementById("newname").style.display = "none";
    document.getElementById("newnumber").style.display = "none";
    document.getElementById("butchangen").style.display = "none";
}

function editchange() {
    document.getElementById("namepersn").innerHTML = document.getElementById("newname").value;
    document.getElementById("nam").innerHTML = document.getElementById("newname").value;
    document.getElementById("phoneinfo").innerHTML = document.getElementById("newnumber").value;
}