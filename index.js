let selectedCharacter = null;

const cards = document.querySelectorAll(".card");
const playBtn = document.getElementById("playBtn");
const nameInput = document.getElementById("playerName");
const roomCodeSpan = document.getElementById("roomCode");

// Código de partida local
const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
roomCodeSpan.textContent = roomCode;

// Click en carta
cards.forEach(card => {
    card.addEventListener("click", () => {

        // Rotar carta seleccionada
        card.classList.toggle("rotated");

        // Selección exclusiva
        cards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");

        selectedCharacter = card.dataset.character;
        validatePlay();
    });
});

// Validar botón jugar
nameInput.addEventListener("input", validatePlay);

function validatePlay() {
    playBtn.disabled = !(selectedCharacter && nameInput.value.trim());
}

// Acción jugar
playBtn.addEventListener("click", () => {
    const playerData = {
        name: nameInput.value.trim(),
        character: selectedCharacter,
        roomCode
    };

    console.log("Jugador listo:", playerData);
    alert(`Jugador: ${playerData.name}\nPersonaje: ${playerData.character}\nCódigo: ${playerData.roomCode}`);
});
