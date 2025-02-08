<div align="center">

## `Task Manager Documentation`

</div>

## Overview

The Task Manager is a simple, responsive web application built using HTML, CSS, and JavaScript. It allows users to create, manage, and delete tasks. The application supports multiple themes, including light, dark, blue, high-contrast, and custom themes. It also includes smooth animations for task deletion and is fully responsive for all screen sizes.

## Features

- **Add Tasks:** Users can add tasks using the input field and submit button.
- **Mark Tasks as Completed:** Clicking on a task toggles its completion status.
- **Delete Tasks:** Tasks can be deleted with a fade-out animation.
- **Multiple Themes:** Users can switch between light, dark, blue, high-contrast, and custom themes.
- **Custom Theme:** Users can pick a custom color for the background and text.
- **Responsive Design:** The application is fully responsive and works on all screen sizes (desktop, tablet, mobile).
- **Local Storage:** Tasks and theme preferences are saved in the browser's local storage for persistence.

---

## Folder Structure

```
task-manager/
│
├── index.html          # Main HTML file
├── styles/             # CSS files
│   ├── main.css        # Main stylesheet
│   ├── theme.css       # Theme styles
│   └── animations.css  # CSS animations
│
├── scripts/            # JavaScript files
│   ├── app.js          # Main application logic
│   ├── storage.js      # Local storage helper functions
│   ├── utils.js        # Utility functions
│   ├── theme.js        # Theme logic
│   └── animations.js   # Animation logic
│
├── assets/             # Static assets (e.g., images, icons)
│   └── icons/          # Icons for the application
│
└── README.md           # Project documentation
```

# Task Manager Documentation

## How to Use

- **Add a Task:** Type a task in the input field and click the "Add Task" button.
- **Mark a Task as Completed:** Click on a task to toggle its completion status.
- **Delete a Task:** Click the "Delete" button next to a task to remove it.
- **Change Theme:** Use the dropdown menu to select a theme (light, dark, blue, high-contrast, or custom). For custom themes, pick a color using the color picker.
- **Responsive Design:** Resize the browser window or open the app on different devices to see the responsive layout.

## Code Explanation

### 1. HTML (index.html)

The HTML file defines the structure of the application, including:

- A header with the title and theme controls.
- A form for adding tasks.
- A list to display tasks.

### 2. CSS (styles/main.css, styles/theme.css, styles/animations.css)

- `main.css`: Contains general styles for the application, including layout, typography, and responsive design.
- `theme.css`: Defines styles for different themes (light, dark, blue, high-contrast, custom).
- `animations.css`: Adds animations for task deletion and smooth theme transitions.

### 3. JavaScript (scripts/app.js, scripts/storage.js, scripts/theme.js, scripts/animations.js)

- `app.js`: Handles task creation, completion, and deletion. Manages the task list and updates the DOM.
- `storage.js`: Provides helper functions to save and retrieve tasks and theme preferences from local storage.
- `theme.js`: Manages theme selection and custom color input.
- `animations.js`: Adds animations for task deletion and theme transitions.

## Local Storage

The application uses the browser's local storage to save:

- **Tasks:** All tasks are stored as an array of objects with properties like `id`, `text`, and `completed`.
- **Theme Preferences:** The selected theme is saved so it persists across page reloads.

## Responsive Design

The application is designed to work on all screen sizes:

- **Desktop:** The form and header are displayed in a row layout.
- **Tablet:** The form switches to a column layout, and the header stacks its content vertically.
- **Mobile:** Font sizes and padding are reduced for better usability on small screens.

## Themes

The application supports the following themes:

- **Light:** Default theme with a light background.
- **Dark:** Dark background with light text.
- **Blue:** Blue-themed background and text.
- **High Contrast:** Black background with white text for better visibility.
- **Custom:** Users can pick a custom color for the background and text.

## Animations

- **Task Deletion:** Tasks fade out when deleted.
- **Theme Transitions:** Smooth transitions are applied when switching themes.

## How to Run

1.  Clone the repository or download the source code.
2.  Open the `index.html` file in a web browser.
3.  Start adding and managing tasks!

## Future Improvements

- Add due dates and priorities for tasks.
- Implement task categories or tags.
- Add user authentication for personalized task lists.
- Improve accessibility with ARIA labels and keyboard navigation.

Enjoy using the Task Manager! 🚀

---

<div align="center">

##### 🛡️ `All rights reserved by Sajib Bhattacharjee @2025`

### 👨‍💻 `Created with ❤️ by -->`

✨ **Sajib Bhattacharjee** ✨

**💖 Dedicated to "Sir! Anisul Islam" 💖**

> > > > ### 🙏 Thanks a Lot for Visiting...!!!

🌐 [**Portfolio & Projects**](https://github.com/Sajib-Bhattacharjee)  
💼 [**LinkedIn**](https://www.linkedin.com/in/sajib-bhattacharjee-42682a178/)  
📧 [**Contact Me**](mailto:sajibbhattacjarjee2000@gmail.com)

</div>
