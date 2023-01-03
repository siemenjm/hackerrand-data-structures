/*
 * Complete the 'getNode' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER positionFromTail
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
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

function getNode(llist, positionFromTail) {
  let currentNode = llist;
  let position = 0;

  while (currentNode.next) {
    currentNode = currentNode.next;
    position++;
  }

  let positionFromHead = position - positionFromTail;

  currentNode = llist;
  while (positionFromHead > 0) {
    currentNode = currentNode.next;
    positionFromHead--;
  }

  return currentNode.data;
}

let testList = new SinglyLinkedListNode(1);
testList.next = new SinglyLinkedListNode(3);
testList.next.next = new SinglyLinkedListNode(7);
testList.next.next.next = new SinglyLinkedListNode(9);
testList.next.next.next.next = new SinglyLinkedListNode(15);

console.log(getNode(testList, 4));
console.log(getNode(testList, 3));
console.log(getNode(testList, 2));
console.log(getNode(testList, 1));
console.log(getNode(testList, 0));
