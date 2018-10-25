var d;
class Node {
  constructor(data,next=null){
    this.data=data;
    this.next=next;
  }
}
class LinkedList{
  construtor(){
    this.head=null
  }
getList(data){
this.head=new Node(data,this.head);
}

size(){
  let counter=0;
  let node=this.head;
d=node.next;
console.log(node);
  while(node){
    counter++;
    node=node.next;
  }
console.log(d);
  return counter;
}
}
