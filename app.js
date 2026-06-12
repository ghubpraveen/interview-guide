const sections = [];

function render() {

    const container =
        document.getElementById("content");

    container.innerHTML =
        sections.map((section, sectionIndex) => {

            const sectionId =
                `section-${sectionIndex}`;

            return `

                <div class="section">

                    <div
                        class="section-title"
                        onclick="toggleSection('${sectionId}')"
                    >
                        ${section.icon} ${section.title}
                    </div>

                    <div
                        id="${sectionId}"
                        class="section-content"
                        style="display:none;"
                    >

                        ${section.questions.map((q, idx) => {

                            const questionId =
                                `${sectionId}-q-${idx}`;

                            return `

                                <div class="question">

                                    <div
                                        class="question-title"
                                        onclick="event.stopPropagation(); toggleAnswer('${questionId}')"
                                    >
                                        <span>
                                            ❓ ${q.question}
                                        </span>

                                        <span>
                                            ▼
                                        </span>
                                    </div>

                                    <div
                                        id="${questionId}"
                                        class="answer"
                                        style="display:none;"
                                    >
                                        ${q.answer}
                                    </div>

                                </div>

                            `;
                        }).join("")}

                    </div>

                </div>

            `;

        }).join("");
}

window.toggleSection = function(id) {

    const el = document.getElementById(id);

    if (!el) return;

    el.style.display =
        el.style.display === "none"
            ? "block"
            : "none";
};

window.toggleAnswer = function(id) {

    const el =
        document.getElementById(id);

    if (el.style.display === "none") {

        el.style.display = "block";

    } else {

        el.style.display = "none";
    }
};


async function loadData() {

    const modules = await Promise.all([

        import("./data/hr.js"),

        import("./data/experience.js"),

        import("./data/jenkins.js"),

        import("./data/kubernetes.js"),

        import("./data/kubernetesTroubleshooting.js"),

        import("./data/performanceEngineering.js"),

        import("./data/terraform.js"),

        import("./data/aws.js"),

        import("./data/gcp.js"),

        import("./data/sre.js"),

        import("./data/incidentManagement.js"),

        import("./data/linux.js"),

        import("./data/scenarioBased.js"),

        import("./data/bash.js"),

        import("./data/python.js"),

        import("./data/terraformScripts.js")

    ]);

    sections.push(

        ...modules
            .filter(m => m.default)
            .map(m => m.default)

    );

    render();

    document
    .querySelectorAll(".section-content")
    .forEach(el => {
        el.style.display = "none";
    });
}

loadData();
