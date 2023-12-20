const spans = document.querySelector(".logo.is-animetion").querySelectorAll("span");
const spans2 = document.querySelector("#footer").querySelectorAll("span");

spans.forEach((span, index) => { // Get the title so i can add a delay
    span.style.animationDelay = index * 0.05 + "s";
});

spans2.forEach((span, index) => { // Get the title so i can add a delay
    span.style.animationDelay = index * 0.05 + "s";
});

function fallbackCopyTextToClipboard(text) { // idk stole it
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        var successful = document.execCommand("copy");
        var msg = successful ? "correctamente, para usarlo, pégalo en un canal de Discord" : "incorrectamente";
        alert("El link de la película ha sido copiado " + msg);
    } catch (err) {
        prompt("Fallback: Failed to auto copy please copy from below:", text);
    }
    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
    }else{
        navigator.clipboard.writeText(text).then(
            function () {
                alert("Copying to clipboard was successful!");
            },
            function (err) {
                fallbackCopyTextToClipboard(text);
            }
        );
    }
}

function copyLink(){ // Lazy coding
    copyTextToClipboard(links[this.innerText])
}

if (document.location.host == "dispelis.rf.gd"){ // If you copy on embedding.mov i want it to be embedding.mov/ies lol
    base = document.location.origin + "/ies"
}else{
    base = document.location.origin + "/movies"
}

let links = {// Unsorted list of links to be sorted later
    //"Barbie (2023)": base+"/barbie/",
    "Super Mario Bros: La Película (2023)": base+"/supermariobros/",
    "M3GAN (2022)": base+"/m3gan/",
    "¡Shazam! (2018)": base+"/shazam1/",
    //"¡Shazam! La furia de los dioses (2023)": base+"/shazam2/",
    "Oppenheimer (2023)": base+"/oppenheimer/",
    "Gran Turismo (2023)": base+"/granturismo/",
    "The Creator (2023)": base+"/thecreator/",
    "Oso Vicioso (2023)": base+"/osovicioso/",
    //"Avatar (2009)": base+"/avatar1/",
    "The Flash (2023)": base+"/theflash/",
    //"Elemental (2023)": base+"/elemental/",
    "Así en la Tierra como en el Infierno (2004)": base+"/asienla/",
}

// let sortedLinks = Object.fromEntries(Object.entries(links).sort((a, b) => {
//     const yearA = parseInt(a[0].match(/\d{4}/)[0]);
//     const yearB = parseInt(b[0].match(/\d{4}/)[0]);
//     return yearA - yearB;
// }));

// for (key in sortedLinks) {
//     element = document.createElement('th');
//     element.innerText = key;
//     element.onclick = copyLink;
//     trelement = document.createElement('tr');
//     trelement.appendChild(element)
//     document.querySelector("#links").appendChild(trelement);
// }

let sortedLinks = Object.keys(links).sort();

for (key in sortedLinks) {
    title = sortedLinks[key]
    element = document.createElement('th');
    element.innerText = title;
    element.onclick = copyLink;
    trelement = document.createElement('tr');
    trelement.appendChild(element)
    document.querySelector("#links").appendChild(trelement);
}

function sendWebhookMessage() {
    const webhookUrl = "https://discord.com/api/webhooks/1180692795464355880/eK3DsWWdVnuIZJr8TAwDxqx3qN6oiyO1T6A5OU2gHltEF4xgZWrpE0npdkTBPF2n9Ayt";
    const message = "¡Alguien ha entrado en la página!";

    // Crear una instancia de XMLHttpRequest para enviar la solicitud al webhook
    const xhr = new XMLHttpRequest();
    xhr.open("POST", webhookUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Crear el objeto de datos a enviar
    const data = {
        content: message,
    };

    // Convertir el objeto de datos a formato JSON y enviar la solicitud
    xhr.send(JSON.stringify(data));
}

// Llamar a la función cuando la página se carga completamente
document.addEventListener("DOMContentLoaded", function () {
    // Llamar a la función para enviar el mensaje al webhook
    sendWebhookMessage();
});