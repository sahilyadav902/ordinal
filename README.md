## Ordinal

(Responsive Next.js Ordinal Template Design)

![Ordinal](https://i.ibb.co/bN43S1J/Ordinal.png)

## Link to Live Project

> []()

## Setting up the project locally

- Clone the project through the terminal:
  > git clone https://github.com/sahilyadav902/ordinal.git
- Navigate to the project directory:
  > cd ordinal
- Install dependencies
  > npm install
- Run the development build
  > npm run dev
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Techstack Used

- Next.js
- React.js
- Supabase (Online File Storage)
- Tailwind (CSS Framework)
- DaisyUI (Tailwind CSS Components)
- React Icons (npm package)
- react-loading-skeleton (npm package)
- uuid (npm package)

## Project Structure

- index.js directs to the homepage containing the project display
- styles directory contains a global.css file containing some custom styling for the components
- components directory contains reusable or isolated components that are used inside the project

## Features Implemented

- Responsive design for all device sizes
- File upload functionality through Browse and Drag & Drop
- Unique folder names for each file using uuid npm package
- Upload error logging in console
- Highlighting effect on file upload box
- File size and type restriction with warning
- Header and Footer with external linking
- File change functionality resets to original screen
- Custom range slider with instant value updates and ability to change the maximum range
- Tooltip for user query
- Full screen Modal Overlay on Submit
- Skeleton Screen for showing the upload of data
