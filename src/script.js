navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {    

    // Remove this IF STATEMENT if you will be integrating with your mobile phone.
    if (!MediaRecorder.isTypeSupported('audio/webm')) { 
        return alert('Browser not supported.');
    }

    const mediaRecorder = new MediaRecorder(stream);

    const socket = new WebSocket('wss://api.deepgram.com/v1/listen', [
        'token',
        'DEEPGRAM_API_KEY',
    ]);

    socket.onopen = () => {
        console.log({ event: 'onopen' });

        document.querySelector('#status').textContent = 'Connected.';

        mediaRecorder.addEventListener('dataavailable', async (event) => {
            if (event.data.size > 0 && socket.readyState == 1) {
              socket.send(event.data);
            }
        });
        mediaRecorder.start(250);
    }
    
    socket.onmessage = message => {

        const received = JSON.parse(message.data);
        const transcript = received.channel.alternatives[0].transcript;

        if (transcript && received.is_final) {

            console.log(received);
            document.querySelector('#text').textContent += transcript + ' ';
        }
    }
    
    socket.onclose = () => {
        console.log({ event: 'onclose' });
    }
    
    socket.onerror = error => {
        console.log({ event: 'onerror', error });
    }
    
});
