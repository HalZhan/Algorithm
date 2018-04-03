const findLCA = require('./findLCA');
const BinaryTreeNode = require('./BinaryTreeNode');

/**
 * 获得两个结点之间相差的层次
 * @param {BinaryTreeNode} node 
 * @param {BinaryTreeNode} target 
 * @return {number}
 */
function getLevel(node, target) {
    if (!node) {
        return -1;
    }
    if (node === target) {
        return 0;
    }
    let level = getLevel(node.lChild, target);
    if (level === -1) {
        level = getLevel(node.rChild, target);
    }
    if (level !== -1) {
        return level + 1;
    }
    return -1;
}

/**
 * 获得两个结点的距离
 * @param {BinaryTreeNode} node 
 * @param {BinaryTreeNode} targetA
 * @param {BinaryTreeNode} targetB 
 * @param {number}
 */
function getDistance(node, targetA, targetB) {
    let lca = findLCA(node, targetA, targetB);
    return getLevel(lca, targetA) + getLevel(lca, targetB);
}

module.exports = getDistance;