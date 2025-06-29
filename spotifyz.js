const search=document.querySelector(".search");
let op=document.querySelector(".options");
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
  

        
