
  // GitHub Feed

const githubUser = "bernardlawes";
//const token = ""; // Replace with your token
const token = ""; // Replace with your token

fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=17`, {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(data => {
    if (!Array.isArray(data)) {
      console.error("GitHub API error:", data);
      return;
    }

    const container = document.getElementById("githubFeed");
    data.forEach(repo => {
      if (repo.name === githubUser) return;
      if (repo.name === "personal-profile") return;
      if (repo.name.includes("csharp")) return;

      const repoCard = document.createElement("div");
      repoCard.className = "bg-white dark:bg-gray-800 p-4 rounded shadow";

      const title = `<h3 class="text-lg  mb-1">
        <a href="${repo.html_url}" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">${repo.name}</a>
      </h3>`;

      const description = `<p class="text-sm mb-2">${repo.description || "No description provided."}</p>`;

      repoCard.innerHTML = title + description;

      fetch(repo.languages_url, {
        headers: {
          Authorization: `token ${token}`
        }
      })
        .then(langRes => langRes.json())
        .then(languages => {
          const langList = Object.keys(languages);
          if (langList.length > 0) {
            const langs = langList.map(lang => `<span class='inline-block bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1'>${lang}</span>`).join(" ");
            const langWrapper = document.createElement("div");
            langWrapper.className = "mt-2 flex flex-wrap items-center text-xs text-gray-600 dark:text-gray-300";
            langWrapper.innerHTML = langs;
            repoCard.appendChild(langWrapper);
          }
        });

      container.appendChild(repoCard);
    });



  });


  