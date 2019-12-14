var movies = [{"name":"title","desc":"description","rank":5},{"name":"title","desc":"description","rank":5},{"name":"title","desc":"description","rank":5},{"name":"title","desc":"description","rank":5},{"name":"title","desc":"description","rank":5},{"name":"title","desc":"description","rank":5},{"name":"title","desc":"description","rank":5},{"name":"title","desc":"description","rank":5},{"name":"title","desc":"description","rank":5}];
var itemsLength = 0;






function lists(){
    //the event occurred
    var h1 = document.getElementById("headPromo");
    var ul = document.getElementsByClassName("ul-wrapper")[0];
    ul.innerHTML =""; 
    h1.innerHTML =""; 
    
    var moblieList = document.getElementById("mobile");
    var deskList = document.getElementById("desktop");
    if(window.innerWidth < 700){
        console.log("small");
        h1.innerHTML ="2 ספרים דיגיטליים כל חודש"; 
        moblieList.style.display = "";
        deskList.style.display = "none";
        itemsLength = 6
        
    }else if(window.innerWidth > 700){ 
        h1.innerHTML =" 2 ספרים דיגיטליים <br>כל חודש"
        console.log("big");
        itemsLength = movies.length;
        moblieList.style.display = "none";
        deskList.style.display = "";
    }

    

    for( var i = 0; i < itemsLength; i++ )
    { 
        o = movies[i];
        var li = document.createElement("li");
        //create li children elments
        var div = document.createElement("div");
        div.className="item-wrapper dev";

        childDiv = document.createElement("div");
        h5 = document.createElement("h5");
        var textnode = document.createTextNode(o.name); 
        h5.appendChild(textnode);
        var textnode = document.createTextNode(o.desc); 
        p = document.createElement("p");
        p.appendChild(textnode);
        var textnode = document.createTextNode("watch"); 
        button = document.createElement("button");
        button.className="play";
        button.appendChild(textnode);
        childDiv.appendChild(h5);
        childDiv.appendChild(p); 
        childDiv.className="item-text-wrapper";   
        childDiv.appendChild(button);

        var img = document.createElement("img");
        img.src="https://via.placeholder.com/150";
        img.className = "item-wrapper-image";

        div.appendChild(img);
        div.appendChild(childDiv);
       
        li.appendChild(div);
       
        ul.appendChild(li);    
        
    }  
}

function SVGgenerator(){
    //remove all ids with hyphan ya newb mofo;
    
    
    var elm = document.getElementById('bannerPromo');
    var svg = document.getElementById('mobileSvgPath');
    //elm.style.position = 'absolute';
    //elm.classNameclassList.add('banner-promo');

    
    console.log(elm.offsetLeft, elm.offsetTop, elm.offsetWidth,elm.offsetHeight);
   

    if(window.innerWidth < 700){
        var path = "M " + "0" + " " + '0' + " Q  " + (elm.offsetWidth/2).toString() +" "+ (elm.offsetTop*0.2).toString() +" "+  elm.offsetWidth + ' ' + '0 L ' + elm.offsetWidth + ' ' + elm.offsetHeight +' L ' + '0 ' + elm.offsetHeight + ' L 0 0' ;  
    }else{
        var path = "M " + (elm.offsetWidth*0.20).toString() + " 0 " + 'Q ' + (elm.offsetWidth*0.150).toString() + ' ' + (elm.offsetWidth/2).toString() + ' 0' + ' ' + elm.offsetHeight + ' L ' + elm.offsetWidth + ' ' + elm.offsetHeight + ' L ' + elm.offsetWidth + ' 0 L ' + (elm.offsetWidth/2).toString() + ' 0';    ;

    }
    console.log(path);

    svg.setAttribute('d',path)
   
}


window.addEventListener('DOMContentLoaded', SVGgenerator);
window.addEventListener('DOMContentLoaded', lists);
window.addEventListener('resize', lists);
window.addEventListener('resize', SVGgenerator);
window.addEventListener("orientationchange", SVGgenerator);
window.addEventListener("orientationchange", lists);