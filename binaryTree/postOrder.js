const BinaryTreeNode = require('./BinaryTreeNode');

/**
 * 后序遍历（左->右->根）
 * @param {BinaryTreeNode} treeNode 
 * @param {function} iteratee
 */
function postOrder(treeNode, iteratee) {
    if(treeNode) {
        postOrder(treeNode.lChild, iteratee);
        postOrder(treeNode.rChild, iteratee);
        if(typeof iteratee === 'function') {
            iteratee.call(undefined, treeNode);
        }
    }
}

module.exports = postOrder;