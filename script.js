// cambiar el titlulo de las cards apuntando a los h5

const h5 = document.querySelector("h5");
console.log(h5);

h5.innerHTML= "";

// cambiar el texto de las cards apuntando a los card_Text
const card_Text = document.querySelector(".card-text");
card_Text.innerHTML = "Something like a description..."

// cambiar el archivo de imágen de la card...
const img = document.querySelector("img");
img.src = "https://media.istockphoto.com/id/1371322868/es/foto/ordenador-port%C3%A1til-con-pantalla-en-blanco-blanco.jpg?s=612x612&w=is&k=20&c=Y3rNCjjWlIw5x9RoIbTqL0cC-TUIgLy_VmFvOLP8lwE=";