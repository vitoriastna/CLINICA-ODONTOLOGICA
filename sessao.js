const medico = {
    nome: "Dr. Carlos Eduardo"
};

document.getElementById("boasVindas")
.innerHTML = `
    Bem vindo, ${medico.nome}
`;

const consultas =
JSON.parse(localStorage.getItem("consultas")) || [];

const lista =
document.getElementById("listaConsultas");

if(consultas.length === 0){

    lista.innerHTML = `
        <p>
            Nenhuma consulta marcada.
        </p>
    `;

}else{

    consultas.forEach((c) => {

        lista.innerHTML += `

        <div class="consulta-card">

            <h4>${c.paciente}</h4>

            <p>
                <strong>Data:</strong>
                ${c.data}
            </p>

            <p>
                <strong>Hora:</strong>
                ${c.hora}
            </p>

            <p>
                <strong>Dentista:</strong>
                ${c.medico}
            </p>

        </div>
        `;
    });

}