class Comment {
  constructor(content, children){
      this.children = children;
      this.content = content;
  }

  *[Symbol.iterator]() {
      yield this.content
      for (let child of this.children){
          yield* child
      }
  }
}

var children = [
  comment1 = new Comment('good comment', []),
  comment2 = new Comment('bad comment', []),
  comment3 = new Comment('meh', [])
];

const tree = new Comment('Great Post', children);

console.log(tree);

var values = []
for(let value of tree){
  values.push(value);
}

console.log(values);
