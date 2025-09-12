var data = [
  {
    name: "Harsh",
    src: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Harshita",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kiya",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "Raj",
    src: "https://media.istockphoto.com/id/2187592265/photo/portrait-of-middle-eastern-businessman-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q1rXlEPB326P2x0c5RdtszI2_qx03P_WMhaakDFhng4=",
  },
  {
    name: "Ramya",
    src: "https://media.istockphoto.com/id/2165425187/photo/portrait-of-a-woman-in-an-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nn0pYLaWhUJCW-9fpqR_C60Glc59sGIEXH1H9zSPRg0=",
  },
];





let pers = ""; // value append hoti rahegi
data.forEach(function (elem) {
  pers += ` <div class="person">
              <div id="img">
                <img src = "${elem.src}">
              </div>
              <h4>${elem.name}</h4>
                </div>`;
})

document.querySelector(".people").innerHTML = pers;

let input = document.querySelector("input");

input.addEventListener("input",function(){
 let matching =  data.filter(function(e){
   return e.name.startsWith(input.value)
  })

  let newpers = ""; 

  matching.forEach(function (elem) {
  newpers += ` <div class="person">
              <div id="img">
                <img src = "${elem.src}">
              </div>
              <h4>${elem.name}</h4>
                </div>`;
})

document.querySelector(".people").innerHTML = newpers;


})