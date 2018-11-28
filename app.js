// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
document.getElementById('test').addEventListener('click', () => {
    document.getElementById('content').innerText++
})

document.getElementById('test-1').addEventListener('click', () => {
    document.getElementById('content').innerText--
})

document.getElementById('confirm').addEventListener('click', () => {
    document.getElementById('name').innerText = document.getElementById('input').value
})