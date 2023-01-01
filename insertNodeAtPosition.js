/*
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
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

function insertNodeAtPosition(llist, data, position) {
  const newNode = new SinglyLinkedListNode(data);

  if (position === 0) {
    newNode.next = llist;
    return newNode;
  }

  let currentNode = llist;
  let index = 0;

  while (index < position - 1) {
    currentNode = currentNode.next;
    index++;
  }

  const nextNode = currentNode.next;

  currentNode.next = newNode;
  newNode.next = nextNode;

  return llist;
}

let llist = new SinglyLinkedListNode(5);
llist = insertNodeAtPosition(llist, 10, 1);
llist = insertNodeAtPosition(llist, 15, 2);
llist = insertNodeAtPosition(llist, 20, 3);
console.log(llist);

llist = insertNodeAtPosition(llist, 7, 1);
console.log(llist);
