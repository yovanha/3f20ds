/* 
Loop Detection: Given a circular linked list, implement an algorithm that returns 
the node at the beginning of the loop.
DEFINITION: Circular linked list: A (corrupt) linked list in which a node's next pointer 
points to an earlier node, so as to make a loop in the linked list.
EXAMPLE: Input: A -> B -> C -> 0 -> E -> C [the same C as earlier]
Output: C 
*/

/* Our algorithm is derived directly from parts 1, 2 and 3.
1. Create two pointers, FastPointer and SlowPointer.
2. Move FastPointer at a rate of 2 steps and SlowPointer at a rate of 1 step.
3. When they collide, move SlowPointer to LinkedListHead. Keep FastPointer where it is.
4. Move SlowPointer and FastPointer at a·rate of one step. Return the new collision point. */

LinkedListNode FindBeginning(LinkedListNode_head) 
{
    n1 = head;
    n2 = head;
    // Find meeting point
    while (n2.next != null) 
    {
        n1 = n1.next;
        n2 = n2.next.next;
        if (n1 == n2) 
        {
            break;
        }
    }

     // Error check - there is no meeting point, and therefore no loop
     if (n2.next == null) 
     {
        return null;
     }

    /* Move n1 to Head. Keep n2 at Meeting Point. Each are k steps
    /* from the Loop Start. If they move at the same pace, they must
    * meet at Loop Start. */
    n1 = head;
    while (n1 != n2) 
    {
        n1 = n1.next;
        n2 = n2.next;
    }
    // Now n2 points to the start of the loop.
    return n2;
}