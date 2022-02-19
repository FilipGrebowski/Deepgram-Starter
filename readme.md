<h1>Deepgram Starter Kit</h1>

Hey all 👋

If you are here, then you probably got inspired by the amazing work that Deepgram has done with it's Speech-to-Text service.

Here is a simple guide how to get started with this project and have yourself speaking into you browser in no time!

If for some reason you found this repository with no context, watch both of these videos in order 😉

<a href="https://youtu.be/rhFlRPz-AxQ"> <h3>Coding a website with my voice - Part 1</h3> </a>
<img src="https://i.imgur.com/7xHE6gM.jpg" width="360">

<a href="https://youtu.be/HgoUIIhjc2A"> <h3>Coding a website with my voice - Part 2</h3> </a>
<img src="https://i.imgur.com/dObaHag.png" width="360">
  
<br>
<h4>Step #1</h4>
Create an account with <a href="http://dpgr.am/Filipdev">Deepgram</a> here, to get yourself $150 free credits (no credit card required).
  
<h4>Step #2</h4>
Once your account is created, generate yourself an API key. They have great instructions on their website which you can follow.

<h4>Step #3</h4>
Fork this repository and Clone it into you local folder on you machine.
  
<h4>Step #4</h4>
Add the newly generated API Key in the place of <code>DEEPGRAM_API_KEY</code> in the <code>script.js</code> file.

<h4>Step #5</h4>
Navigate to the project folder. Install all the dependancies by running <code>npm install</code>

<h4>Step #6</h4>
After the dependancies have installed, you can run the project with <code>npm run dev</code> to obtain your local IP address.

<h4>Step #7</h4>
As the Media Capture and Streams API requres a secure HTTPS connection to interact with your microphone, you will need to install some SSL certificates for your project.
<br>
Generate the certificates by running:
<code>mkcert YOUR_IP_HERE localhost</code>
<br>
You can provide more than one IP address.

<h4>Step #8</h4>
Once those have been generated, you want to make sure they are placed in the <code>root</code> of your project.
<br>
Navigate to the <code>/bundler/webpack.dev.js</code> file, and replace <code>YOUR_SSL_CERT_KEY</code> and <code>YOUR_SSL_CERT</code> with a path to your certificate and key file generated in the previous step.

<h4>Step #9</h4>
Make sure all your files have been saved and run <code>npm run dev</code> again. Allow the browser to use your microphone.

<h4>Step #10</h4>
Say something! Hurray! Your text should be visible on the screen! Now it's your time to experiment! Happy coding!!! 🚀
<br><br>
<img src="https://media.giphy.com/media/E5OVAGh0ed4acd5nF5/giphy.gif" width="360">
