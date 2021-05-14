const log = console.log


const data = [
    { id: 56, parentId: 62 },
    { id: 81, parentId: 80 },
    { id: 74, parentId: null },
    { id: 76, parentId: 80 },
    { id: 63, parentId: 62 },
    { id: 80, parentId: 86 },
    { id: 87, parentId: 86 },
    { id: 62, parentId: 74 },
    { id: 86, parentId: 74 },
];

const idMapping = data.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
}, {});

log(idMapping)

let root;
data.forEach(el => {

    if (el.parentId === null) {
        root = el;
        return;
    }
    const parentEl = data[idMapping[el.parentId]];
    parentEl.children = [...(parentEl.children || []), el];
    log(`parentEl= ${parentEl}`)
});

log(root)
log(idMapping)