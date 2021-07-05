//LIFO - Stack
const stack = [];

const initialization = () => {
    return stack = [];
}

const pushItem = () => {//pushing an object to the stack.
    const item = document.getElementById('lifoAdd').value;
    stack.push(item);
    printStackHtml();
}

const popItem = () => {//Action that removes the upper item from the stack.
    stack.pop(1);
    printStackHtml();
}

const printStackHtml = () => {
    document.getElementById('theStackList').innerHTML = stack;
}