var data = [
  {
    "title":"About The Blog",
    "tags":["General"],
    "revisions":[
      {
        "date":"03/08/2018",
        "time":"8:30 BST",
        "content":"I fancied a programming challenge, so using the framework of this site, MaterializeCSS, alongside technologies such as json and EMCAScript 6 to power the site. You may have already seen this with my infomation page, as all the contact details are held in json and are formatted nicely due to the javascript I've written wrapping them in html. Is this bad practice? More than likely. Do I care? Not really as I know it is probably bad practice as you should keep as many elements in the actual html rather than inserting elements with the DOM(Document Object Model)/javascript. This page was also built using a similar technique, however the constraints are different as opposed to the contact page, as I need to be able to handle revisions/edits as well as referencing/linking and timestamps. \n In other news, I would like to keep this blog updated regularly so we will see how that goes. \n Jack Stevenson (A-Yakkus)",
        "references":[
          {
            "offset":15,
            "start":214,
            "end":229,
            "href":"info.html",
          },
          {
            "offset":15,
            "start":87,
            "end":101,
            "href":"https://www.materializecss.com",
          }

        ]
      }
    ]

  }
]

function load(){
  var root = document.getElementById("content");
  data.forEach(e=>
    {
      var html = "";
      var titleForIds = e.title.replace(/\s/g, "");
      html+="<section class='container grey lighten-3'><div class='row'><h3>"+e.title+"</h3></div>";
      html+="<div class='row'><div class='col s12'>Tags: ";
      e.tags.forEach(e2=>{html+=e2});
      html+="</div></div>";
      html+="<div class='row'><ul id='tabs-"+titleForIds+"' class='tabs'></ul></div><div class='row'><div id='"+titleForIds+"-content'></div></div></section>";
      root.insertAdjacentHTML("afterbegin", html);
      var html2="";
      var tabsObj = document.getElementById("tabs-"+titleForIds);
      e.revisions.forEach((e2, i)=>{
        if(i==(e.revisions.length-1))tabsObj.insertAdjacentHTML("afterbegin", "<li class='tab col'><a href='#"+titleForIds+"-"+(e.revisions.length-i-1)+"' class='black-text darken-4'>latest</a></li>");
        else tabsObj.insertAdjacentHTML("beforeend", "<li class='tab col'><a href='#"+titleForIds+"-"+(e.revisions.length-i-1)+"'>"+(e.revisions.length-i-1)+"</a></li>");
      });
      var contentObj = document.getElementById(titleForIds+"-content");
      e.revisions.forEach((e2,i)=>{
        html2+="<div id="+titleForIds+"-"+(e.revisions.length-i-1)+">";
        html2+="<p>Date:"+e2.date+" - "+e2.time+"</p><p>"+applyReferences(e2)+"</p></div>";
      });
      contentObj.insertAdjacentHTML("afterbegin", html2);
      var instance = M.Tabs.init(tabsObj);
    });
}

function applyReferences(object){
  var ret = object.content;
  ret=ret.replace(/\n/g, "<br/>")
  object.references.forEach(ref=>{
    ret=ret.slice(0, ref.end-ref.offset)+"</a>"+ret.slice(ref.end-ref.offset);
    ret=ret.slice(0, ref.start-ref.offset)+"<a href="+ref.href+" target='_blank'>"+ret.slice(ref.start-ref.offset);
  });
  return ret;
}

load();
