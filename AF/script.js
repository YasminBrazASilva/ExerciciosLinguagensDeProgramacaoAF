document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const novaTarefa = document.getElementById("novaTarefa");
    const listaTarefas = document.getElementById("listaTarefas");

    function excluirTarefa(tarefa) {
        tarefa.remove();
    }


    function concluirTarefa(tarefa) {
        tarefa.classList.toggle("completed");

        const botoes = tarefa.querySelectorAll(".btn");
        botoes.forEach(botao => {
            botao.classList.toggle("btn-secondary");
            botao.classList.toggle("btn-success");
            botao.classList.toggle("btn-danger");
        });
    }

    function editarTarefa(tarefa) {
        const textoTarefa = tarefa.querySelector('span');
        const novoTexto = prompt("Atualização da tarefa:", textoTarefa.textContent);
        if (novoTexto !== "") {
            textoTarefa.textContent = novoTexto;
        } else {
            alert("ERRO: Tarefa não atualizada. O texto não pode estar vazio.");
        }
    }

    function adicionarTarefa(tarefa) {
        if (tarefa !== "") {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.innerHTML = `
                <span>${tarefa}</span>
                <div>
                    <button class="btn btn-success btn-sm complete">Concluir</button>
                    <button class="btn btn-danger btn-sm delete">Excluir</button>
                    <button class="btn btn-primary btn-sm edit">Editar</button>
                </div>
            `;

            listaTarefas.appendChild(li);
            
            const botaoConcluir = li.querySelector(".complete");
            botaoConcluir.addEventListener("click", () => concluirTarefa(li));
            
            const botaoExcluir = li.querySelector(".delete");
            botaoExcluir.addEventListener("click", () => excluirTarefa(li));

            const botaoEditar = li.querySelector(".edit");
            botaoEditar.addEventListener("click", () => editarTarefa(li));

        }
    }

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        adicionarTarefa(novaTarefa.value);
        novaTarefa.value = "";
    });

});