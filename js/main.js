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
            }
            catch {
                this.stoperror()
            }
            try {
            this.$highlightedAtelier.innerHTML = this.generateHTMLforHighlightedAtelier();
            }
            catch {
                this.stoperror()
            }
            try {
            this.$Atelier.innerHTML = this.generateHTMLforAtelier();
            }
            catch {
                this.stoperror()
            }
            try {
            this.$PressReleases.innerHTML = this.generateHTMLforPressReleases();
            }
            catch {
                this.stoperror()
            }
            try {
            this.$InPress.innerHTML = this.generateHTMLforInPress();
            }
            catch {
                this.stoperror()
            }
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

        addEventListeners() {

        },
        cacheElements() {
            this.$highlightedArt = document.querySelector(".index_highlighted_art_dynamic")
            this.$highlightedAtelier = document.querySelector(".index_highlighted_atelier_dynamic")
            this.$Atelier = document.querySelector(".Atelier_dynamic")
            this.$PressReleases = document.querySelector(".press_release_articles")
            this.$InPress = document.querySelector(".in_press_articles")
        },
        stoperror() {
            return true;
        }
    };
    app.initialize();



})();

