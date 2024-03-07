window.addEventListener('load', (event) => { //executa após carregar a pagina
    
    const principal = document.getElementById("principal")

    fetch('./dados.json') //carrega os dados do arquivo dados.json
        .then((response) => response.json())
        .then((dados) => { //o que faz com os dados
            dados.forEach(aluno => { //percorre cada objeto aluno, nos dados
                //cria um card
                let card = document.createElement("div")
                card.className = "card"

                let conteudo = "<div class='dados'>"
                conteudo +="<div>Nome: </b>"+aluno.nome+"</div>"
                conteudo += "<div><b>Curso: </b>"+aluno.curso+"</div>"
                conteudo += "<div><b>Escola: </b>"+aluno.escola+"</div>"
                conteudo += "<div><b>CPF: </b>"+aluno.cpf+"</div>"
                conteudo += "<div><b>Data de Nascimento: </b>"+aluno.nascimento+"</div>"
                conteudo += "<div><b>Validade: </b>"+aluno.validade+"</div>"
                conteudo += "<div><b>Endereço: </b>"+aluno.endereço+"</div>"
                conteudo += "</div>"
                conteudo += "<div class='foto'><img src='./fotos/"+aluno.foto+"'></div>"

                card.innerHTML = conteudo

                principal.appendChild(card)
            })
        })

});

