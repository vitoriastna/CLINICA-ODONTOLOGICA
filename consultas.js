if(usuario){

    const elemento =
    document.getElementById("usuario");

    if(elemento){

        elemento.innerHTML =
        `Olá, ${usuario.nome}!`;
    }
}

const lista =
document.getElementById("listaMedicos");

const medicos =
JSON.parse(localStorage.getItem("medicos")) || [];

const usuario =
JSON.parse(localStorage.getItem("usuarioLogado"));

medicos.forEach((m, index) => {

    lista.innerHTML += `

    <div class="medico-card">

        <div class="icone-medico">
            <i class="fa-solid fa-user-doctor"></i>
        </div>

        <h3>${m.nome}</h3>

        <p>${m.especialidade}</p>

        <p>
            Horários:
            ${m.horario}
        </p>

        <input
        type="date"
        id="data${index}">

        <input
        type="time"
        id="hora${index}">

        <button onclick="agendar(${index})">
            Agendar
        </button>

    </div>
    `;
});



function agendar(index){

    const data =
    document.getElementById(`data${index}`).value;

    const hora =
    document.getElementById(`hora${index}`).value;

    const medico = medicos[index];

    const usuario =
    JSON.parse(localStorage.getItem("usuarioLogado"));

    if(!data || !hora){

    alert("Selecione uma data e um horário.");

    return;
}


    const consulta = {

        paciente: usuario.nome,
        medico: medico.nome,
        data,
        hora
    };


    let consultas =
    JSON.parse(localStorage.getItem("consultas")) || [];


    consultas.push(consulta);


    localStorage.setItem(
        "consultas",
        JSON.stringify(consultas)
    );


    alert("Consulta marcada!");
}



const listaConsultas =
document.getElementById("consultas");


const consultas =
JSON.parse(localStorage.getItem("consultas")) || [];


consultas.forEach((c) => {

    listaConsultas.innerHTML += `

    <div class="consulta-card">

        <h3>${c.medico}</h3>

        <p>
            Paciente:
            ${c.paciente}
        </p>

        <p>
            Data:
            ${c.data}
        </p>

        <p>
            Hora:
            ${c.hora}
        </p>

    </div>
    `;
});
