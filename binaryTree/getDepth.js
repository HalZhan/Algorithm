const BinaryTreeNode = require('./BinaryTreeNode');

/**
 * 获得深度
 * @param {BinaryTreeNode} treeNode 
 * @return {number}
 */
function getDepth(treeNode) {
    if(treeNode) {
        let lDepth = getDepth(treeNode.lChild) + 1,
            rDepth = getDepth(treeNode.rChild) + 1;
        return Math.max(lDepth, rDepth);
    }
    else {
        return 0;
    }
}

module.exports = getDepth;