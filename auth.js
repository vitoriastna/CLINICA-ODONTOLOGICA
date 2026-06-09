function cadastrar(){

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const usuario = {
        nome,
        email,
        senha
    };

    localStorage.setItem(email, JSON.stringify(usuario));

    alert("Cadastro realizado!");

    window.location.href = "login.html";
}

function login(){

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // ADMIN FIXO
    if(email === "admin@odontoprime.com" && senha === "123"){
        window.location.href = "admin.html";
        return;
    }

    const usuario = JSON.parse(localStorage.getItem(email));

    if(usuario && usuario.senha === senha){

        localStorage.setItem("usuarioLogado",
        JSON.stringify(usuario));

        window.location.href = "home.html";

    }else{
        alert("E-mail ou senha inválidos");
    }
}