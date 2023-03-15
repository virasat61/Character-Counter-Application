const charVal = document.getElementById('textarea');
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");


let userchar = 0;


const updateCounter = () => {
    userchar = charVal.value.length;
    totalCount.innerText = userchar;
    remainingCount.innerText = 250 - userchar;
}


charVal.addEventListener("keyup", () => {
    updateCounter()
});

const copytext = () => {
    charVal.select();
    charVal.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(charVal.value);
};
