"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createDummyElement(text, options) {
    var element = document.createElement('div');
    var textNode = document.createTextNode(text);
    element.appendChild(textNode);
    element.style.fontFamily = options.font;
    element.style.fontSize = options.fontSize;
    element.style.fontWeight = options.fontWeight;
    element.style.position = 'absolute';
    element.style.visibility = 'hidden';
    element.style.left = '-999px';
    element.style.top = '-999px';
    element.style.width = options.width;
    element.style.height = 'auto';
    element.style.wordBreak = options.wordBreak;
    document.body.appendChild(element);
    return element;
}
function destroyElement(element) {
    element.parentNode.removeChild(element);
}
var cache = {};
exports.default = (function (text, options) {
    if (options === void 0) { options = {}; }
    var cacheKey = JSON.stringify({ text: text, options: options });
    if (cache[cacheKey]) {
        return cache[cacheKey];
    }
    options.font = options.font || 'Times';
    options.fontSize = options.fontSize || '16px';
    options.fontWeight = options.fontWeight || 'normal';
    options.width = options.width || 'auto';
    options.wordBreak = options.wordBreak || 'normal';
    var element = createDummyElement(text, options);
    var size = {
        width: element.offsetWidth,
        height: element.offsetHeight,
    };
    destroyElement(element);
    cache[cacheKey] = size;
    return size;
});
