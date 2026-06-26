function calcularColheita() {
    // 1. Captura dos elementos do DOM
    const inputPinhas = document.getElementById('pinhas').value;
    const resultadoDiv = document.getElementById('resultado');
    const txtColheita = document.getElementById('colheita-permitida');
    const txtNatureza = document.getElementById('natureza-preservada');

    // 2. Validação de entrada básica
    if (inputPinhas <= 0 || inputPinhas === "") {
        alert("Por favor, insira uma quantidade válida de pinhas para o cálculo.");
        return;
    }

    // 3. Regra de Negócio 1: Verificação do período de defeso (Lei Estadual)
    const dataAtual = new Date();
    const mesAtual = dataAtual.getMonth(); // Janeiro é 0, Março é 2, Abril é 3...

    if (mesAtual < 3) { // Bloqueia se for Janeiro, Fevereiro ou Março
        alert("🚨 Atenção: A colheita e comercialização do pinhão são proibidas antes de 1º de abril para proteger a biodiversidade!");
        resultadoDiv.classList.add('hidden');
        return;
    }

    // 4. Regra de Negócio 2: Cálculo Sustentável (60% Produtor / 40% Natureza)
    const pinhasProdutor = Math.floor(inputPinhas * 0.6);
    const pinhasNatureza = Math.ceil(inputPinhas * 0.4);

    // 5. Renderização dos resultados na tela
    txtColheita.innerHTML = `<strong>Permitido colher:</strong> ${pinhasProdutor} pinhas (60% da produção estimada).`;
    
    let mensagemNatureza = `🌱 <strong>Deixe na floresta:</strong> pelo menos ${pinhasNatureza} pinhas (40%) para a fauna (como a gralha-azul) e regeneração do solo.`;
    
    // Alerta extra para grandes volumes (Impacto ecológico maior)
    if (inputPinhas > 1000) {
        mensagemNatureza += `<br><br>⚠️ <strong>Nota de Manejo:</strong> Devido ao grande volume, certifique-se de espalhar a coleta por diferentes áreas da propriedade para não isolar os pontos de alimentação dos animais.`;
    }

    txtNatureza.innerHTML = mensagemNatureza;

    // 6. Exibe o painel de resultados removendo a classe CSS 'hidden'
    resultadoDiv.classList.remove('hidden');
}