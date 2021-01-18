/*Tower of Hanoi consists of three pegs or towers with n disks placed one over the other. 
The objective of the puzzle is to move the stack to another peg following these simple rules. 
Only one disk can be moved at a time. No disk can be placed on top of the smaller disk.
s = source
d = destination
e = extra
n = number of discs
*/

function hanoi(s, d, e, n) {
    // terminating condition
    if (n <= 0) {
        return
    }
    hanoi(s, e, d, n - 1)
    console.log("Move Disk-" + n + " FROM " + s + " TO " + d);
    hanoi(e, d, s, n - 1);
}
hanoi('s', 'd', 'e', 3)

