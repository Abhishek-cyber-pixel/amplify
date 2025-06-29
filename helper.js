let play=document.querySelector("#spans");
let pause=document.querySelector("#span");
let all=document.querySelector(".all");
let like=document.querySelector("#like");
let likes=document.querySelector("#likes");
let count=document.querySelector(".black");
let counts=document.querySelector(".blacks");
let auto=document.querySelector("#aaye-haye-3");
let auto2=document.querySelector("#aaye-haye-4");
let auto3=document.querySelector("#aaye-haye-5");
let auto4=document.querySelector("#aaye-haye-6");
let auto5=document.querySelector("#aaye-haye-7");
let auto6=document.querySelector("#aaye-haye-8");
let auto7=document.querySelector("#aaye-haye-9");
let colour=document.querySelector(".ksong");
let colour2=document.querySelector(".ksong-2");
let colour3=document.querySelector(".ksong-3");
let colour4=document.querySelector(".ksong-4");
let colour5=document.querySelector(".ksong-5");
let colour6=document.querySelector(".ksong-6");
let colour7=document.querySelector(".ksong-7");
let follow=document.querySelector("#dots");
let menu=document.querySelector(".menu");
let cross2=document.querySelector(".cross2");
let menu2=document.querySelector(".menu-2");
let menu3=document.querySelector(".menu3");
let sett=document.querySelector(".sett-2");
let sett2=document.querySelector(".sett-3");
let sett3=document.querySelector(".sett-4");
let sett4=document.querySelector(".sett-5");
let sett5=document.querySelector(".sett-6");
let sett6=document.querySelector(".sett-7");
let sett7=document.querySelector(".sett-8");
let gif=document.querySelector(".gif");
let gif2=document.querySelector(".gif-2");
let gif3=document.querySelector(".gif-3");
let gif4=document.querySelector(".gif-4");
let gif5=document.querySelector(".gif-5");
let gif6=document.querySelector(".gif-6");
let gif7=document.querySelector(".gif-7");
let countz=78932;
let number=0;
let number2=0;
let number3=0;
let number4=0;
let number5=0;
let number6=0;
let number7=0;
let marks=0;
gif.style.display="none";
gif2.style.display="none";
gif3.style.display="none";
gif4.style.display="none";
gif5.style.display="none";
gif6.style.display="none";
gif7.style.display="none";
let i=0;

let music=[auto,auto2,auto3,auto4,auto5,auto6,auto7];
follow.addEventListener("click",()=>
   {      if(i==0 ){
      menu.style.bottom="0px ";
      i++;
      console.log(i)
}  
      else{
         menu.style.top="350px ";
         i--;
         console.log(i)
       } 
            })
   cross2.addEventListener("click",()=>{
      menu.style.bottom="-350px ";
      i--;
      console.log(i);   
             })  
             

let pauses=pause.style.display="none";
play.addEventListener("click",()=>{
    play.style.display="none";
    pause.style.display="";
    for (i=0;i<music.length;){
    gif.style.display="";
    colour.style.color="green";
      music[i].play().addEventListener("ended",()=>{
         i++;
      });
    }
}
)
let j=0;
pause.addEventListener("click",()=>{
    pause.style.display="none";
    play.style.display="";
    auto.pause();
    colour.style.color="white";
        auto3.pause();
        auto2.pause();
        auto4.pause();
        auto5.pause();
        auto6.pause();
        auto7.pause();
        gif.style.display="none";
gif2.style.display="none";
gif3.style.display="none";
gif4.style.display="none";
gif5.style.display="none";
gif6.style.display="none";
gif7.style.display="none";

        colour3.style.color="white";
        colour2.style.color="white";
        colour4.style.color="white";
        colour5.style.color="white";
        colour6.style.color="white";
        colour7.style.color="white";
    

})

let likess=likes.style.display="none";
like.addEventListener("click",()=>{
    like.style.display="none";
    likes.style.display="";
    let ans= countz+1;
    let liker=count.innerText=(ans);
    console.log(liker);
    
})
likes.addEventListener("click",()=>{
    likes.style.display="none";
    like.style.display="";
    let answer=countz;
    counts.innerText=(answer);   
})
 
