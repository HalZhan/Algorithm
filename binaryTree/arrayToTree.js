const BinaryTreeNode = require('./BinaryTreeNode');

/**
 * 将数组中的内容输出到树
 * @param {array} array 数组
 * @param {number} [index=0] 起始索引
 * @return {BinaryTreeNode}
 */
function arrayToTree(array = [], index = 0) {
    let node = null, length = array.length;
    if (length && index < length) {
        node = new BinaryTreeNode(array[index]);
        node.lChild = arrayToTree(array, index * 2 + 1);
        node.rChild = arrayToTree(array, index * 2 + 2);
    }
    return node;
}

module.exports = arrayToTree;