class Actions {
    click(element) {
        return element.click();
    }

    type(element, text) {
        return element.type(text)
    }
}
export const actions = new Actions();