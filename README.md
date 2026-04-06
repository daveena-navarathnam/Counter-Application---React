# Counter Application (React `useState` Project)

## 📘 Project Overview

The **Counter Application** is a beginner-friendly React project developed to demonstrate the practical use of the **`useState` hook** for state management in functional components. The application allows users to increment, decrement, and reset a numeric counter value while updating the user interface dynamically.

This project is designed as an academic exercise to strengthen the understanding of:

* React functional components
* State handling using hooks
* Event handling
* Conditional rendering
* Basic inline styling in React

---

## 🎯 Objective

The main objective of this project is to build a simple and interactive counter system using React.

The application helps learners understand how React updates the UI instantly whenever the component state changes.

---

## ⚙️ Features

* Increment the counter value by **1**
* Decrement the counter value by **1**
* Reset the counter value to **0**
* Prevents the counter from going below zero
* Displays **"Minimum limit reached"** when the value is zero
* Styled user interface with buttons and card layout
* Instant UI updates using React state

---

## 🌐 Live Demo

The project is deployed and can be accessed using the following live link:

**Live Application:** https://counter-application-react-p6jo.vercel.app/

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6)**
* **JSX**
* **HTML5**
* **Inline CSS Styling**

---

## 📂 Project Structure

```bash
src/
│── CounterApp.js
│── index.js
public/
│── index.html
package.json
```

---

## 💻 Implementation Logic

The application uses the **`useState` hook** to store the counter value.

```javascript
const [count, setCount] = useState(0);
```

### Button Functions

* **Increment:** increases count by 1
* **Decrement:** decreases count only if value is greater than zero
* **Reset:** sets count back to zero

Example:

```javascript
function increment() {
  setCount(count + 1);
}
```

---

## 🖥️ Expected Output

* Clicking **Increment** increases the displayed number.
* Clicking **Decrement** decreases the number.
* Clicking **Reset** restores the value to zero.
* When the counter is zero, the message **"Minimum limit reached"** is displayed.

---

## 🎓 Learning Outcomes

By completing this project, students will be able to:

* Understand React component structure
* Use the `useState` hook effectively
* Handle click events in React
* Implement conditional rendering
* Apply simple UI styling
* Organize React code into separate component files

---

## ✅ Conclusion

This Counter Application serves as a foundational React project for beginners. It provides hands-on experience in managing component state and dynamically updating the user interface.

The project is highly useful for students who are starting with React and want to build confidence in **state management and event-driven UI development**.

---

## 👨‍🎓 Academic Note

This project was developed as part of **React.js beginner practice exercises** to understand hooks, component design, and user interaction handling.
