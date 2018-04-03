const BinaryTreeNode = require('./BinaryTreeNode');

/**
 * 寻找两个结点最近公共祖先结点
 * @param {BinaryTreeNode} node 
 * @param {BinaryTreeNode} targetA
 * @param {BinaryTreeNode} targetB
 * @return {BinaryTreeNode}
 */
function findLCA(node, targetA, targetB) {
    if(!node) {
        return;
    }
    if(node === targetA || node === targetB) {
        return node;
    }
    let left = findLCA(node.lChild, targetA, targetB),
        right = findLCA(node.rChild, targetA, targetB);
    if(left && right) {
        return node;
    }
    return left ? left : right;
}

module.exports = findLCA;