sett.addEventListener("click",()=>{
    if(auto.play()){
        auto.pause();
        colour.style.color="white";
         }
           else{
        pause.style.display="";
        play.style.display="none";
        auto.play();
        colour.style.color="white";
        
           }
   
    if(number==1){
    auto3.pause();
       auto2.pause();
        auto4.pause();
        auto5.pause();
        auto6.pause();
        auto7.pause();
        auto.pause();
        colour3.style.color="white";
        colour2.style.color="white";
        colour4.style.color="white";
        colour5.style.color="white";
        colour6.style.color="white";
        colour7.style.color="white";
        pause.style.display="none";
        play.style.display="";
        gif.style.display="none";
    colour.style.color="grey";
    number=0;
    console.log(number);
   }
   else{
    auto.play();
    gif.style.display="";
        auto3.pause();
        auto4.pause();
        auto5.pause();
        auto6.pause();
        auto7.pause();
        auto2.pause();
        number2=0;
        number3=0;
        number4=0;
        number5=0;
        number6=0;
        number7=0;
        
gif2.style.display="none";
gif3.style.display="none";
gif4.style.display="none";
gif5.style.display="none";
gif6.style.display="none";
gif7.style.display="none";

        colour2.style.color="white";
        colour3.style.color="white";
        colour4.style.color="white";
        colour5.style.color="white";
        colour6.style.color="white";
        colour7.style.color="white";
        play.style.display="none";
       pause.style.display="";
    colour.style.color="green";
    number=1;
    console.log(number);
   }


 })


 sett2.addEventListener("click",()=>{
    if(auto2.play()){
        auto2.pause();
        colour2.style.color="white";
         }
           else{
        pause.style.display="none";
        play.style.display="";
        auto2.play();
        colour2.style.color="white";
        
           }
   
    if(number2==1){
        gif2.style.display="none";
        colour2.style.color="grey";
     auto.pause();
        auto2.pause();
        auto3.pause();
        auto4.pause();
        auto5.pause();
        auto6.pause();
        auto7.pause();
        colour.style.color="white";
        colour3.style.color="white";
        colour4.style.color="white";
        colour5.style.color="white";
        colour6.style.color="white";
        colour7.style.color="white";
        pause.style.display="none";
       play.style.display="";
     number2=0;
     console.log(number2);

    }
    else{
    gif2.style.display="";
     play.style.display="none";
     pause.style.display="";
     auto2.play();
        auto.pause();
        auto3.pause();
        auto4.pause();
        auto5.pause();
        auto6.pause();
        auto7.pause();
        number=0;
        number3=0;
        number4=0;
        number5=0;
        number6=0;
        number7=0;
        gif.style.display="none";
gif3.style.display="none";
gif4.style.display="none";
gif5.style.display="none";
gif6.style.display="none";
gif7.style.display="none";

        colour.style.color="white";
        colour3.style.color="white";
        colour4.style.color="white";
        colour5.style.color="white";
        colour6.style.color="white";
        colour7.style.color="white";
     colour2.style.color="green";
     number2=1;
     console.log(number2)
    }
 })

 
 sett3.addEventListener("click",()=>{
    if(auto3.play()){
        auto3.pause();
        colour3.style.color="white";
        
         }
           else{
        auto3.play();
        colour3.style.color="white";
        }
    if(number3==1){
        gif3.style.display="none"; 
        auto3.pause();
        auto2.pause();
        auto4.pause();
        auto5.pause();
        auto6.pause();
        auto7.pause();
        auto.pause();
        colour.style.color="white";
        colour2.style.color="white";
        colour4.style.color="white";
        colour5.style.color="white";
        colour6.style.color="white";
        colour7.style.color="white";
        pause.style.display="none";
        play.style.display="";
      
         colour3.style.color="grey";
     number3=0;
     auto.pause();
     console.log(number3);

    }
    else{
        play.style.display="none";
        gif3.style.display=""; 
        pause.style.display="";   
     auto3.play();
     auto.pause();
        auto2.pause();
        auto4.pause();
        auto5.pause();
        auto6.pause();
        auto7.pause();
        number=0;
        number2=0;
        number4=0;
        number5=0;
        number6=0;
        number7=0;
        
        gif.style.display="none";
gif2.style.display="none";
gif4.style.display="none";
gif5.style.display="none";
gif6.style.display="none";
gif7.style.display="none";

        colour.style.color="white";
        colour2.style.color="white";
        colour3.style.color="white";
        colour4.style.color="white";
        colour5.style.color="white";
        colour6.style.color="white";
        colour7.style.color="white";
        colour3.style.color="green";
     number3=1;
     console.log(number3);
    }
 })
 sett4.addEventListener("click",()=>{
    if(auto4.play()){
        auto4.pause();
        colour4.style.color="white";
        
         }
           else{
        auto4.play();
        colour4.style.color="white";
        } 
    if(number4==1){
        auto.pause();
        auto3.pause();
        auto2.pause();
        auto4.pause();
        auto5.pause();
        auto6.pause();
        auto7.pause();
        gif4.style.display="none"; 
        colour.style.color="white";
        colour2.style.color="white";
        colour3.style.color="white";
        colour5.style.color="white";
        colour6.style.color="white";
        colour7.style.color="white";
    pause.style.display="none";
        play.style.display="";
     colour4.style.color="grey";
     number4=0;
     console.log(number4);
    }
    else{
        play.style.display="none";
        gif4.style.display=""; 
        pause.style.display="";   
     auto4.play();
     auto.pause();
        auto2.pause();
        auto3.pause();
        auto5.pause();
        auto6.pause();
        auto7.pause();
        number=0;
        number3=0;
        number2=0;
        number5=0;
        number6=0;
        number7=0;
        
        gif.style.display="none";
gif2.style.display="none";
gif3.style.display="none";
gif5.style.display="none";
gif6.style.display="none";
gif7.style.display="none";

        colour2.style.color="white";
        colour3.style.color="white";
        colour.style.color="white";
        colour5.style.color="white";
        colour6.style.color="white";
        colour7.style.color="white";
        colour4.style.color="green";
     number4=1;
    }
 })
 
 sett5.addEventListener("click",()=>{
    if(auto5.play()){
        auto5.pause();
        colour5.style.color="white";
        
         }
           else{
        auto5.play();
        colour5.style.color="white";
        } 
    
    if(number5==1){
        auto.pause();
        auto3.pause();
        auto2.pause();
        auto4.pause();
        auto6.pause();
        auto5.pause();
        auto3.pause();
        auto7.pause();
        gif5.style.display="none"; 
        colour.style.color="white";
        colour2.style.color="white";
        colour4.style.color="white";
        colour3.style.color="white";
        colour6.style.color="white";
        colour7.style.color="white";
        pause.style.display="none";
        play.style.display="";
   
     colour5.style.color="grey";
     number5=0;
    }
    else{
        play.style.display="none";
        gif5.style.display=""; 
        pause.style.display="";   
     auto5.play();
     auto.pause();
        auto2.pause();
        auto4.pause();
        auto3.pause();
        auto6.pause();
        auto7.pause();
        number=0;
        number3=0;
        number4=0;
        number2=0;
        number6=0;
        number7=0;
        
        gif.style.display="none";
gif2.style.display="none";
gif3.style.display="none";
gif4.style.display="none";
gif6.style.display="none";
gif7.style.display="none";

        colour2.style.color="white";
        colour3.style.color="white";
        colour4.style.color="white";
        colour.style.color="white";
        colour6.style.color="white";
        colour7.style.color="white";
        colour5.style.color="green";
     number5=1;
    }
 })
 
 sett6.addEventListener("click",()=>{
    if(auto6.play()){
        auto6.pause();
        colour6.style.color="white";
        
         }
           else{
        auto6.play();
        colour6.style.color="white";
        } 
    
    if(number6==1){
        auto.pause();
        auto3.pause();
        auto2.pause();
        auto4.pause();
        auto5.pause();
        auto6.pause();
        auto7.pause();
        colour.style.color="white";
        colour2.style.color="white";
        colour4.style.color="white";
        colour5.style.color="white";
        colour7.style.color="white";
        colour3.style.color="white";
        gif6.style.display="none"; 
 
     play.style.display="";
     pause.style.display="none";
     colour6.style.color="grey";
     number6=0;
    }
    else{
        play.style.display="none";
        pause.style.display="";   
        gif6.style.display=""; 
     
     auto6.play();
     auto.pause();
        auto2.pause();
        auto4.pause();
        auto5.pause();
        auto3.pause();
        auto7.pause();
        number=0;
        number3=0;
        number4=0;
        number5=0;
        number2=0;
        number7=0;
        
        gif.style.display="none";
gif2.style.display="none";
gif3.style.display="none";
gif4.style.display="none";
gif5.style.display="none";
gif7.style.display="none";

        colour2.style.color="white";
        colour3.style.color="white";
        colour4.style.color="white";
        colour5.style.color="white";
        colour.style.color="white";
        colour7.style.color="white";
        colour6.style.color="green";
     number6=1;
    }
 })
 
 sett7.addEventListener("click",()=>{
    if(auto7.play()){
        auto7.pause();
        colour7.style.color="white";
        
         }
           else{
        auto7.play();
        colour7.style.color="white";
        } 
    
    if(number7==1){
        auto7.pause();
        auto2.pause();
        auto4.pause();
        auto5.pause();
        auto6.pause();
        auto3.pause();
        auto.pause();
        colour.style.color="white";
        colour2.style.color="white";
        colour4.style.color="white";
        colour5.style.color="white";
        colour6.style.color="white";
        colour3.style.color="white";
    play.style.display="";
     pause.style.display="none";
     gif7.style.display="none"; 
     
     colour7.style.color="grey";
     number7=0;
    }
    else{
     play.style.display="none";
     gif7.style.display=""; 
     pause.style.display="";   
     auto7.play();
     auto.pause();
        auto2.pause();
        auto4.pause();
        auto5.pause();
        auto6.pause();
        auto3.pause();
        number=0;
        number3=0;
        number4=0;
        number5=0;
        number6=0;
        number2=0;
        
        gif.style.display="none";
gif2.style.display="none";
gif3.style.display="none";
gif4.style.display="none";
gif5.style.display="none";
gif6.style.display="none";

        colour2.style.color="white";
        colour3.style.color="white";
        colour4.style.color="white";
        colour5.style.color="white";
        colour6.style.color="white";
        colour.style.color="white";
        colour7.style.color="green";
        number7=1;
    }
 })

 const search=document.querySelector(".search");
