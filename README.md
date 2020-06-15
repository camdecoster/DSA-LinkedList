# Assignment

In these drills, you'll practice creating a linked list, implementing its core, and some supplemental operations. You will also use your linked list to solve interview questions. Don't forget to assess the big O for each of these exercises. Start each problem by stating 1 or more sample inputs and outputs.

## Create a linked list class

Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

```javascript
class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while (currNode !== null && currNode.value !== item) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log("Item not found");
            return;
        }
        previousNode.next = currNode.next;
    }
}
```

## Creating a singly linked list

-   Write a function main. Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.

    ```javascript
    function main() {
        const SLL = new LinkedList();

        SLL.insertLast("Apollo");
        SLL.insertLast("Boomer");
        SLL.insertLast("Helo");
        SLL.insertLast("Husker");
        SLL.insertLast("Starbuck");
    }
    ```

-   Add Tauhida to the list.
    ```javascript
    SLL.insertLast("Tauhida");
    ```
-   Remove Husker from the list.

    ```javascript
    SLL.remove("Husker");
    ```

-   Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.

    ```javascript
    insertBefore(item, newItem) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            // Start at the head
            let currNode = this.head;
            // Keep track of previous
            let previousNode = this.head;
            // let tempNode = this.head;
            while (currNode !== null && currNode.value !== item) {
                // Save the previous node
                previousNode = currNode;
                currNode = currNode.next;
            }
            if (currNode === null) {
                console.log("Item not found");
                return;
            }
            // Create tempNode and make its next currNode
            const tempNode = new _Node(newItem, currNode);

            // Set next for previousNode to tempNode
            previousNode.next = tempNode;
        }
    }
    ```

-   Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.

    ```javascript
    insertAfter(item, newItem) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            // Start at the head
            let currNode = this.head;

            // let tempNode = this.head;
            while (currNode !== null && currNode.value !== item) {
                currNode = currNode.next;
            }

            // Check if at tail without finding anything
            if (currNode === null) {
                console.log("Item not found");
                return;
            }

            // Create tempNode and make its next currNode
            const tempNode = new _Node(newItem, currNode.next);

            // Set next for currNode to tempNode
            currNode.next = tempNode;
        }
    }
    ```

-   Implement a function called insertAt() that inserts an item at a specific position in the linked list.

    ```javascript
    insertAt(position, newItem) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            // Start at the head
            let currNode = this.head;

            let count = 0;

            // Check one more than count to simplify adding node
            while (currNode !== null && count + 1 !== position) {
                currNode = currNode.next;
                count++;
            }

            // Check if at tail without finding anything
            if (currNode === null) {
                console.log("Position doesn't exist");
                return;
            }

            // Create tempNode and make its next currNode
            const tempNode = new _Node(newItem, currNode.next);

            // Set next for currNode to tempNode
            currNode.next = tempNode;
        }
    }
    ```

-   Add Athena before Boomer using your insertBefore() function.
    ```javascript
    SLL.insertBefore("Boomer", "Athena");
    ```
-   Add Hotdog after Helo using the insertAfter() method.
    ```javascript
    SLL.insertAfter("Helo", "Hotdog");
    ```
-   Using the insertAt() method insert Kat in the 3rd position of the list.
    ```javascript
    SLL.insertAt(2, "Kat");
    ```
-   Remove Tauhida from the list.

    ```javascript
    SLL.remove("Tauhida");
    ```

## Supplemental functions for a linked list

Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.

-   display: displays the linked list
    ```javascript
    display() {
        let node = this.head;
        while (node !== null) {
            console.log(node.value);
            node = node.next;
        }
        console.log("");
    }
    ```
-   size: returns the size of the linked list
    ```javascript
    size() {
        let node = this.head;
        let size = 0;
        while (node !== null) {
            node = node.next;
            size++;
        }
        console.log(size);
        return size;
    }
    ```
-   isEmpty: finds if the list is empty or not (without using the size() function)
    ```javascript
    isEmpty() {
        let result = false;
        if (!this.head) result = true;
        console.log(result);
        return result;
    }
    ```
