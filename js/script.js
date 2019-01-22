var xhr = new XMLHttpRequest();
xhr.open ('GET','data.json',true);
xhr.responseType ='text';
xhr.send();

xhr.onload = function(){
  if (xhr.status === 200){
   let myData = JSON.parse(xhr.responseText);
   console.log(myData); 
   
   for (i =0; i< myData.presidents.length; i++){
     console.log(myData.presidents[i].first);
     console.log(myData.presidents[i].last);
     console.log(myData.presidents[i].served);
     console.log(myData.vicepresidents[i].first);
     console.log(myData.presidents[i].last);
     console.log(myData.presidents[i].served);

   }
   var myString = "";
   for (i = 0; i< myData.presidents.length;i++){
     var x = i + 1;
     myString +=`president ${x} was `;
     myString +=`${myData.presidents[i].first+ " "}`; 
     myString +=`${myData.presidents[i].last+ " "}`;


   }
    document.querySelector('.message').innerHTML= myString;
  }
};