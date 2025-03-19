const nameInput = document.querySelector("#amigo");
const addButton = document.querySelector(".button-add");
const drawButton = document.querySelector(".button-draw");
const nameList = document.querySelector("#listaAmigos");
const resultList = document.querySelector("#resultado");

let names = [];

// Adiciona nome à lista
function adicionarAmigo() {
    const name = nameInput.value.trim();
    if (name === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    if (names.includes(name)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    names.push(name);
    updateNameList();
    nameInput.value = "";
    nameInput.focus();
}

// Atualiza a exibição da lista de nomes
function updateNameList() {
    nameList.innerHTML = "";
    names.forEach((name, index) => {
        const li = document.createElement("li");
        li.textContent = name;
        
        // Botão para remover nome
        const removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.classList.add("remove-btn");
        removeButton.addEventListener("click", () => removeName(index));
        
        li.appendChild(removeButton);
        nameList.appendChild(li);
    });
}

// Remove nome da lista
function removeName(index) {
    names.splice(index, 1);
    updateNameList();
}

// Realiza o sorteio
function sortearAmigo() {
    if (names.length < 2) {
        alert("Adicione pelo menos dois nomes antes de sortear.");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * names.length);
    const winner = names[randomIndex];
    resultList.innerHTML = `<li>O amigo secreto sorteado é: <strong>${winner}</strong>!</li>`;
}

// Adiciona evento para tecla Enter no campo de entrada
ameInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});
