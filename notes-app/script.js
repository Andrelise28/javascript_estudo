const btnAdicionar = document.getElementById("adicionar");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}

btnAdicionar.addEventListener("click", () => {
    addNewNote();
});

function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>
        </div>
    `;

    const btnEditar = note.querySelector(".edit");
    const btnDeletar = note.querySelector(".delete");

    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = marked(text);

    btnEditar.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    btnDeletar.addEventListener("click", () => {
        var desejaExcluir = confirm("Deseja realmente excluir essa nota?");
        if (desejaExcluir == true) {
            note.remove();
        }
        else{
            alert("Você desistiu de excluir a nota!");
        }
        editaNotas();
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        editaNotas();
    });

    document.body.appendChild(note);
}

function editaNotas() {
    const notaTxt = document.querySelectorAll("textarea");

    const notes = [];

    notaTxt.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}