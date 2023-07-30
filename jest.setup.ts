Element.prototype.scrollIntoView = jest.fn();
window.ResizeObserver = class {
  observe() {}
  disconnect() {}
  unobserve() {}
};

export {};