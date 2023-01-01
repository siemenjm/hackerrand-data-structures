/*
 * Complete the 'reversePrint' function below.
 *
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

function reversePrint(llist) {
  let dataStorageArr = [];
  dataStorageArr.push(llist.data);

  let currentNode = llist;
  while (currentNode.next) {
    currentNode = currentNode.next;
    dataStorageArr.unshift(currentNode.data);
  }

  dataStorageArr.forEach((dataPoint) => {
    console.log(dataPoint);
  });
}

let llist = new SinglyLinkedListNode(5);
llist.next = new SinglyLinkedListNode(10);
llist.next.next = new SinglyLinkedListNode(15);
llist.next.next.next = new SinglyLinkedListNode(20);

reversePrint(llist);
