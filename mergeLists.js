// Complete the mergeLists function below.

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

function mergeLists(head1, head2) {
  let mergedList = new SinglyLinkedListNode();
  let currentNode = mergedList;

  while (head1 != null || head2 != null) {
    if (head1 == null) {
      currentNode.data = head2.data;
      head2 = head2.next;
    } else if (head2 == null || head1.data <= head2.data) {
      currentNode.data = head1.data;
      head1 = head1.next;
    } else {
      currentNode.data = head2.data;
      head2 = head2.next;
    }

    if (head1 == null && head2 == null) {
      break;
    }

    currentNode.next = new SinglyLinkedListNode();
    currentNode = currentNode.next;
  }

  return mergedList;
}

let llist1 = new SinglyLinkedListNode(1);
llist1.next = new SinglyLinkedListNode(3);
llist1.next.next = new SinglyLinkedListNode(7);

let llist2 = new SinglyLinkedListNode(1);
llist2.next = new SinglyLinkedListNode(2);

console.log(mergeLists(llist1, llist2));