let op=document.querySelector(".options");
let keyelements=[{name:"Aaye-Haaye"},
  {name:"Winning Speech"},
  {name:"Levels"},
  {name:"Mera Mann"},
  {name:"Apa Fer Milaange"},
  {name:"Off Limits"},
  {name:"Brats"},
  { name: "So High" },
  { name: "295" },
  { name: "Titliaan" },
  { name: "Lamberghini" },
  { name: "Pasoori" },
  { name: "Excuses" },
  { name: "Bijlee Bijlee" },
  { name: "Lehanga" },
  { name: "Brown Munde" },
  { name: "Naah" },
  { name: "Coka" },
  { name: "Jatt Da Muqabala" },
  { name: "Illegal Weapon" },
  { name: "Kya Baat Ay" },
  { name: "Tareefan" },
  { name: "Laung Laachi" },
  { name: "Patiala Peg" },
  { name: "High Rated Gabru" },
  { name: "Bapu Zimidar" },
  { name: "Horn Blow" },
  { name: "Nikle Currant" },
  { name: "Suit Suit" },
  { name: "Photo" },
  { name: "Ban Ja Rani" },
  { name: "Backbone" },
  { name: "Chitta Kurta" },
  { name: "Diamond" },
  { name: "Gallan Goodiyan" },
  { name: "Ishare Tere" },
  { name: "Kala Chashma" },
  { name: "Lahore" },
  { name: "Mann Bharrya" },
  { name: "Qismat" },
  { name: "Tareyan De Des" },
  { name: "Same Beef" },
  { name: "Kanda Kacheya Ne" },
  { name: "Firse Machayenge" },
  { name: "Jatt Fire Karda" },
  { name: "Yaar Mod Do" },
  { name: "Gur Nalo Ishq Mitha" },
  { name: "Amplifier" },
  { name: "Angreji Beat" },
  { name: "Do You Know" },
  { name: "Sakhiyaan" },
  { name: "Ikk Kudi" },
  { name: "Khaab" },
  { name: "Dil Diyan Gallan" },
  { name: "Suit" },
  { name: "Nira Ishq" },
  { name: "Teeje Week" },
  { name: "Viah" },
  { name: "Illegal Weapon 2.0" },
  { name: "Shadaa" },
  { name: "Wakhra Swag" },
  { name: "Pachtaoge" },
  { name: "Tibbeyan Da Putt" },
  { name: "Badnam" },
  { name: "Yaari" },
  { name: "Mitran Da Junction" },
  { name: "Mithi Mithi" },
  { name: "Peg Sheg" },
  { name: "Jatt Da Pajama" },
  { name: "Satisfya" },
  { name: "All Black" },
  { name: "Dil Ton Black" },
  { name: "Jatt Di Clip" },
  { name: "Temporary Pyar" },
  { name: "Gal Sun" },
  { name: "Tera Yaar Bolda" },
  { name: "Bambiha Bole" },
  { name: "8 Parche" },
  { name: "Dollar" },
  { name: "Yaar Anmulle" },
  { name: "Rim vs Jhanjar" },
  { name: "Ajj Kal Ajj Kal" },
  { name: "Jatt Life Thug Life" },
  { name: "Raat Di Gedi" },
  { name: "Gall Goriye" },
  { name: "Nakhre" },
  { name: "Naah Goriye" },
  { name: "Kya Baat Hai" },
  { name: "Pagal" },
  { name: "Hauli Hauli" },
  { name: "Car Nachdi" },
  { name: "Sohnea" },
  { name: "Na Ja" },
  { name: "High Heels" },
  { name: "Laembadgini" },
  { name: "Gaal Ni Kadni" },
  { name: "Akh Lad Gayi" },
  { name: "Chandigarh Mein" },
  { name: "Suit Punjabi" },
  { name: "Yaar Beli" },
  { name: "Gallan Mithiyan" },
  { name: "Jaani Tera Naa" },
  { name: "Warning" },
  { name: "Jatt Tinka" },
  { name: "Ikk Pal" },
  { name: "Gunday Returns" },
  { name: "White Brown Black" },
  { name: "Prada" },
  { name: "Don't Look" },
  { name: "Jatt Da Pyaar" },
  { name: "Red Eyes" },
  { name: "Jatt Te Jawani" },
  { name: "Lover" },
  { name: "2 Number" },
  { name: "Paagal" },
  { name: "G Wagon" },
  { name: "Roti" },
  { name: "Bapu Tere Karke" },
  { name: "Baaz" },
  { name: "Ignore" },
  { name: "Naah Goriye" },
  { name: "Sira E Hou" },
  { name: "Kya Baat Hai 2.0" },
  { name: "Jatt Flex" },
  { name: "Toxic" },
  { name: "Tera Mera Viah" },
  { name: "Pind Puchdi" },
  { name: "Defender" },
  { name: "Light Weight" },
  { name: "Pagg" },
  { name: "Tibbeyan Da Putt 2" },
  { name: "Tommy" },
  { name: "Dil Todan Waleya Nu" },
  { name: "Dhakka" },
  { name: "Thok Thar Di" },
  { name: "Adhiya" },
  { name: "Ishq Tera" },
  { name: "Bapu" },
  { name: "Gunda Zone" },
  { name: "Phulkari" },
  { name: "Game" },
  { name: "Jatt Nal Yaari" },
  { name: "Gangland" },
  { name: "Ain't Worthy" },
  { name: "Time Chakda" },
  { name: "Munde Pind De" },
  { name: "Jatt Disda" },
  { name: "Old Skool" },
  { name: "Gumaan" },
  { name: "Pindan Wale Jatt" },
  { name: "Proud To Be Desi" },
  { name: "Akh Da Nishana" },
  { name: "Sharara" },
  { name: "Note Fenko" },
  { name: "Sip Sip 2.0" },
  { name: "Haan Haige Aa" },
  { name: "Bandook" },
  { name: "Surma" },
  { name: "Gunday Ik Vaar Fer" },
  { name: "Suit Punjabi" },
  { name: "Sharabi" },
  { name: "Nira Patola" },
  { name: "Tareyan Di Loye" },
  { name: "Lehnga" },
  { name: "Peg Di Washna" },
  { name: "Hathyar 2" },
  { name: "Jatt Di Janeman" },
  { name: "Yaarian Ch Fikk" },
  { name: "Jatt Da Superman" },
  { name: "Shraab Wargi" },
  { name: "Mere Wala Sardar" },
  { name: "Sandal" },
  { name: "Hawa Vich" },
  { name: "Bapu Naal Pyar" },
  { name: "Ik Tera" },
  { name: "Bambiha Bole 2" },
  { name: "Jatt Da Kaim" },
  { name: "Bottle" },
  { name: "Zimidar Mehkma" },
  { name: "Gucci" },
  { name: "Pistol" },
  { name: "Yaar Graribaaz" },
  { name: "Laal Ghaghra" },
  { name: "Nakhra Nawabi" },
  { name: "Jatt Da Blood" },
  { name: "Soch" },
  { name: "Tareefan 2" },
  { name: "Jatt Di Clip 2" },
  { name: "Mitra Da Swag" },
  { name: "Bebe Bapu" },
  { name: "Main Teri Ho Gayi" },
  { name: "Koka Vs Coca Cola" },
  { name: "Carrom Board" },
  { name: "Dubai Wale Shaikh" },
  { name: "Jatt Di Shaan" },
  { name: "Range Rover" },
  { name: "Kikli" },
  { name: "Chandigarh Kare Aashiqui" },
  { name: "Jatt N Jail" },
  { name: "Hass Ke" },
  { name: "Naiyo Lagda" },
  { name: "Dil Le Gayi Kudi" },
  { name: "Jatt Da Future" },
  { name: "Bapu Diyaan Gallan" },
  { name: "Aar Nanak Paar Nanak" },
  { name: "Hathyar" },
  { name: "Gumaan" },
  { name: "Difference" },
  { name: "Zindagi Tere Naal" },
  { name: "Gulabi Suit" },
  { name: "Mitraan Di Chhatri" },
  { name: "Suit Patiala Shahi" },
  { name: "Mitha Mitha" },
  { name: "Time Chakda" },
  { name: "Lover" },
  { name: "Teri Naar" },
  { name: "Jatt Da Karobaar" },
  { name: "Sunroof" },
  { name: "Sone Di Dabbi" },
  { name: "Sangdi Sangdi" },
  { name: "Lakh Vaari" },
  { name: "Bang Bang" },
  { name: "Do Gallan" },
  { name: "Black & White" },
  { name: "Kikli Kaleer Di" },
  { name: "Thug Life" },
  { name: "Sohni Lagdi" },
  { name: "Meri Mummy Nu Pasand Nai Tu" },
  { name: "Raule" },
  { name: "Kali Camaro" },
  { name: "Nach Nach" },
  { name: "Kya Baat Banegi" },
  { name: "Hostel" },
  { name: "Heart Patient" },
  { name: "Nakhre Da Mull" },
  { name: "Yaar Purane" },
  { name: "Gall Kar Ke" },
  { name: "Jatti Jeone Morh Wargi" },
  { name: "Haye Tauba" },
  { name: "Kudiye Ni Tere Brown Rang Ne" },
  { name: "Kalla Sohna Nai" },
  { name: "Majhail" },
  { name: "Mor Suit" },
  { name: "Kawaan" },
  { name: "Laare" },
  { name: "Candle Light Dinner" },
  { name: "Gedi Route" },
  { name: "Bad Habit" },
  { name: "Girlfriend" },
  { name: "Level" },
  { name: "Shonk Se" },
  { name: "Photoan" },
  { name: "Fikar Kari Na Amy" },
  { name: "Sohne Lagde" },
  { name: "Goriye Goriye" },
  { name: "Patt Lai Geya" },
  { name: "Chitte Suit Te" },
  { name: "Chunni Black" },
  { name: "Gallan Teriyan" },
  { name: "Khaas Gall" },
  { name: "Chann Sitare" },
  { name: "Jatt Velly" },
  { name: "Yaarian Da Group" },
  { name: "Sher Marna" },
  { name: "Kudi Chandigarh Di" },
  { name: "Takkar" },
  { name: "Jatti Di Dream Girl" },
  { name: "Nakhre Vich Jatt" },
  { name: "Jatt Di Life" },
  { name: "Roti Kapda Makaan" },
  { name: "2 Raflaan" },
  { name: "Starboy" },
  { name: "Bad Boy" },
  { name: "Dil Vich" },
  { name: "Jatt Da Khyaal" },
  { name: "Tere Bina" },
  { name: "Belly Ring" },
  { name: "High Status" },
  { name: "Jatt Da Signal" },
  { name: "Gaddi Pichhe Naa" },
  { name: "Nain" },
  { name: "Gaddiyan Uchiya Rakhiya" },
  { name: "Jatt Da Ghar" },
  { name: "Hulara" },
  { name: "Good Luck" },
  { name: "Hawa Vich" },
  { name: "Jatt Warga" },
  { name: "Chitte Suit" },
  { name: "Style Jatt Da" },
  { name: "Nakhre Tere" },
  { name: "Bapu Diyan Gallan" },
  { name: "Teri Lod Nahi" },
  { name: "Sharaabi Teri Tor" },
  { name: "Jatt Jaan Vaarda" },
  { name: "Jatti Da Crush" },
  { name: "Patiala Shahi Pagg" },
  { name: "Jatt Da Boss" },
  { name: "Bebe Bapu Da Pyar" },
  { name: "Tu Meri Rani" },
  { name: "Jatt De Wakhre Ture" },
  { name: "Yaar Bolda" },
  { name: "Main Teri Ho Gayi" },
  { name: "Dil Lai La" }
  ];

