"use strict";console.log(">> Ready :)");const inputName=document.querySelector(".name"),inputJob=document.querySelector(".puesto"),inputMail=document.querySelector(".mail"),inputPhone=document.querySelector(".phone"),inputLinkedin=document.querySelector(".linkedin_input"),inputGithub=document.querySelector(".github_input"),textName=document.querySelector(".img-text__title"),textJob=document.querySelector(".img-text__subtitle"),textMail=document.querySelector(".icon__mail"),textPhone=document.querySelector(".icon__mobile"),textLinkedin=document.querySelector(".icon__linkedin"),textGithub=document.querySelector(".icon__github");function write(e){let t=e.currentTarget.value;e.currentTarget.classList.contains("name")?textName.innerHTML=""!==t?t:"Nombre Apellido":e.currentTarget.classList.contains("puesto")?textJob.innerHTML=""!==t?t:"Front-end developer":e.currentTarget.classList.contains("phone")?(textPhone.href="tel:"+t,""===t?textPhone.classList.add("hidden_v"):textPhone.classList.remove("hidden_v")):e.currentTarget.classList.contains("mail")?(textMail.href="mailto:"+t,""===t?textMail.classList.add("hidden_v"):textMail.classList.remove("hidden_v")):e.currentTarget.classList.contains("linkedin_input")?(textLinkedin.href=t,""===t?textLinkedin.classList.add("hidden_v"):textLinkedin.classList.remove("hidden_v")):e.currentTarget.classList.contains("github_input")&&(textGithub.href=t,""===t?textGithub.classList.add("hidden_v"):textGithub.classList.remove("hidden_v"))}inputName.addEventListener("keyup",write),inputJob.addEventListener("keyup",write),inputMail.addEventListener("keyup",write),inputPhone.addEventListener("keyup",write),inputLinkedin.addEventListener("keyup",write),inputGithub.addEventListener("keyup",write);const palette1=document.querySelector(".input1"),palette2=document.querySelector(".input2"),palette3=document.querySelector(".input3"),box=document.querySelector(".cards__img-wrapper");function changeColor(e){box.classList.remove("cards__img-wrapper-op1"),box.classList.remove("cards__img-wrapper-op2"),box.classList.remove("cards__img-wrapper-op3"),"1"===e.currentTarget.value?box.classList.add("cards__img-wrapper-op1"):"2"===e.currentTarget.value?box.classList.add("cards__img-wrapper-op2"):box.classList.add("cards__img-wrapper-op3")}palette1.addEventListener("click",changeColor),palette2.addEventListener("click",changeColor),palette3.addEventListener("click",changeColor);