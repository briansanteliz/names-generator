const formulario = document.getElementById("generar-nombre");
const origen = document.getElementById("origen");
const genero = document.getElementById("genero");
const numero = document.getElementById("numero").value;
formulario.addEventListener("submit", generar);

async function generar(e) {
  e.preventDefault();
  //leyendo valor de el formulario
  const origenSeleccionado = origen.options[origen.selectedIndex].value;
  const generoSeleccionado = genero.options[genero.selectedIndex].value;
  const cantidad = document.getElementById("numero").value;
  //api
  let url = "";
  url += "https://uinames.com/api/?";
  //si hay origen selecionado agregalo al query
  if (origenSeleccionado !== "") {
    url += `region=${origenSeleccionado}&`;
  }
  if (generoSeleccionado !== "") {
    url += `gender=${generoSeleccionado}&`;
  }
  if (cantidad !== "") {
    url += `amount=${cantidad}&`;
  }

  //fetch api
  const res = await fetch(url);
  names = res.json();
  //generated html
  htmlTemplate = "<h2>Nombres Generados</h2>";
  htmlTemplate += '<ul class="lista">';
  names.forEach((names) => {
    htmlTemplate += `<li>${names}</li>`;
  });
  htmlTemplate += "</ul>";
  document.getElementById("resultado").innerHTML = htmlTemplate;
}
