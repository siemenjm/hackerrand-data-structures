// Complete the insertNodeAtHead function below.

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

function insertNodeAtHead(head, data) {
  const newHead = new SinglyLinkedListNode(data);
  newHead.next = head;

  return newHead;
}

let linkedList = null;

linkedList = insertNodeAtHead(linkedList, 5);
linkedList = insertNodeAtHead(linkedList, 10);
linkedList = insertNodeAtHead(linkedList, 15);
linkedList = insertNodeAtHead(linkedList, 20);

console.log(linkedList);
