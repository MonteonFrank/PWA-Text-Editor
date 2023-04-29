# PWA-Text-Editor
PWA Text Editor


<h2><strong>Description</strong></h2>

<p>During these last weeks we learned about Progressive Web Apps (PWA) which is a type of application software delivered using HTML, CSS, JavaScript and WebAssembly to provde a user exprience similar to that of a native mobile app. They are also typically responsive, which means they adapt to different screen sizes and orientations, making them suitible for use on a range of devices.</p>

<p>On this challege, we were given a partial code and had to complete adding the webpack plugins, service worker, manifest file, use IndexedDB and deploy it into Heroku.</p>

<p>What this application does, its a text editor where information is stored in the IndexDB and the information is then retrieved if the application is closed. Additionally, you can install this application on your machine and works without interent.</p>

<h2><strong>Programming Logic</strong></h2>

<p>If you look into the repository, there are two main folders, from the client side and from the server side. The majority of the code added into this challenge is in the Client folder</p>

<p>In the webpack file inside the client folder, you will find the webpackplugin and the manifest. In this file, i added the paths, names of the files and basically all the outputs and entries for the files to be bundled. In the Manifest section, you will also find the entires and the outputs of the paths and files to be used.</p>

<p>Inside the same client folder, there is a file called "src-sw" which is were you will find the code for the service worker. You will find the code where the information is cached, which is what makes the application work offline </p>

<p>In the same client folder, you will find another folder callled "src" and inside, you will find the database, editor, header, index and the install files. In the database file, I added the missing configuration to create, store and retrieve information from IndexedDB. In the editor file, this was provided to us and basically adds the header if there is no information stored in IndexDB else it states it will show the infomraiton stored. In the header file, you will only find the header that is used, no code was modified in this file. In the indexed file, this is where the sevice worker is imported to ensure that the application can work offline. Lastly, in the install folder, you fill find the event handlers to that asisst in installing the application </p>


<h2><strong>What did I learn?</strong></h2>

 <p>During this challenge I learned more about PWA and the stepping stones of how mobile applications work. I did have challenge understanding the concepts seen in class since this information was new, specifically the service worker. I had to request a tutoring session to understand more about it and what other funcitonalities can come from it.</p>

<h2><strong>Pictures</strong></h2>

Application working

![image](https://user-images.githubusercontent.com/112662397/235319033-b928d08a-6895-4f8f-8d9c-3fb163471b76.png)


Service Worker

![image](https://user-images.githubusercontent.com/112662397/235319060-95c08373-8ad0-4000-a95a-a8da97d36eaa.png)


Manifest

![image](https://user-images.githubusercontent.com/112662397/235319091-88afe65d-5b2c-4928-b177-86113076d49c.png)


Application installed

![image](https://user-images.githubusercontent.com/112662397/235319326-e0de786c-b598-4839-a314-b6029c2f2f36.png)

IndexDB

![image](https://user-images.githubusercontent.com/112662397/235319353-87a1fbdf-3f7b-4237-90d6-74750a16418d.png)


