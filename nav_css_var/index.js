let btn = document.querySelector(".switch");
let theme = document.querySelector("header");
// function ChangeThemeLight() {
//     theme.classList.toggle('light');

//   if (theme.className === "dark") {
//     theme.classList.remove("dark");
//     theme.classList.add("light");
//   } else {
//     theme.classList.remove("light");
//     theme.classList.add("dark");
//   }
// }
// btn.addEventListener("click", ChangeThemeLight);
 const NAV = theme.className;
console.log(NAV);

btn.addEventListener("click", function(){
   
    // theme.classList.toggle('light');
   if(NAV !== 'light'){
       theme.classList.add('light');
  } else  {
   theme.classList.remove('light');
    }
});

