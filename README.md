# Event Loop Visualizer

**Interactive JavaScript Event Loop Visualizer**  
A fully interactive demonstration of JavaScript's Event Loop, showing how tasks move through the **Call Stack**, **Web APIs**, and **Callback Queue** in real-time.

---

🔹 Features
- Visualizes the flow of tasks in JavaScript
- Highlights the **active container** dynamically (Call Stack, Web APIs, Callback Queue)
- **Queue system** prevents task overlapping
- Counters for tasks **waiting in queue** and **completed tasks**
- Dark theme UI for professional and modern look
- Fully responsive design for desktop and mobile

---

🔹 Tech Stack
- **HTML** – structure of the project  
- **CSS** – styling and dark theme  
- **JavaScript** – logic for event loop simulation, queue management, and UI updates

---

🔹 How It Works
1. Tasks are added when the **“Run Task” button** is clicked.
2. Tasks first enter the **Call Stack**.
3. Tasks move to **Web APIs** during asynchronous execution.
4. After Web APIs, tasks wait in the **Callback Queue**.
5. When the Call Stack is free, tasks from the Callback Queue return to the Call Stack and complete execution.
6. The **queue system ensures tasks do not overlap**; only one task runs at a time.
7. UI highlights dynamically show which container is active.

---

🔹 Live Demo
[View Live Event Loop Visualizer](https://YOUR_USERNAME.github.io/event-loop-visualizer/)

---

🔹 Folder Structure
Event Loop Visualizer 
         |
     index.html
     style.css 
     script.js




---

🔹 Why This Project
This project helps **developers, students, and interviewees** understand how JavaScript handles asynchronous tasks and the Event Loop mechanism in a visually intuitive way. It is designed to teach **real-world JS behavior** while being fully interactive and visually appealing.

---

🔹 Author
Built with 💻 by **Sakshi Upadhyay**– passionate about teaching and visualizing programming concepts.
