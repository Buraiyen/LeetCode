const head = new ListNode(4, null);
head.next = new ListNode(5, null);
head.next.next = new ListNode(4, null);

console.log(isPalindrome(head));

function isPalindrome(head) {
  let current = head;
  let values = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }

  return values.join('') === values.reverse().join('');
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
