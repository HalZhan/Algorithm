/**
 * 深度优先遍历
 * @param {[][]} map 
 * @param {function} [iteratee] 
 */
export default function DFS(map = [], iteratee) {
    const search = function (map = [], start = 0, visited = {}, iteratee) {
        visited[start] = 1;
        for (let j = 0; j < map.length; j++) {
            if (!visited[j] && map[start][j] === 1) {
                if (typeof iteratee === 'function') {
                    iteratee(j);
                }
                search(map, start, visited, iteratee);
            }
        }
    }
    let visited = {};
    for (let j = 0; j < map.length; j++) {
        if (!visited[j]) {
            search(map, j, visited, iteratee);
        }
    }
}