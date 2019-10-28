function insertNodeAtPosition(head, data, position) {
    let node = data
    let prev = getNode(position - 1)
    let after = prev.next
    prev.next = node
    node.next = after
    return head
}

function getNode(index, head){
    let current = head
    let count = 0
    while(count !== index){
        current = current.next
        count ++
    }
    return current
}