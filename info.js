var data = [
  {//email
    name:"Email",
    type:["Business","Casual"],
    link:["jack.stevenson9001@gmail.com"],
    icon:"email"
  },
  {//phone
    name:"Phone",
    type:["Business"],
    link:["07979 227 223"],
    icon:"phone"
  },
  {//skype
    name:"Skype",
    type:["Casual","Social"],
    link:["theyakattheendoftheuniverse", "jack.stevenson9001@gmail.com"]
  },
  {//Facebook
    name:"Facebook",
    type:["Social"],
    link:["https://www.facebook.com/jack.stevenson.1656"]
  },
  {//twitter
    name:"Twitter",
    type:["Social"],
    link:["https://twitter.com/a_yakkus"]
  },
  {//Discord
    name:"Discord",
    type:["Social","Gaming"],
    link:["A_Yakkus#6078"]
  },
  {//Github
    name:"Github",
    type:["Business"],
    link:["https://github.com/a_yakkus"]
  },
  {//MAL
    name:"MyAnimeList",
    type:["Hobby"],
    link:["https://myanimelist.net/profile/A_Yakkus"]
    //info:"Service is temporarily disabled by the company."
  }
]

var root = document.getElementById("contactRoot");

function load(){
  var types = [];
  //var display = new Map([String, String]);
  var disp = [];

  for(var i in data){
    var object=data[i];
    /*for(var j in object.type){
      if(!types.includes(object.type[j])){
        types.push(object.type[j]);
        display.set(object.type[j], buildDiv(object));

      }
    }//*/
    disp.push(buildDiv(object));
  }
  var html = "";
  var liClass="\'tab col s"+Math.floor(types.length/12)+"\'"
  html+="<div class='row'>"
  /*html+="<div class='col s12'><ul id='tabList' class='tabs'>";
  for(var i in types){
    html+="<li class="+liClass+"><a href=#"+types[i]+">"+types[i]+"</a></li>";
  }
  //html+="</ul></div>";*/
  /*for(let [key, value] of display){
    html+=value;
  }*/
  for(var i in disp){
    html+=disp[i];
  }
  html+="</div>"
  root.innerHTML+=html;
}

function load2(){
  var tabsObj = document.getElementById("types");
  var contentObj = document.getElementById("holder");
  var tabTitles = [];
  data.forEach(function(element){
    element.type.forEach(function(e){
      if(!tabTitles.includes(e))
        tabTitles.push(e);
      }
    );
  });
  var html = "";
  var html2 = "";
  tabTitles.forEach(function(e){
    html+="<li class='tab col s1'><a href=#"+e+" class='black-text darken-4'>"+e+"</a></li>";
    html2+="<div id="+e+" class='col s12 overflow'><div class='row'></div></div>";
  });
  tabsObj.insertAdjacentHTML("afterbegin", html);
  contentObj.insertAdjacentHTML("afterbegin", html2);
  var instance = M.Tabs.init(tabsObj, {swipeable:true});
  html="";
  data.forEach(function(e){
    e.type.forEach(function(e2){
      document.getElementById(e2).firstElementChild.insertAdjacentHTML("beforeend", buildDiv(e));
    });
  });
}

function buildDiv(object){
  var ret = "";
  ret+="<div id="+object.name+" class='col s12 l6'><h5>"+object.name;
  ret+="</h5>";
  if(!(object.info=="undefined"||object.info==null)) ret+="<p>"+object.info+"</p>";
  ret+="<p>Available at:<br/>";
  for(var i in object.link){
    if(object.link[i].includes("https")) ret+="<a href="+object.link[i]+" target='_new'>"+object.link[i]+"</a><br/>";
    else ret+=object.link[i]+"<br/>";
  }
  ret+="</p>";
  ret+="</div>";
  return ret;
}

load2();
