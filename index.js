document.addEventListener("DOMContentLoaded", function () {

    // Botão para abrir cadastro
    const botaoCadastro = document.getElementById("btnCadastro");

    if (botaoCadastro) {

        botaoCadastro.addEventListener("click", function () {

            window.location.href = "cadastro.html";

        });

    }

    //Redirecionamento de página de inscrição para o painel

   
    const botaoconfirm = document.getElementById("btnconfirm");

    if (botaoconfirm) {

        botaoconfirm.addEventListener("click", function () {

            window.location.href = "painel.html";

        });

    }

    //botão para ir até a verificação de cursos
    const botaoCursos = document.getElementById("btncursos");

    if (botaoCursos) {

        botaoCursos.addEventListener("click", function () {

            window.location.href = "cursos.html";

        });

    }

    //botão para ir até o painel de cursos
    const botaopainel = document.getElementById("btnpainel");

    if (botaopainel) {

        botaopainel.addEventListener("click", function () {

            window.location.href = "painel.html";

        });

    }



     //botão para ir até as inscrições
     const botaoinscricao= document.getElementById("btninscricao");

     if (botaoinscricao) {
 
        botaoinscricao.addEventListener("click", function () {
 
             window.location.href = "inscricao.html";
 
         });
 
     }

    // Botão voltar
    const botaoVoltar = document.getElementById("btnVoltar");

    if (botaoVoltar) {

        botaoVoltar.addEventListener("click", function () {

            window.location.href = "index.html";

        });

    }

    // Login
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            limparErros();

            const email =
                document.getElementById("emailLogin").value;

            const senha =
                document.getElementById("senhaLogin").value;

            let erro = false;

            if (!email.includes("@")) {

                mostrarErro(
                    "erroEmailLogin",
                    "O email deve conter @"
                );

                erro = true;

            }

            if (senha.length < 8 ||
                !/[A-Z]/.test(senha)) {

                mostrarErro(
                    "erroSenhaLogin",
                    "A senha deve ter mínimo 8 caracteres e uma letra maiúscula"
                );

                erro = true;

            }

            if (!erro) {

                alert("Login realizado!");

            }

        });

    }

    // Cadastro
    const cadastroForm =
        document.getElementById("cadastroForm");

    if (cadastroForm) {

        cadastroForm.addEventListener("submit", function (e) {

            e.preventDefault();

            limparErros();

            const email =
                document.getElementById("email").value;

            const senha =
                document.getElementById("senha").value;

            const confirmar =
                document.getElementById("confirmar").value;

            let erro = false;

            if (!email.includes("@")) {

                mostrarErro(
                    "erroEmail",
                    "O email deve conter @"
                );

                erro = true;

            }

            if (senha.length < 8 ||
                !/[A-Z]/.test(senha)) {

                mostrarErro(
                    "erroSenha",
                    "A senha deve possuir mínimo 8 caracteres e uma letra maiúscula"
                );

                erro = true;

            }

            if (senha !== confirmar) {

                mostrarErro(
                    "erroConfirmar",
                    "As senhas precisam ser iguais"
                );

                erro = true;
            }

            if (!erro) {

                alert("Inscrição salva com sucesso!");

                window.location.href = "index.html";

            }

        });

    }
});

function limparErros(){

    document.querySelectorAll(".erro").forEach(function(elemento){

        elemento.innerHTML = "";

    });

}

function mostrarErro(id, mensagem){

    document.getElementById(id).innerHTML = mensagem;

}

//necessidades especiais
const especial =
document.getElementById("especial");


const campo =
document.getElementById("campo");


const form =
document.getElementById("form");


const msg =
document.getElementById("msg");




especial.addEventListener("change",()=>{


if(especial.value=="sim"){


campo.style.display="block";


}else{


campo.style.display="none";


}


});





form.addEventListener("submit",(e)=>{


e.preventDefault();



if(especial.value=="sim" &&
document.getElementById("necessidade").value==""){


msg.innerHTML=
"Preencha a necessidade";


msg.className="erro";


return;


}




msg.innerHTML=
"Inscrição realizada com sucesso!";


msg.className="sucesso";



form.reset();


campo.style.display="none";



});