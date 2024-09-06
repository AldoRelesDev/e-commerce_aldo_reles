console.log("Js Activo...!!!")

let h1_text = document.querySelector(".productos");
h1_text.innerHTML = "Un Garage cualquiera...";

let section = document.querySelector(".content");

let array = [];

for (let i = 1; i <= 9; i++) {
    array.push(`
        <div class="col-12 col-md-4">
            <div class="card">
                <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top img-fluid card-image" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Auto N° ${i}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="btn btn-primary">Mostrar</a>
                </div>
            </div>
        </div>
        `);
}

section.innerHTML = array;