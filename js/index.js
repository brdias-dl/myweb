var aulasArray = [];

window.onload = () => {

    /*$("#btn-load").click((event) => {
        $.getJSON('aulas.json', function (jd) {

            console.log(jd);
            aulasArray = jd;
            aula = [];
            elemento = document.createElement("div");

            //Criar Nome da Aula
            elemento_nomeDaAula = document.createElement("p");
            elemento_nomeDaAula.appendChild(document.createTextNode(jd));
            elemento.appendChild(elemento_nomeDaAula);



            //Criar Nome do Professor
            elemento_nomeDoProfessor = document.createElement("p");
            elemento_nomeDoProfessor.appendChild(document.createTextNode(nomeDoProfessor.value));
            elemento.appendChild(elemento_nomeDoProfessor);



            //Criar Tipo de Aula
            elemento_opcao = document.createElement("p");
            if (opcaoPL.checked) {
                elemento_opcao.appendChild(document.createTextNode("Tipo de aula: (PL)"));
            } else {
                elemento_opcao.appendChild(document.createTextNode("Tipo de aula: (TP)"));
            }
            elemento.appendChild(elemento_opcao);



            //Criar Semana
            elemento_semana = document.createElement("p");
            elemento_semana.appendChild(document.createTextNode(numeroSemana1.value + "|" + numeroSemana2.value));
            elemento.appendChild(elemento_semana);



            //Criar Local
            elemento_local = document.createElement("p");
            elemento_local.appendChild(document.createTextNode(nomeEdificio.value + "." + nomeSala.value));
            elemento.appendChild(elemento_local);



            //Criar Dia da Semana
            elemento_diaSemana = document.createElement("p");
            elemento_diaSemana.appendChild(document.createTextNode(diaSemana.value));
            elemento.appendChild(elemento_diaSemana);



            //Criar Hora
            elemento_hora = document.createElement("p");
            elemento_hora.appendChild(document.createTextNode(numeroHora1.value + "|" + numeroHora2.value));
            elemento.appendChild(elemento_hora);



            aulasArray.push(elemento);
            document.getElementById("aulas").appendChild(elemento);


                   $.ajax({
            method: "GET",
            dataType: 'json',
            async: true,
            url: `${url}save_json.php`,
            data: {
                data: stringify
            },
            success: function (data) {
                console.log("Data: ");
                console.log(data);
            },
            error: function (xhr, status, error) {
                console.log(xhr);
                console.log("Status: " + status);
                console.log("Error: " + error);
            }
        });

        });
    });*/

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

        var firebaseRef = firebase.database().ref();
        var aula = {};

        aula.nome = nomeDaAula.value;
        aula.professor = nomeDoProfessor.value;

        if (opcaoPL.checked) {
            aula.tipo = "Tipo de aula: (PL)";

        } else {
            aula.tipo = "Tipo de aula: (TP)";
        }

        aula.semana = numeroSemana1.value + "|" + numeroSemana2.value;
        aula.local = nomeEdificio.value + "." + nomeSala.value;
        aula.diaSemana = diaSemana.value;
        aula.hora = numeroHora1.value + "|" + numeroHora2.value;

        firebaseRef.child("Aulas").set(aula);

        aulasArray.push(aula);
    }
}