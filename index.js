"use strict"
const searchIcon=document.getElementById('search-icon');
const searchInput=document.getElementById('search-input');
searchIcon.addEventListener('click',(e)=>{
    e.target.style.display="none";
    searchInput.style.display="block";
    searchInput.focus();
}
);
function qwerty(header){
    const werty=header.nextElementSibling;
    werty.classList.toggle("erty");
}
function asdfgh(){
    const sdfgh=document.getElementById("rty");
    const selectoption=sdfgh.options[sdfgh.selectedIndex].value;
    window.location.href=selectoption;
}