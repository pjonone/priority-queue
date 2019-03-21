class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;

        this.parent = null;
        this.left = null;
        this.right = null;

    }

    appendChild(node) {
        if (this.left === null) {
            this.left = node;
            this.left.parent = this;
        }
        else if (this.right === null) {
            this.right = node;
            this.right.parent = this;
        }
    }


    removeChild(node) {
        if (node === this.left) {
            this.left.parent = null;
            this.left = null;
        }
        else if (node === this.right) {
            this.right.parent = null;
            this.right = null;
        }
        else {
            throw new Error('Error')
        }
    }

    remove() {
        if (this.parent !== null)
            this.parent.removeChild(this)
    }


    swapWithParent() {
        if (this.parent !== null) {
            let child = this;
            let tempParent = this.parent;
            let tempLeft = this.left;
            let tempRight = this.right;
            let tempParentLC = this.parent.left;
            let tempParentRC = this.parent.right;
            let grFather = this.parent.parent;
            let grLeftChild = this.parent.parent.left;
            let grRightChild = this.parent.parent.right;


                if (this.parent.left === this ) {
                    // updates parent.parent
                    this.parent = this;
                    this.parent = tempParent.parent;
                    this.left = tempParent;
                    this.right = tempParentRC;
                    this.left.left = tempLeft;
                    this.left.right = tempRight;
                    this.left.parent = this;

                    





                }
                else if(this.parent.right === this ) {
                    // updates parent.parent
                    this.parent = this;
                    this.parent = tempParent.parent;
                    this.left = tempParent;
                    this.right = tempParentRC;
                    this.left.left = tempLeft;
                    this.left.right = tempRight;
                    this.left.parent = this;




                }

            }

        }
    }


module.exports = Node;
