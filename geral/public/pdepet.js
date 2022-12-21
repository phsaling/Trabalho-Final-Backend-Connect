const loginForm = document.getElementById("lead-form");
const loginButton = document.getElementById("submit-form");
const receberdados = document.getElementById("receberdados");
let dados = []


const carregar = document.getElementById('Carregar')
carregar.addEventListener('click', function () {
    obterDados()
})

const listar = document.getElementById('Listar')
listar.addEventListener('click', function () {
    listarDados()
})




function listarDados() {


    dados.forEach(function (item) {
        const linha = document.createElement('div')
        linha.className = 'row'
        const paiId = document.createElement('div')
        paiId.className = 'col-lg-2'
        const id = document.createElement('input')
        id.value = item.id
        id.disabled = true
        id.className = 'form-control'
        paiId.appendChild(id)


        const painome = document.createElement('div')
        painome.className = 'col-lg-4'
        const nome = document.createElement('input')
        nome.value = item.nome
        nome.className = 'form-control'
        painome.appendChild(nome)

        const paiemail = document.createElement('div')
        paiemail.className = 'col-lg-4'
        const email = document.createElement('input')
        email.value = item.email
        email.className = 'form-control'
        paiemail.appendChild(email)

        const paitelefone = document.createElement('div')
        paitelefone.className = 'col-lg-2'
        const telefone = document.createElement('input')
        telefone.value = item.telefone
        telefone.className = 'form-control'
        paitelefone.appendChild(telefone)

        
        linha.append(paiId, painome, paiemail, paitelefone)
        receberdados.appendChild(linha)
    })
}
// função que será chamada toda vez que a pessoa clicar no botão "SALVAR DADOS":
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const email = loginForm.email.value;
    const phone = loginForm.phone.value;

    if (username !== "" && email !== "" && phone !== "") {
        // agora vamos enviar estes valores para o nosso banco de dados:
        enviarDados(username, email, phone)

    }

})



function enviarDados(nome, email, telefone) {
    const corpo = {
        nome: nome,
        email: email,
        telefone: telefone
    }
    fetch('http://localhost:3000/pets', {

        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)


    })
        .then(function (response) {
            return response;
        })
        .then(function (data) {
            console.log(data)
        })

}


function obterDados() {
    fetch('http://localhost:3000/users')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            dados = data
            console.log(data)
        })

}

function postarDados(name, email, phone) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            name: name,
            email: email,
            phone: phone
        }
    })
}
