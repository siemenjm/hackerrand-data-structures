// Complete the CompareLists function below.

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

function compareLists(llist1, llist2) {
  let temp1 = llist1;
  let temp2 = llist2;

  while ((temp1 !== null) & (temp2 !== null)) {
    if (temp1.data !== temp2.data) {
      return 0;
    }

    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  if (temp1 !== temp2) {
    return 0;
  }

  return 1;
}

let llist1 = new SinglyLinkedListNode(5);
llist1.next = new SinglyLinkedListNode(10);
llist1.next.next = new SinglyLinkedListNode(15);
llist1.next.next.next = new SinglyLinkedListNode(20);

let llist2 = new SinglyLinkedListNode(5);
llist2.next = new SinglyLinkedListNode(10);
llist2.next.next = new SinglyLinkedListNode(15);
llist2.next.next.next = new SinglyLinkedListNode(20);
llist2.next.next.next.next = new SinglyLinkedListNode(25);

console.log(compareLists(llist1, llist2));
