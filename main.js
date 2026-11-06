const ceny = {
    bumaga: {
        "Обычная": 1.5,
        "Повышенной белизны": 2.5,
        "Мелованная": 4,
        "Дизайнерская": 6
    },
    tsvet: {
        "1-0": { shablon: 100, pechat: 15 },
        "1-1": { shablon: 150, pechat: 25 },
        "4-0": { shablon: 200, pechat: 60 },
        "4-1": { shablon: 210, pechat: 85 },
        "4-4": { shablon: 220, pechat: 112 }
    }
};

const poleKolichestvo = document.querySelector("#qty");
const poleBumaga = document.querySelector("#paper");
const poleTsvet = document.querySelector("#color");
const vyvodItog = document.querySelector("#price");

for (const nazvanie in ceny.bumaga) poleBumaga.add(new Option(nazvanie));
for (const nazvanie in ceny.tsvet) poleTsvet.add(new Option(nazvanie));

function raschet() {
    const shtuk = Math.max(30, +poleKolichestvo.value || 0);
    const listov = Math.ceil(shtuk / 30);
    const cenaBumagi = ceny.bumaga[poleBumaga.value];
    const cenaTsveta = ceny.tsvet[poleTsvet.value];
    return cenaTsveta.shablon + (cenaBumagi + cenaTsveta.pechat) * listov;
}

function pokazat() {
    vyvodItog.value = raschet().toLocaleString("ru-RU") + " ₽";
}

document.querySelectorAll("#qty, #paper, #color").forEach(pole => {
    pole.addEventListener("input", pokazat);
});

pokazat();