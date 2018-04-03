const BinaryTreeNode = require('./BinaryTreeNode');

/**
 * 中序遍历（左->根->右）
 * @param {BinaryTreeNode} treeNode 
 * @param {function} iteratee
 */
function inOrder(treeNode, iteratee) {
    if(treeNode) {
        inOrder(treeNode.lChild, iteratee);
        if(typeof iteratee === 'function') {
            iteratee.call(undefined, treeNode);
        }
        inOrder(treeNode.rChild, iteratee);
    }
}

module.exports = inOrder;