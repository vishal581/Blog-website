// firstblog=addEventListener('click',  function(){
//     document.querySelector("like_div")[0].innerHTML="<b>you liked</b>"
//    console.log("click on blog1")
// })
 firstblog=addEventListener('click',  function(){
     document.querySelectorAll(".llike_div")[0].innerHTML="<b>you liked</b>"
    console.log("click on blog1")
 })
 secondblog=addEventListener('click',  function(){
    document.querySelectorAll(".like_div")[1].innerHTML="<b>you liked</b>"
   console.log("click on blog2")
 })
 thirdblog=addEventListener('click',  function(){
    document.querySelectorAll(".like_div")[2].innerHTML="<b>you liked</b>"
   console.log("click on blog3")
 })
 fourthblog=addEventListener('click',  function(){
    document.querySelectorAll(".like_div")[3].innerHTML="<b>you liked</b>"
   console.log("click on blog4")
 })

 let btnPrimary=document.querySelector("#primary");
  let btnDanger=document.querySelector("#danger");
  let btnSucess=document.querySelector("#sucess");
  let btnprim=document.querySelector("vishal");
  

  btnPrimary.addEventListener=('click', () =>btnPrimary.style.backgroundColor='blue');
  btnDanger.addEventListener=('click', ()=>btnDanger.style.backgroundColor='blue');
  btnSucess.addEventListener=('click', ()=>btnSucess.style.backgroundColor='blue');

  
   