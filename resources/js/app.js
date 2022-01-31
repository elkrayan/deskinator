// SOCKET.IO
const io = require('socket.io-client')
const socket = io('http://deskinator.nonante.brussels:3000')


window.onload = () => {
    if (window.location.pathname.replace('/', '') === 'desk'){
        const nextBtn = document.getElementById('nextBtn');
        const arrivedBtn = document.getElementById('arrivedBtn');
        nextBtn.addEventListener('click', () => {
            let deskValue = document.getElementById('deskValue').value;
            // Control if deskValue is filled
            if(deskValue !== ''){
                console.log(deskValue)
                socket.emit('deskCall', deskValue)
                nextBtn.classList.toggle('disabled')
                arrivedBtn.classList.toggle('disabled')
            } else {
                console.error('Desk Value is empty');
            }
        });
        arrivedBtn.addEventListener('click', () => {
            let deskValue = document.getElementById('deskValue').value;
            socket.emit('arrivedDesk', deskValue);
            nextBtn.classList.toggle('disabled')
            arrivedBtn.classList.toggle('disabled');
        })
    }
}
// Funciton
