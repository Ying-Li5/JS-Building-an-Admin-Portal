async function updateShinobi() {
    const shinobi = document.getElementById("shinobi").value
    let response = await fetch('http://localhost:3000/updateBook', {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": 1,
            "quantity": shinobi,
        })
    });
}

async function updateDog() {
    const dog = document.getElementById("dog").value
    let response = await fetch('http://localhost:3000/updateBook', {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": 2,
            "quantity": dog,
        })
    });
}

async function updateArathrae() {
    const arathrae = document.getElementById("arathrae").value
    let response = await fetch('http://localhost:3000/updateBook', {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": 3,
            "quantity": arathrae,
        })
    });
}

async function updateWarp() {
    const warp = document.getElementById("warp").value
    let response = await fetch('http://localhost:3000/updateBook', {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": 4,
            "quantity": warp,
        })
    });
}