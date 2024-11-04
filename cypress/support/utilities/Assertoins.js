
class Assertions {

    assertElementIsVisible(element) {
        element.should('be.visible');
    }
}
export const assertions = new Assertions();