search.addEventListener("input",()=>{
    const input=search.value.toLowerCase();
    const filter2=keyelements.map(value=>value.name.toLowerCase());
 
const filter=filter2.filter(value=>value.includes(input));
const filters=filter.map(value=>value.charAt(0).toUpperCase() +value.slice(1).toLowerCase());
if(filter.length>=1){
  op.innerText="";
    op.classList.add("option");
    op.classList.remove("options");
    
    filters.forEach(value=>{
      let arra=document.createElement("li");
      let list=document.createElement("a");
    list.innerText=value;
    let replaces=value.split(" ").join("");
    list.href="https://"+replaces+".com";
    list.style.color="black";
    arra.style.backgroundColor="white";
    arra.style.listStyle="none";
    list.style.textDecoration="none";
    list.style.backgroundColor="white";
    arra.appendChild(list);
    op.appendChild(arra);
    })

   }
else {
    op.classList.add("option");
    op.classList.remove("options");
    op.innerText="No search found";
    op.style.color="black";

}

if(!input){
  op.classList.add("options");
  op.classList.remove("option");
}

  })
  let bars=document.querySelector("#bars");
let cross=document.querySelector("#cross");

let signout=document.querySelector(".signout");
let navbar=document.querySelector(".navbar");

bars.addEventListener("click",()=>{
  let i=0;
  if(i==0){
  signout.classList.add("signin");
  signout.classList.remove("signout");
  i++;
  }
  else{
    signout.classList.remove("signin");
  signout.classList.add("signout");
  i--;
  }
  cross.addEventListener("click",()=>{
    if(i==1){
    signout.classList.add("signout");
    signout.classList.remove("signin");
    i++;
    alert=("hello")
    }
    else{
      signout.classList.remove("signin");
    signout.classList.add("signout");
    i--;
    
    }
  
  
})})


        



 
