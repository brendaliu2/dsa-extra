const LinkedList = require('./linked-list.js');

//Sort Sorted Linked List:
// 1-3-5
// 2-4-6-7
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
  let current = c.head;
  //while current
  while (current) {
    let checking = current.next;

    //while(checking)
    while (checking) {
      //current = a
      //checking = b
      
      
      //current = a
      //checking = b
      if (current.val > checking.val) {
        currentOrigNext = current.next;
        checkingOrigNext = checking.next;
        current.next = checkingOrigNext;
        checking.next = currentOrigNext;
        
        // checking = checking.next;
      } else {
        checking = checking.next;
      }
    }
    current = current.next;
  }


  return c;

}

