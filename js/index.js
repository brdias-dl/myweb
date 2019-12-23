window.onload = () => {
    var aulasArray = [];

    //Obter os elementos
    var nomeDaAula = document.getElementById("escolha-aula");
    var nomeDoProfessor = document.getElementById("escolha-professores");
    var opcaoPL = document.getElementById("escolha-pl");
    var opcaoTP = document.getElementById("escolha-tp");
    var numeroSemana1 = document.getElementById("escolha-semana1");
    var numeroSemana2 = document.getElementById("escolha-semana2");
    var nomeEdificio = document.getElementById("escolha-edificio");
    var nomeSala = document.getElementById("escolha-sala");
    var diaSemana = document.getElementById("escolha-diasemana");
    var numeroHora1 = document.getElementById("escolha-hora1");
    var numeroHora2 = document.getElementById("escolha-hora2");

    document.getElementById("btn-criar").addEventListener("click", addAula);

    function addAula() {

        aula = [];
        elemento = document.createElement("div");

        //Criar Nome da Aula
        elemento_nomeDaAula = document.createElement("p");
        elemento_nomeDaAula.appendChild(document.createTextNode(nomeDaAula.textContent));
        elemento.appendChild(elemento_nomeDaAula);

        elemento.appendChild(document.createElement("br"));

        //Criar Nome do Professor
        elemento_nomeDoProfessor = document.createElement("p");
        elemento_nomeDoProfessor.appendChild(document.createTextNode(nomeDoProfessor.textContent));
        elemento.appendChild(elemento_nomeDoProfessor);

        elemento.appendChild(document.createElement("br"));

        //Criar Tipo de Aula
        elemento_opcao = document.createElement("p");
        if (opcaoPL.checked) {
            elemento_opcao.appendChild(document.createTextNode("Tipo de aula: (PL)"));
        } else {
            elemento_opcao.appendChild(document.createTextNode("Tipo de aula: (TP)"));
        }
        elemento.appendChild(elemento_opcao);

        elemento.appendChild(document.createElement("br"));

        //Criar Semana
        elemento_semana = document.createElement("p");
        elemento_semana.appendChild(document.createTextNode(numeroSemana1.textContent + "|" + numeroSemana2.textContent));
        elemento.appendChild(elemento_semana);

        elemento.appendChild(document.createElement("br"));

        //Criar Local
        elemento_local = document.createElement("p");
        elemento_local.appendChild(document.createTextNode(nomeEdificio.textContent + "|" + nomeSala.textContent));
        elemento.appendChild(elemento_local);

        elemento.appendChild(document.createElement("br"));

        //Criar Dia da Semana
        elemento_diaSemana = document.createElement("p");
        elemento_diaSemana.appendChild(document.createTextNode(diaSemana.textContent));
        elemento.appendChild(elemento_diaSemana);

        elemento.appendChild(document.createElement("br"));

        //Criar Hora
        elemento_hora = document.createElement("p");
        elemento_hora.appendChild(document.createTextNode(numeroHora1.textContent + "|" + numeroHora2.textContent));
        elemento.appendChild(elemento_hora);



        aulasArray.push(elemento);
        document.getElementById("aulas").appendChild(elemento);
    }
}