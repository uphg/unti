import addClass from "../../packages/dom/addClass";

describe("addClass", () => {
  let el: HTMLElement
  beforeEach(() => {
    el = document.createElement("div");
  })
  
  it("add string args", () => {
    addClass(el, "a", "b", "c");
    expect(el.className).toBe('a b c')
  })

  it("add array and string", () => {
    addClass(el, ["d", "e"], "f");
    expect(el.className).toBe('d e f')
  })

  it("add arrays", () => {
    addClass(el, ["g", "h"], ["i", "j"]);
    expect(el.className).toBe('g h i j')
  })
})
