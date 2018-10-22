export const setupTreeData = (path, renderData, fullPath, fullRenderData, price, id) => {
    // If we find the first index of path, slice the array and move on to check the next index of path in the next nesting of renderData
    if (renderData[path[0]]) return setupTreeData(path.slice(1), renderData[path[0]], fullPath, fullRenderData, price, id);
    // This index of path is not found in current renderData object and is not the item name, so we need to create an empty object and recurse to nest deeper
    if (path.length > 1) {
        renderData[path[0]] = {};
        return setupTreeData(path.slice(1), renderData[path[0]], fullPath, fullRenderData, price, id);
    }
    // Reached the last index in path, which is always the item. Set the item ID and price as value
    renderData[path[0]] = [id, price];
    return fullRenderData;
}