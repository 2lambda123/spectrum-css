import { LitElement } from "lit";
import Prism from "prismjs";

export default class CodePreview extends LitElement {
    // This allows us to use web component syntax without the shadow dom
    // we want this to act like a regular HTML element with external styles
    createRenderRoot() {
        return this;
    }

    constructor() {
        super();

        this.codeFormatter = Prism.highlight;

        this.clickHandler = this.clickHandler.bind(this);

        // Add the 'is-open' class to the markup container to get an accurate initial height
        if (!this.isOpen) this.isOpen = true;

        // Get the height of the markup container on first load
        const height = this.codeHeight;

        // Set the height to a variable so we can animate it later
        this.codeHeight = height;

        // Remove the 'is-open' class from the markup container if the rendered markup too tall
        // otherwise remove the toggle button b/c we won't need it
        if (height > 200) this.isOpen = false;
        else if (this.toggle) this.toggle.style.display = "none";

        this.markup.addEventListener("click", this.clickHandler);

        const observer = new MutationObserver(async (mutationList) => {
            for (const mutation of mutationList) {
                if (mutation.type === "childList") this.update();
            }
        });

        observer.observe(this.preview, { childList: true });
    }

    get preview() {
        return this.el.querySelector(".site-Example-preview");
    }

    get markup() {
        return this.el.querySelector(".site-Example-markup");
    }

    get toggle() {
        return this.el.querySelector(".site-Example-markupToggle");
    }

    get isOpen() {
        return this.markup.classList.contains("is-open");
    }

    set isOpen(state) {
        this.markup.classList.toggle("is-open", Boolean(state));
    }

    get codeHeight() {
        // Can't get the height if the container is collapsed; @todo render this offscreen?
        if (!this.isOpen) {
            return parseInt(this.markup.style.getPropertyValue("--site-example-markup-full-height"), 10);
        }
        return this.markup.getBoundingClientRect().height;
    }

    set codeHeight(height) {
        if (!this.markup) return;

        // Cast the height to an integer
        height = height ? parseInt(height, 10) : 0;
        if (height > 0) {
            this.markup.style.setProperty("--site-example-markup-height", `${height}px`);
        }
    }

    // document.addEventListener('markupChanged', (event) => {
    update() {
        if (!this.preview || !this.markup) return;

        const code = this.preview.innerHTML;
        if (this.codeFormatter) {
            this.markup.innerHTML = this.codeFormatter(code, Prism.languages.html, "html");
        } else {
            this.markup.innerHTML = code;
        }
    }

    clickHandler(event) {
        // Exit early if the user is trying to copy the code
        if (event.target.classList.contains("code-copy") || event.target.closest(".code-copy")) {
            // Open the markup container if it's not already open, so the user can see the code they're copying
            if (!this.isOpen) this.isOpen = true;

            return;
        }

        // Exit early if we can't determine the preview or markup container
        if (!this.markup) return;

        event.preventDefault();

        // Toggle the markup container
        this.isOpen = !this.isOpen;
        if (this.toggle) {
            this.toggle.innerHTML = this.isOpen ? "Hide markup" : "Show markup";
        }
    }
}

if (!customElements.get("code-preview")) {
    customElements.define("code-preview", CodePreview);
}
