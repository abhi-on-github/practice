class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }

    addChild = data => {
        this.children.push(new Node(data));
    }

    removeChild = data => {
        this.children = this.children.filter(child => child.data !== data);
    }
}


class Tree {
    constructor(){
        this.root = null;
    }

    traverseBf = fn => {
        let arr = [this.root]
        while(arr.length){
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDf = fn => {
        let arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

const t = new Tree();
t.root = new Node('a');
t.root.addChild('b');
t.root.addChild('c');
t.root.children[0].addChild('d');

t.traverseBf((node)=>console.log(node.data));