/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
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

function deleteNode(llist, position) {
  if (position === 0) {
    return llist.next;
  }

  let currentNode = llist;
  let index = 0;
  while (index < position - 1) {
    currentNode = currentNode.next;
    index++;
  }

  currentNode.next = currentNode.next.next;

  return llist;
}

let llist = new SinglyLinkedListNode(2);
llist.next = new SinglyLinkedListNode(5);
llist = deleteNode(llist, 0);
console.log(llist);

llist.next = new SinglyLinkedListNode(10);
llist.next.next = new SinglyLinkedListNode(15);
llist.next.next.next = new SinglyLinkedListNode(20);
llist = deleteNode(llist, 1);
console.log(llist);
