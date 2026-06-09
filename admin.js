function adicionarMedico(){

    const nome =
    document.getElementById("nomeMedico").value;

    const especialidade =
    document.getElementById("especialidade").value;

    const horario =
    document.getElementById("horario").value;


    const medico = {

        nome,
        especialidade,
        horario
    };


    let medicos =
    JSON.parse(localStorage.getItem("medicos")) || [];


    medicos.push(medico);


    localStorage.setItem(
        "medicos",
        JSON.stringify(medicos)
    );


    mostrarMedicos();
}



function mostrarMedicos(){

    const lista =
    document.getElementById("lista");

    lista.innerHTML = "";


    const medicos =
    JSON.parse(localStorage.getItem("medicos")) || [];


    medicos.forEach((m) => {

        lista.innerHTML += `

        <div class="consulta-card">

            <div class="icone-medico">
                <i class="fa-solid fa-user-doctor"></i>
            </div>

            <h3>${m.nome}</h3>

            <p>
                ${m.especialidade}
            </p>

            <p>
                ${m.horario}
            </p>

        </div>
        `;
    });
}


mostrarMedicos();

const consultas =
JSON.parse(localStorage.getItem("consultas")) || [];

const estatisticas =
document.getElementById("estatisticas");

if(estatisticas){

    estatisticas.innerHTML = `
        <p>Total de consultas: ${consultas.length}</p>
    `;
}
