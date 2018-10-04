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
  {//linked In
    name:"LinkedIn",
    type:["Business"],
    link:["https://www.linkedin.com/in/jack-stevenson-494733152"]
]

function load(){
  var tabsObj = document.getElementById("types");
  var contentObj = document.getElementById("holder");
  var tabTitles = [];
  data.forEach(el=>{
    el.type.forEach(e =>{
      if(!tabTitles.includes(e))
        tabTitles.push(e)
    })
  });
  var html = html2 = "";
  tabTitles.forEach(e=>{
    html+="<li class='tab col s1'><a href=#"+e+" class='black-text darken-4'>"+e+"</a></li>";
    html2+="<div id="+e+" class='col s12 overflow'><div class='row'></div></div>";
  });
  tabsObj.insertAdjacentHTML("afterbegin", html);
  contentObj.insertAdjacentHTML("afterbegin", html2);
  var instance = M.Tabs.init(tabsObj, {swipeable:true});
  html="";
  data.forEach(e=>{
    e.type.forEach(e2=>{
      document.getElementById(e2).firstElementChild.insertAdjacentHTML("beforeend", buildDiv(e))
    })
  });
}

function buildDiv(object){
  var ret = "";
  ret+="<div class='col s12 l6 "+ object.name +"' style='min-height:150px'><h5>"+object.name+"</h5>";
  if(!(object.info=="undefined"||object.info==null)) ret+="<p>"+object.info+"</p>";
  ret+="<p>Available at:<br/>";
  for(var i in object.link){
    if(object.link[i].includes("https")) ret+="<a href="+object.link[i]+" target='_blank'>"+object.link[i]+"</a><br/>";
    else ret+=object.link[i]+"<br/>";
  }
  ret+="</p>";
  ret+="</div>";
  return ret;
}

load();
