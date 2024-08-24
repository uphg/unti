import { addAfter } from "../../packages/dom/dom";

describe("addAfter", () => {
  let a: Element, b: Element, c: Element, d: Element;
  beforeAll(() => {
    a = document.createElement("a");
    b = document.createElement("b");
    c = document.createElement("c");
    d = document.createElement("d");
  })
  it("should add a node after the target node", () => {
    a.appendChild(b);
    addAfter(b, c);
    expect(a.childNodes.length).toBe(2);
    expect(a.childNodes[0]).toBe(b);
    expect(a.childNodes[1]).toBe(c);
  })

  it("should add a node after the target node when the target node has no parent", () => {
    addAfter(c, d);
    expect(c.nextSibling).toBe(d);
  })

  it("should add a node after the target node when the target node is the last node", () => {
    a.appendChild(b);
    a.appendChild(c);
    addAfter(c, d);
    expect(a.childNodes.length).toBe(3);
    expect(a.childNodes[2]).toBe(d);
  })

  it("should not add a node after the target node when the target node does not exist", () => {
    b.remove();
    addAfter(b, d);
    expect(b.nextSibling).toBeNull();
  })

  it("should not add a node after the target node when the target node is not a Node", () => {
    addAfter(1 as any, d);
    expect(d.nextSibling).toBeNull();
  })
})
