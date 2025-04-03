const counter = document.querySelector(".counter");
async function updateCounter() {
    let response = await fetch("https://moykqsqje6qienazkjksvelqaa0dgfyq.lambda-url.us-east-1.on.aws/")
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;

}

updateCounter();