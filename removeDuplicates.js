/*
 * Complete the 'removeDuplicates' function below.
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
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

function removeDuplicates(llist) {
  let leadingNode = llist;
  if (!leadingNode.next) {
    return llist;
  }

  leadingNode = leadingNode.next;
  let trailingNode = llist;

  while (leadingNode) {
    console.log('trailing: ', trailingNode, ' leading: ', leadingNode);
    if (trailingNode.data === leadingNode.data) {
      while (trailingNode.data === leadingNode.data) {
        if (leadingNode.next) {
          leadingNode = leadingNode.next;
        } else {
          break;
        }
      }

      if (leadingNode.data === trailingNode.data) {
        trailingNode.next = null;
        leadingNode = null;
      } else {
        trailingNode.next = leadingNode;
      }
    } else {
      leadingNode = leadingNode.next;
      trailingNode = trailingNode.next;
    }
  }

  return llist;
}

// let testList = new SinglyLinkedListNode(1);
// testList.next = new SinglyLinkedListNode(2);
// testList.next.next = new SinglyLinkedListNode(2);
// testList.next.next.next = new SinglyLinkedListNode(3);
// testList.next.next.next.next = new SinglyLinkedListNode(3);
// testList.next.next.next.next.next = new SinglyLinkedListNode(3);
// testList.next.next.next.next.next.next = new SinglyLinkedListNode(3);

let testList = new SinglyLinkedListNode(3);
testList.next = new SinglyLinkedListNode(3);
testList.next.next = new SinglyLinkedListNode(3);
testList.next.next.next = new SinglyLinkedListNode(4);
testList.next.next.next.next = new SinglyLinkedListNode(5);
testList.next.next.next.next.next = new SinglyLinkedListNode(5);

console.log(removeDuplicates(testList));
