const BinaryTreeNode = require('./BinaryTreeNode');

/**
 * 前序遍历（根->左->右）
 * @param {BinaryTreeNode} treeNode 
 * @param {function} iteratee
 */
function preOrder(treeNode, iteratee) {
    if(treeNode) {
        if(typeof iteratee === 'function') {
            iteratee.call(undefined, treeNode);
        }
        preOrder(treeNode.lChild, iteratee);
        preOrder(treeNode.rChild, iteratee);
    }
}

module.exports = preOrder;