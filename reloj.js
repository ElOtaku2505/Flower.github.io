let m=document.getElementById("con1");
let m2=document.getElementById("con2");
let m3=document.getElementById("con3");
let m4=document.getElementById("con4");
(function(){

    function verhora(){
    let f=new Date();
    let h=f.getHours();
    let mi=f.getMinutes();
    let s=f.getSeconds();
    let a="";
    let a1="";
    if(f.getHours()>=12){
        h=f.getHours()-12;
        if(h>=7){
            a1=' Buenas noches <i class="fa-regular fa-moon"></i><br>';
        }else{
            a1=' Buenas tardes <i class="fa-solid fa-sun"></i><br>';   
        }
        a="p.m.";
    }else{
        a1=' Buenos días <i class="fa-regular fa-sun"></i><br>';
        a="a.m.";
    }

    if(h < 10 && mi < 10 && s < 10){
        m.innerHTML=`${a1} <br> 0${h} : 0${mi} : 0${s} ${a}`;
    }
    else if(h < 10){

        if(s<10){
            m.innerHTML=`${a1} <br> 0${h} : ${mi} : 0${s} ${a}`;
        }else if(mi < 10){
            if(s < 10){
                m.innerHTML=`${a1} <br> 0${h} : 0${mi} : 0${s} ${a}`;
            }
           m.innerHTML=`${a1} <br> 0${h} : 0${mi} : ${s} ${a}`;
        }else{
            m.innerHTML=`${a1} <br> 0${h} : ${mi} : ${s} ${a}`;
        }
    }
    if(h > 10){

        if(s<10){

            if( mi < 10 ){

                m.innerHTML=`${a1} <br> ${h} : 0${mi} : 0${s} ${a}`;

            }else{
                
                m.innerHTML=`${a1} <br> ${h} : ${mi} : 0${s} ${a}`;
            }
        }else if(mi < 10){

            if(s < 10){

                m.innerHTML=`${a1} <br> ${h} : 0${mi} : 0${s} ${a}`;

            }

           m.innerHTML=`${a1} <br> ${h} : 0${mi} : ${s} ${a}`;

        }else{

            m.innerHTML=`${a1} <br> ${h} : ${mi} : ${s} ${a}`;
        }
    }

    let an=f.getFullYear();
    let diaS=f.toLocaleString('es', {weekday:'long'});
    let mesA=f.toLocaleString('es', {month:'long'});
    m2.innerHTML=`${diaS}`;
    m3.innerHTML=` ${mesA}`;
    m4.innerHTML=`${an}`;

}

setInterval(verhora,1000);

}());
