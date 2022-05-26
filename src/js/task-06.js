const input = document.querySelector('[data-length="6"]');

input.addEventListener("blur", inputOnBlur);

function inputOnBlur(ev) {
    if (ev.currentTarget.value.length === Number.parseInt(input.dataset.length)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else if(ev.currentTarget.value === '') {
        input.classList.remove("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}