-   findPrevious: finds the node before the item you are looking for

    ```javascript
    findPrevious(item) {
        // Start at the head
        let currNode = this.head;

        // Keep track of previous
        let previousNode = this.head;

        while (currNode !== null && currNode.value !== item) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log("Item not found");
            return;
        }

        // Found it
        console.log(previousNode);
        return previousNode;
    }
    ```

-   findLast: returns the last node in the linked list

    ```javascript
    findLast() {
        // Start at the head
        let currNode = this.head;

        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.next !== null) {
            currNode = currNode.next;
        }

        // Found it
        console.log(currNode);
        return currNode;
    }
    ```

## Mystery program

Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

```javascript
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            } else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
```

This function traverses a list and removes duplicate entries. It's O(n^2) because it involves two levels of looping.

## Reverse a list

Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.

```javascript
reverse() {
    // If the list is empty
    if (!this.head) {
        return null;
    }

    // Start at the head
    let currNode = this.head;

    // Keep track of previous and next
    let previousNode = null;
    let nextNode = currNode.next;

    while (currNode !== null) {
        // Get next node
        nextNode = currNode.next;

        // Change next node to previous
        currNode.next = previousNode;

        // Save the previous node
        previousNode = currNode;

        // Switch to nextNode
        currNode = nextNode;
    }

    // Change head to last node
    this.head = previousNode;
}
```

This function is O(n) because it's directly proportional to the size of the list.

## 3rd from the end

Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.

```javascript
thirdFromEnd() {
    // Start at the head
    let currNode = this.head;

    // If the list is empty
    if (!this.head) {
        return null;
    }

    // Create storage nodes
    let previousNode = null;
    let thirdFromEndNode = null;

    // Check for the item
    while (currNode.next !== null) {
        thirdFromEndNode = previousNode;
        previousNode = currNode;
        currNode = currNode.next;
    }

    console.log(thirdFromEndNode);
    return thirdFromEndNode;
}
```

This function is O(n) because it's directly proportional to the size of the list.

## Middle of a list

Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.

```javascript
middle() {
    // Start at the head
    let currNode = this.head;

    // If the list is empty
    if (!this.head) {
        return null;
    }

    const middleElement = Math.ceil(this.size() / 2) - 1;

    for (let i = 0; i < middleElement; i++) {
        currNode = currNode.next;
    }

    console.log(currNode);
    return currNode;
}
```

This function is O(n) because it is directly proportional to the length of the list.

## Cycle in a list

Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a cycleList function.

```javascript
cycleCheck() {
    // If the list is empty
    if (!this.head || !this.head.next) {
        return null;
    }

    // Start at the head
    let slowNode = this.head;
    let fastNode = this.head.next;

    while (slowNode !== fastNode) {
        if (fastNode === null || fastNode.next === null) return false;
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    return true;
}
```

This function is O(n) because it loops through the list one time.

## Sorting a list

Write an algorithm that will sort a given linked list. For example given a list such as 3->2->5->7->1, your program will output the sorted version of this list which will be 1->2->3->5->7. You may not use another list or any other data structure such as an array to store the data.

```javascript
sort() {
    // Function uses bubble sort

    // If the list is empty
    if (!this.head || !this.head.next) {
        return null;
    }

    // End loop if at tail
    let swapped = true;

    // Only end loop if sorting is finished
    while (swapped) {
        // Start at the head
        let currNode = this.head;

        // Reset previous node
        let previousNode = null;

        let tempNode;

        // Reset loop variable
        swapped = false;

        // Go through each list element, sorting if required
        while (currNode.next !== null) {
            // Only sort if next value is less than current value
            if (currNode.value > currNode.next.value) {
                // Swapping took place, so run through list again
                swapped = true;

                // Store next node
                tempNode = currNode.next;

                // Switch current node to point to node after tempNode
                currNode.next = tempNode.next;

                // Switch tempNode to point to currNode
                tempNode.next = currNode;

                // Switch previousNode to point to tempNode
                if (previousNode === null) {
                    // Set head to proper node if head node gets swapped
                    this.head = tempNode;
                    previousNode = tempNode;
                } else {
                    previousNode.next = tempNode;
                    previousNode = tempNode;
                }

            } else {
                // If already in order, keep moving through list
                previousNode = currNode;
                currNode = currNode.next;
            }
        }
    }
}
```

This function is O(n^2) because it has two levels of looping.
