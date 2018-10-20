export const setupTreeData = (path, renderData, fullPath, fullRenderData, price, id) => {
    if (renderData[path[0]]) return setupTreeData(path.slice(1), renderData[path[0]], fullPath, fullRenderData, price, id);
    if (path.length > 1) {
        renderData[path[0]] = {};
        return setupTreeData(path.slice(1), renderData[path[0]], fullPath, fullRenderData, price, id);
    }
    renderData[path[0]] = [id, price];
    return fullRenderData;
}