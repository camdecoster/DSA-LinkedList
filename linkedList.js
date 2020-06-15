class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

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

    display() {
        let node = this.head;
        while (node !== null) {
            console.log(node.value);
            node = node.next;
        }
        console.log("");
    }

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

    isEmpty() {
        let result = false;
        if (!this.head) result = true;
        console.log(result);
        return result;
    }

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

    changeNext(nodeName, newNext) {
        // If the list is empty
        if (!this.head) {
            return null;
        }

        // Start at the head
        let node = this.find(nodeName);
        node.next = newNext;
    }

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
}

function main() {
    const SLL = new LinkedList();

    SLL.insertLast("Apollo");
    SLL.insertLast("Boomer");
    SLL.insertLast("Helo");
    SLL.insertLast("Husker");
    SLL.insertLast("Starbuck");
    SLL.display();

    SLL.insertLast("Tauhida");
    SLL.display();

    SLL.remove("Husker");
    SLL.display();

    SLL.insertBefore("Boomer", "Athena");
    SLL.display();

    SLL.insertAfter("Helo", "Hotdog");
    SLL.display();

    SLL.insertAt(2, "Kat");
    SLL.display();

    SLL.remove("Tauhida");
    SLL.display();

    SLL.size();
    SLL.isEmpty();
    SLL.findLast();
    SLL.findPrevious("Boomer");

    SLL.display();
    SLL.reverse();
    SLL.display();

    SLL.thirdFromEnd();

    SLL.middle();

    const CycleList = new LinkedList();
    CycleList.insertLast("Fry");
    CycleList.insertLast("Bender");
    CycleList.insertLast("Zoidberg");
    CycleList.insertLast("Leela");
    CycleList.changeNext("Leela", CycleList.find("Fry"));

    console.log(SLL.cycleCheck());
    console.log(CycleList.cycleCheck());

    const sortList = new LinkedList();

    sortList.insertLast(4);
    sortList.insertLast(5);
    sortList.insertLast(1);
    sortList.insertLast(10);
    sortList.insertLast(3);
    sortList.insertLast(4);
    sortList.sort();
    sortList.display();
}

main();
