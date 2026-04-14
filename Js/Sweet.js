const api=`https://fashion-studio.onrender.com/sweets`;

const Apicall=()=>{
  fetch(api)
  .then((res)=>res.json())
  .then((res)=>FuncData(res))
  .catch((err)=>console.log(err))
}
Apicall();

const FuncData=(data)=>{
 
    let Storedata = document.getElementById('info');

     data.forEach(el => {
        let maindiv = document.createElement('div');
        let img_div= document.createElement('div');
        let TP_div= document.createElement('div');
        let img= document.createElement('img');
        let title= document.createElement('title');
        let price= document.createElement('price');
 
        maindiv.classList="maindiv";
        img_div.classList="img_div";
        TP_div.classList="TP_div";
        img.classList="img_1";
        title.classList=""

     });
}