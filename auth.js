function cadastrar(){

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if(!nome || !email || !senha){
        alert("Preencha todos os campos.");
        return;
    }

    if(localStorage.getItem(email)){
        alert("Este e-mail já está cadastrado.");
        return;
    }

    const usuario = {
        nome,
        email,
        senha
    };

    localStorage.setItem(email, JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");

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

function sair(){

    localStorage.removeItem("usuarioLogado");

    window.location.href = "login.html";
}
