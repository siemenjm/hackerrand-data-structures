// Complete the printLinkedList function below.

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

function printLinkedList(head) {
  console.log(head.data);

  while (head.next) {
    head = head.next;
    console.log(head.data);
  }
}

const node1 = new SinglyLinkedListNode(5);
const node2 = new SinglyLinkedListNode(10);
const node3 = new SinglyLinkedListNode(15);

node1.next = node2;
node2.next = node3;

printLinkedList(node1);
