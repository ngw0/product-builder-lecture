# Lotto Number Generator

## Overview

A simple web application to generate random lottery numbers.

## Project Outline

### Style and Design

*   **Layout:** A centered layout with a title, a display for the numbers, a "Generate" button, and a "Copy" button.
*   **Colors:** A playful color scheme.
*   **Fonts:** A clean, readable font.
*   **Interactivity:** The buttons will have a hover effect. The numbers will have a simple animation when they appear.

### Features

*   **Number Generation:** Generate 6 unique random numbers from 1 to 45.
*   **Display:** Display the generated numbers in a clear and visually appealing way.
*   **Copy to Clipboard:** Allow the user to copy the generated numbers to their clipboard.

## Current Plan

### Add "Copy to Clipboard" feature

1.  **`index.html`:**
    *   Add a "Copy" button next to the "Generate" button.
2.  **`style.css`:**
    *   Style the new "Copy" button to match the existing design.
3.  **`main.js`:**
    *   Add an event listener to the "Copy" button.
    *   When clicked, the generated numbers will be formatted and copied to the user's clipboard.
    *   Provide user feedback by temporarily changing the button text to "Copied!".
