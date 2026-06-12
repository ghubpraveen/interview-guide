const sections = [];

function render() {


const container =
    document.getElementById("content");

container.innerHTML =
    ${section.questions.map((q, idx) => `

    <div class="question">

        <div
            class="question-title"
            onclick="toggleAnswer('${section.title}-${idx}')"
        >
            ❓ ${q.question}
        </div>

        <div
            id="${section.title}-${idx}"
            class="answer"
            style="display:none;"
        >
            ${q.answer}
        </div>

    </div>

    `).join("")}


}

async function loadData() {


const hr =
    await import("./data/hr.js");

sections.push(hr.default);

render();


}

loadData();
