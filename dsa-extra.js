const LinkedList = require('./linked-list.js');

//Sort Sorted Linked List:
// 1-3-5
// 2-4-6-7
//1-2-3
// 1-3-5-2-4-6-7
//1-2-5-3-4-6-7
// orig next =3.next
// 5.next = 3.next 
// 3.next = 5.next
//1-2-3-5-4-6-7

function sortLinkedList(a, b) {
  //merge the list  c = a + b
  const c = new LinkedList();
  c.head = a.head;
  a.tail.next = b.head;
  c.tail = b.tail;

  //loop through c
  let prevCurr;
  let prevCheck;
  let current = c.head;
  //while current
  while (current) {
    prevCheck = current;
    let checking = current.next;

    //while(checking)
    while (checking) {
      if (current.val > checking.val) {
        debugger
        let checkingNextOg = checking.next;
        let currentNextOg = current.next
        
        prevCurr.next = checking;
        checking.next = currentNextOg;
        
        prevCheck.next = current;
        current.next = checkingNextOg;
        
        current = prevCurr.next;
        
        prevCheck = checking;
        checking = current.next;
      } else {
        debugger
        prevCheck = checking;
        checking = checking.next;
      }
    }
    prevCurr = current;
    current = current.next;
  }
  return c;
}

