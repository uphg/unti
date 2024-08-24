import addBefore from "../../packages/dom/addBefore";

describe('addBefore', () => {
  it('should insert newNode before el in the DOM tree', () => {
    document.body.innerHTML = '<div id="parent"><span id="el"></span></div>';
    const el = document.querySelector('#el');
    const newNode = document.createElement('div');
    newNode.id = 'newNode';
    const result = addBefore(el as Node, newNode);
    expect(result).toBe(newNode);
    expect(el?.previousElementSibling).toBe(newNode);
    expect(document.getElementById('parent')?.children[0]).toBe(newNode);
  });

  it('should return null if el is null', () => {
    const div = document.createElement('div')
    const result = addBefore(null as any, div);
    expect(result).toBeNull();
  });

  it('should return null if el does not have a parentNode', () => {
    const el = document.createElement('div');
    const newNode = document.createElement('div');
    const result = addBefore(el, newNode);
    expect(result).toBeNull();
  });
});