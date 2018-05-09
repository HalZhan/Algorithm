/**
 * 广度优先遍历
 * @param {[][]} map 
 * @param {function} [iteratee] 
 */
export default function BFS(map = [], iteratee) {
    const search = function (map = [], start = 0, visited = {}, iteratee) {
        let que = [start];
        visited[start] = 1;
        while (que.length) {
            let front = que.shift();
            for (let j = 0; j < map.length; j++) {
                if (!visited[j] && map[front][j] === 1) {
                    visited[j] = 1;
                    que.push(j);
                    if (typeof iteratee === 'function') {
                        iteratee(j);
                    }
                }
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