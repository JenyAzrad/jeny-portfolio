// Some browser extensions (translators, dictionaries, dark-mode tools...) wrap or move text nodes inside the page.
// React then fails with "removeChild / insertBefore: node is not a child of this node" and the page goes blank.
// This is the widely used workaround: ignore those operations when the DOM was changed behind React's back.
export function installDomGuard() {
  if (typeof Node !== "function" || !Node.prototype || Node.prototype.__guarded) return;
  const removeChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function (child) {
    if (child.parentNode !== this) return child;
    return removeChild.apply(this, arguments);
  };
  const insertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function (newNode, referenceNode) {
    if (referenceNode && referenceNode.parentNode !== this) return newNode;
    return insertBefore.apply(this, arguments);
  };
  Node.prototype.__guarded = true;
}
