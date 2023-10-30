export default class Rating {
    constructor(el) {
        if (!el) return;

        this.el = el;

        this.icons.forEach((el, idx) => new RatingItem(el, { idx, parent: this }));

        this.focusinHandler = this.focusinHandler.bind(this);
        this.focusoutHandler = this.focusoutHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);

        this.el.addEventListener("focusin", this.focusinHandler);
        this.el.addEventListener("focusout", this.focusoutHandler);
        this.el.addEventListener("change", this.changeHandler);
    }

    get input() {
        return this.el.querySelector(".spectrum-Rating-input");
    }

    get icons() {
        return [...this.el.querySelectorAll(".spectrum-Rating-icon")];
    }

    get isReadOnly() {
        return this.input.classList.contains("is-readOnly");
    }

    get isFocused() {
        return this.el.classList.contains("is-focused");
    }

    set isFocused(state) {
        this.el.classList.toggle("is-focused", state);
    }

    set value(input) {
        const parsedInput = parseInt(input, 10);
        if (this.isReadOnly || this.value === parsedInput) return;
        this.input.value = parsedInput;
    }

    get value() {
        return parseInt(this.input.value, 10);
    }

    focusinHandler() {
        if (!this.el) return;
        this.isFocused = true;
    }

    focusoutHandler() {
        if (!this.el) return;
        this.isFocused = false;
    }

    changeHandler(event) {
        if (!this.el || !this.input || this.isReadOnly) return;

        event.preventDefault();

        this.icons.forEach((icon, index) => {
            icon.isSelected = index <= parsedInput - 1;
            icon.isCurrentValue = index === parsedInput - 1;
        });
    }
}

export class RatingItem {
    constructor(el, options = {}) {
        if (!el) return;
        this.el = el;
        this.index = options.idx;
        this.parent = options.parent;
    }

    set isSelected(state) {
        this.el.classList.toggle("is-selected", state);
    }

    get isSelected() {
        return this.el.classList.contains("is-selected");
    }

    set isCurrentValue(state) {
        this.el.classList.toggle("is-currentValue", state);
    }

    get isCurrentValue() {
        return this.el.classList.contains("is-currentValue");
    }

    clickHandler() {
        if (!this.el) return;
        this.parent.value = this.index;
    }
}
