(() => {

    const app = {
        initialize() {
            this.cacheElements();
            this.buildUI();
            this.addEventListeners();
        },
        buildUI() {
            try {
                this.$highlightedArt.innerHTML = this.generateHTMLforHighlightedArt();
            } catch {
                this.stoperror();
            }
            try {
                this.$highlightedAtelier.innerHTML = this.generateHTMLforHighlightedAtelier();
            } catch {
                this.stoperror();
            }
            try {
                this.$Atelier.innerHTML = this.generateHTMLforAtelier();
            } catch {
                this.stoperror();
            }
            try {
                this.$PressReleases.innerHTML = this.generateHTMLforPressReleases();
            } catch {
                this.stoperror();
            }
            try {
                this.$InPress.innerHTML = this.generateHTMLforInPress();
            } catch {
                this.stoperror();
            }
            try {
                this.$art_cards.innerHTML = this.generateHTMLforArtCards();
            } catch {
                this.stoperror();
            }
            try {
                this.$allFilters.innerHTML = this.generateHTMLforFilters();
            } catch {
                this.stoperror();
            }
            setInterval(function () {
                try {
                    app.$Clocks.forEach(element => {
                        element.innerHTML = app.generateHTMLforClocks()
                    });
                } catch {
                    this.stoperror;
                }
            }, 1000);
        },
        generateHTMLforHighlightedArt() {
            let tempArr = ARTS.filter(artItem => artItem.highlight === true);
            return tempArr.map((element) => {
                return `
            <div class="highlighted_art_article dynamic_article">
            <img src="static/img/art/afbeeldingen/${element.images[0]}" alt="hihglighted art image" loading="lazy">
            <p class="gray_sub_title">${element.tags.join('/')} — ${element.location}</p>
            <h2>${element.title}</h2>
            <p>${element.description}</p>
            <a href="art-and-exhibitions/detail/index.html">Learn more</a>
            </div>
            `
            });
        },
        generateHTMLforHighlightedAtelier() {
            let tempArr = ATELIER.slice(0, 3);
            return tempArr.map((element) => {
                return `
            <div class="highlighted_atelier_article dynamic_article">
            <img src="static/img/atelier/${element.images[0]}" alt="highlighted atelier image" loading="lazy">
            <p class="gray_sub_title">${element.subtitle}</p>
            <h2>${element.title}</h2>
            <p>${element.description}</p>
            <a href="atelier-studio/detail/index.html">${element.link}</a>
            </div>
            `
            });
        },
        generateHTMLforAtelier() {
            let tempArr = ATELIER;
            return tempArr.map((element) => {
                return `
            <div class="atelier_article dynamic_article">
            <img src="static/img/atelier/${element.images[0]}" alt="atelier image" loading="lazy">
            <p class="gray_sub_title">${element.subtitle}</p>
            <h2>${element.title}</h2>
            <p>${element.description}</p>
            <a href="atelier-studio/detail/index.html">${element.link}</a>
            </div>
            `
            });
        },
        generateHTMLforPressReleases() {
            let tempArr = PRESS.filter(pressItem => pressItem.type === "press release");
            return tempArr.map((element) => {
                return `
            <div class="press_release_article dynamic_article">
            <img src="static/img/press/${element.images}" alt="press image" loading="lazy">
            <p class="gray_sub_title">${element.subtitle}</p>
            <h2>${element.title}</h2>
            <p>${element.description}</p>
            <a href="atelier-studio/detail/index.html">${element.link}</a>
            </div>
            `
            });
        },
        generateHTMLforInPress() {
            let tempArr = PRESS.filter(pressItem => pressItem.type === "in the press");
            return tempArr.map((element) => {
                return `
            <div class="in_the_press_article dynamic_article">
            <img src="static/img/press/${element.images}" alt="press image" loading="lazy">
            <p class="gray_sub_title">${element.subtitle}</p>
            <h2>${element.title}</h2>
            <p>${element.description}</p>
            <a href="atelier-studio/detail/index.html">${element.link}</a>
            </div>
            `
            });
        },
        generateHTMLforClocks() {
            let today = new Date();
            return `
            <p>${today.getHours()}:${today.getMinutes()}</p>
            `
        },
        generateHTMLforFilters() {
            return `
            <ul class="filter_category filter flex">
            <li class="filter_none"><p>Show all</p></li>
            ${this.artCategoryList.map(element => {
                return `<li class="filter_item" data-id="${element}"><p>${element}</p></li>
                `
            }).join("")}
            </ul>

            <ul class="filter_year filter flex">
            ${this.artYearList.map(element => {
                return `<li><a href="art-and-exhibitions/index.html#${element}">${element}</a></li>
                `
            }).join("")}
            </ul>
            `

        },
        generateHTMLforArtCards() {
            return this.artYearList.map(year => {
                return `
                <h2 class="year_title" id="${year}">${year}</h2>
                ${(ARTS.filter(artItem => artItem.year === year)).map(element => {
                    return `
                    <div class="art_card flex">
                    <div class="art_card_text">
                    <h2>${element.title}</h2>
                    <h3>${element.subtitle}</h3>
                    <h3 class="gray_sub_title">${element.tags.join(" / ")}${element.location === null ? "" : ` — ${element.location}` }</h3>
                    </div>
                    <div class="art_card_img_container flex">
                    ${element.images.map( image => {
                        return `
                        <a href="art-and-exhibitions/detail/index.html"> <img src="static/img/art/afbeeldingen/${image}" class="art_card_image" alt="press image" loading="lazy"> </a>
                        `
                    }).join("")}
                    </div>
                    </div>
                    `
                }).join("")
                
                }
                `
            }).join("")
        },
        addEventListeners() {
            let showall = document.querySelector(".filter_none")
            let filterItems = document.querySelectorAll(".filter_item")
            filterItems.forEach(element => {
                element.addEventListener("click", (e) => {
                    this.$art_cards.innerHTML = this.artYearList.map(year => {
                        return `
                        <h2 class="year_title" id="${year}">${year}</h2>
                        ${((ARTS.filter(artItem => artItem.year === year)).filter( artItem => artItem.tags.indexOf(`${element.dataset.id}`) > -1)).map(art => {
                            return `
                            <div class="art_card flex">
                            <div class="art_card_text">
                            <h2>${art.title}</h2>
                            <h3>${art.subtitle}</h3>
                            <h3 class="gray_sub_title">${art.tags.join(" / ")}${art.location === null ? "" : ` — ${art.location}` }</h3>
                            </div>
                            <div class="art_card_img_container flex">
                            ${art.images.map( image => {
                                return `
                                <a href="art-and-exhibitions/detail/index.html"> <img src="static/img/art/afbeeldingen/${image}" class="art_card_image" alt="press image" loading="lazy"> </a>
                                `
                            }).join("")}
                            </div>
                            </div>
                            `
                        }).join("")
                        
                        }
                        `
                    }).join("")
                });
            });
            showall.addEventListener("click", () => {
                this.$art_cards.innerHTML = this.generateHTMLforArtCards();
            })
        

        },
        cacheElements() {
            this.$highlightedArt = document.querySelector(".index_highlighted_art_dynamic");
            this.$highlightedAtelier = document.querySelector(".index_highlighted_atelier_dynamic");
            this.$Atelier = document.querySelector(".Atelier_dynamic");
            this.$PressReleases = document.querySelector(".press_release_articles");
            this.$InPress = document.querySelector(".in_press_articles");
            this.$Clocks = document.querySelectorAll(".clock");
            let Years = [];
            let Categories = [];
            this.genYears = (ARTS.forEach(art => {
                Years.push(art.year)
            }));
            this.genCats = (ARTS.forEach(art => {
                Categories.push(...art.tags)
            }));
            this.artCategoryList = [...new Set(Categories)].sort();
            this.artYearList = [...new Set(Years)].sort().reverse();
            this.$allFilters = document.querySelector(".all_filters");
            this.$art_cards = document.querySelector(".art_cards");
        },
        stoperror() {
            return true;
        }
    };
    app.initialize();



})();