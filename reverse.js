/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverse(llist) {
  let currentNode = llist;
  let previousNode = null;

  while (currentNode) {
    let tempNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = tempNode;
  }

  return previousNode;
}

let llist = new SinglyLinkedListNode(5);
llist.next = new SinglyLinkedListNode(10);
llist.next.next = new SinglyLinkedListNode(15);
llist.next.next.next = new SinglyLinkedListNode(20);

console.log(reverse(llist));
