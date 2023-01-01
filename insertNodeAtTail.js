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
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data);
  let currentNode = head;

  if (!currentNode) {
    return newNode;
  }

  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = newNode;
  return head;
}

let linkedListHead = null;

linkedListHead = insertNodeAtTail(linkedListHead, 5);
console.log(linkedListHead);

linkedListHead = insertNodeAtTail(linkedListHead, 10);
console.log(linkedListHead);

linkedListHead = insertNodeAtTail(linkedListHead, 15);
console.log(linkedListHead);

linkedListHead = insertNodeAtTail(linkedListHead, 20);
console.log(linkedListHead);
