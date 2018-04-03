const BinaryTreeNode = require('./BinaryTreeNode');

/**
 * 完全二叉树的内容按一定次序输出到数组
 * @param {BinaryTreeNode} root 根结点
 * @param {function} [order] 遍历方式
 * @return {array}
 */
function treeToArray(root, order = require('./inOrder')) {
    let result = [];
    if(typeof order === 'function') {
        order(root, (node) => {
            result.push(node.value);
        })
    }
    return result;
}

module.exports = treeToArray;