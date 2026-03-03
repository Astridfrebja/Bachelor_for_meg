document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const dropdown = document.getElementById("dropdownMenu");

    hamburger.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    dropdown.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    document.addEventListener("click", function () {
        dropdown.classList.remove("active");
        hamburger.classList.remove("active");
    });


    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    if (!searchInput || !searchResults) return;

    const pages = [
        { title: "Palliativ pasient meldt inn til kommunen", url: "gronne_bobler/pasient_meldt.html" },
        { title: "Mottak av pasient", url: "gronne_bobler/mottak_pasient.html" },
        { title: "Tilbud om forhåndssamtale", url: "gronne_bobler/tilbud.html" },
        { title: "Pasient død hjemme", url: "gronne_bobler/pasient_dod.html" },
        { title: "Fastlege", url: "hamburger_innhold/fastlege.html" },
        { title: "Palliativt team", url: "hamburger_innhold/palliativt_team.html" },
        { title: "Kompetansesenter i lindrende behandling", url: "hamburger_innhold/kompetansesenter.html" },
        { title: "Kreftkoordinator/Demenskoordinator/AKS", url: "hamburger_innhold/kreftkoordinator.html" },
        { title: "Kreftomsorg Rogaland", url: "hamburger_innhold/kreftomsorg.html" },
        { title: "Ressurssykepleier", url: "hamburger_innhold/ressurssykepleier.html" },
        { title: "Våketjeneste", url: "hamburger_innhold/vaaketjeneste.html" }

    ];

    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        searchResults.innerHTML = "";

        if (query.length === 0) {
            searchResults.style.display = "none";
            return;
        }

        const filtered = pages.filter(page =>
            page.title.toLowerCase().includes(query)
        );

        filtered.forEach(page => {
            const div = document.createElement("div");
            div.textContent = page.title;
            div.addEventListener("click", () => {
                window.location.href = page.url;
            });
            searchResults.appendChild(div);
        });

        searchResults.style.display = filtered.length ? "flex" : "none";
    });
    document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-container")) {
        searchResults.style.display = "none";
    }
});

});