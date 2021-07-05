// FIFO - queue list
const queueList = [];//the queue

const enqueue = () => {//adding an object to the queue.
    const item = document.getElementById('fifoAdd').value;
    queueList.push (item);
    printListHtml();
}

const dequeue = () => {//Removing an object from the queue.
    queueList.shift (1);
    printListHtml();
}

const printListHtml = () => {//firnt the value of the que array to html.
    return document.getElementById('theQueList').innerHTML = queueList;
}