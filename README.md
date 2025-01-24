Nike UI - Dynamic Website with Sanity CMS & Data Migration

Description

This project is a Nike-themed dynamic website integrated with Sanity CMS for easy content management. It also includes a data migration feature to transfer old data smoothly into the new system.

Tech Stack

Frontend: React.js / Next.js

Backend: Node.js / Express

CMS: Sanity.io

Database: MongoDB / PostgreSQL

Styling: Tailwind CSS / Styled Components


Installation

1. Clone the Repository

git clone https://github.com/sehrishraheel/figma-nike-ui.git
cd nike-ui-sanity

2. Install Dependencies

npm install
# OR
yarn install

3. Set Up Environment Variables

Create a .env file and add the required API keys and credentials:

SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token
DATABASE_URL=your_database_url

4. Start the Development Server

npm run dev
# OR
yarn dev

Data Migration Process

Export Existing Data

If you have old data in Sanity CMS, export it using:

sanity dataset export production backup.tar.gz

Import Data to New Sanity Setup

sanity dataset import backup.tar.gz production

Usage

Customize the Nike-style UI

Manage content using Sanity CMS

Transfer old data smoothly using data migration


Project Structure

/nike-ui-sanity
│── /src
│   ├── /components
│   ├── /pages
│   ├── /styles
│── /sanity
│── /migrations
│── .env
│── package.json
│── README.md

Features

✅ Fully Responsive Nike UI
✅ Dynamic Content via Sanity CMS
✅ Smooth Data Migration Process
✅ Modern Tech Stack (React, Next.js, Sanity)

Contributing

To contribute, follow these steps:

1. Fork the repository


2. Create a new branch (feature-branch-name)


3. Make your changes and commit them


4. Submit a pull request