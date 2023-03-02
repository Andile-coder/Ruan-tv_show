// const data = require("./demo.json"); //tv shows
//
const tvShowContainer = document.getElementById("tv_shows");
const filterInputTag = document.getElementById("filterTvShows");
const modalTag = document.getElementById("modal_container");
let modalTitle = document.getElementById("modal_h1");
let modalClose = document.getElementById("modal_close");
modalClose.addEventListener("click", () => (modalTag.style.display = "none"));
//"https://api.tvmaze.com/shows
let tvShows = [];

const createTVshow = () => {
  let indiv = [
    {
      id: 1,
      url: "https://www.tvmaze.com/shows/1/under-the-dome",
      name: "Under the Dome",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Science-Fiction", "Thriller"],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2013-06-24",
      ended: "2015-09-10",
      officialSite: "http://www.cbs.com/shows/under-the-dome/",
      schedule: { time: "22:00", days: ["Thursday"] },
      rating: { average: 6.5 },
      weight: 98,
      network: {
        id: 2,
        name: "CBS",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: "https://www.cbs.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: { tvrage: 25988, thetvdb: 264492, imdb: "tt1553656" },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
      },
      summary:
        "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
      updated: 1631010933,
      _links: {
        self: { href: "https://api.tvmaze.com/shows/1" },
        previousepisode: { href: "https://api.tvmaze.com/episodes/185054" },
      },
    },
  ];

  // show_item div
  let showItem = document.createElement("div");
  showItem.className = "show_item";
  //h4
  let showHeader = document.createElement("h4");
  showHeader.innerText = indiv[0].name;
  //image
  let showImage = document.createElement("img");
  showImage.src = indiv[0].image.medium;
  showImage.alt = "tv show";
  //structuring
  showItem.appendChild(showHeader);
  showItem.appendChild(showImage);
  tvShowContainer.appendChild(showItem);
};

const createTVshows = (tvShowData) => {
  // show_item div
  while (tvShowContainer.firstChild) {
    tvShowContainer.removeChild(tvShowContainer.lastChild);
  }
  tvShowData.forEach((show) => {
    let showItem = document.createElement("div");
    showItem.className = "show_item";
    //h4
    let showHeader = document.createElement("h4");
    showHeader.innerText = show.name;
    //image
    let showImage = document.createElement("img");
    showImage.src = show?.image?.medium;
    showImage.alt = "tv show";
    //structuring
    showItem.appendChild(showHeader);
    showItem.appendChild(showImage);
    showItem.addEventListener("click", () => {
      fetchSeasons(show.id);
      modalTag.style.display = "block";
      modalTitle.innerText = show.name;
    });
    tvShowContainer.appendChild(showItem);
  });
};

const createFilteredTVshows = (tvShowData) => {
  // show_item div
  while (tvShowContainer.firstChild) {
    tvShowContainer.removeChild(tvShowContainer.lastChild);
  }

  tvShowData.forEach((elem) => {
    let showItem = document.createElement("div");
    showItem.className = "show_item";
    //h4
    let showHeader = document.createElement("h4");
    showHeader.innerText = elem.show.name;
    //image
    let showImage = document.createElement("img");
    showImage.src = elem?.show?.image?.medium;
    showImage.alt = "tv show";
    //structuring
    showItem.appendChild(showHeader);
    showItem.appendChild(showImage);
    showItem.addEventListener("click", () => {
      fetchSeasons(show.id);
      modalTag.style.display = "block";
      modalTitle.innerText = show.name;
    });
    tvShowContainer.appendChild(showItem);
  });
};

const modalContainerCont = document.getElementsByClassName(
  "modal_container_cont"
)[0];
const seasonsList = document.getElementById("seasons_list");
const createModal = (seasons) => {
  while (seasonsList.firstChild) {
    seasonsList.removeChild(seasonsList.lastChild);
  }
  seasons?.forEach((season) => {
    let seasonDiv = document.createElement("div");
    seasonDiv.className = "season";
    seasonDiv.innerHTML = `<div><img src="" alt=""></div><h4>Season ${season.number}</h4>`;
    seasonsList.appendChild(seasonDiv);
  });
};
const fetchSeasons = (show_id) => {
  fetch(`https://api.tvmaze.com/shows/${show_id}/seasons`)
    .then((response) => response.json())
    .then((res) => createModal(res));
};

const fetchTvShows = () => {
  fetch("https://api.tvmaze.com/shows")
    .then((response) => response.json())
    .then((res) => createTVshows(res));
};

const filterShows = (search_string) => {
  fetch(`https://api.tvmaze.com/search/shows?q=${search_string}`)
    .then((response) => response.json())
    .then((res) => createFilteredTVshows(res));
};
filterInputTag.addEventListener("change", (e) => {
  // if (e.target.value != "") {
  //   filterShows(e.target.value)
  // } else {
  //   fetchTvShows();
  // }

  e.target.value != "" ? filterShows(e.target.value) : fetchTvShows();
});

//

window.onload = fetchTvShows();
