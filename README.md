# 📱 Website Redesign 2025

Welcome to the redesigned version of the Farmington Robotics website based off of TypeScript React using the [Vite](https://vite.dev) build. 
It uses [SCSS](https://sass-lang.com) for styling. For more information on React components or hooks, visit [react.dev](https://react.dev) for more information.

Any assets, pages, css, components, media, routing, and other external parts are imported into each React TSX file.

## 📦 Main Tools

We used the following tools to take our work to the next level.

- [React](https://react.dev)
- [Vite](https://vite.dev)
- [SCSS](https://sass-lang.com)
- [TailwindCSS](https://tailwindcss.com)

## 📋 Prerequisites for development

Here's a list of things we think you'll need to streamline your workflow.

1. **Make sure [Node.js](https://nodejs.org/en) is installed on your system.** This is the runtime that the application uses to run the code, so it is absolutely essential to this project.
2. Verify that [Git](https://git-scm.com) is installed. If you would like to be super efficient, consider downloading [Github Desktop](https://desktop.github.com/download/) to manage your local GitHub repositories rather than using source control in your IDE. 
3. **We recommend using VSCode for its powerful features.** You can download that from the Microsoft store or [Visual Studio's website](https://code.visualstudio.com/download). Most of the directions following are VSCode-based, although it will be fairly simple to follow with a different IDE.

If you have all of these installed, you are way more than good to go. Based on your needs, you can skip to one of the following sections to either run the development server, or start the production build in a dedicated environment.

## 🛠️ Running the client development host

Interested in becoming a website programmer for our team? Make sure you have access to edit the repositories, then follow these steps to set up your workspace:

1. **Clone the GitHub repository via URL (in VSCode) or run `git clone https://github.com/team178/websiteRedesign` in your terminal.** Choose a memorable location, then open it in the code workspace. This will create a local, personal copy for you to make changes on without affecting the rest of the team.
2. **Open your terminal if it's not already open, then run `npm i` in the folder's directory.** This will generate all of the packages and downloads you need to be able to run and make changes to this project on your device.
4. **Run `npm run dev` to start the local development server.** By default, this should be also broadcasting to your network, so giving the link to another person on the same Wi-Fi will allow them to see your changes in real-time. This can also assist when hosting a Live-Share session.

Happy coding! Make sure to take a look at the best practices list to make sure the code is sustainable and organized.

## 💻 Starting the production build

So you want to run our development build, eh? Listed below are some simple steps to have the website up on our servers in no time.

1. **Make sure you have Typescript installed on your system.** You can do this by running the following command: `npm install -g typescript`. This installs all of the necessary tools to efficiently build the application.
2. **Open a split terminal in VSCode.** This can be done by clicking the split terminal button at the top of your terminal. This will allow you to monitor the client and server simultaneously. Type `cd client` in one, and `cd server` in the other.
3. **Run `npm run build` in the client terminal.** This will attempt to create a build of the current source files. When this completes, make sure it created a `dist` folder in the client directory. This is where the production server pulls the data from.
4. **If you get errors, don't worry.** Go back and fix all warnings and errors within the client workspace. Yes, the compiler looks at warnings, too 😭.
5. **In the server terminal, enter `npm run start` to start the server.** Note that the same command is used to *debug* the server, too.

## 💡 Best practices

None for now! Organizational tips are coming soon, though, so be sure to check back in a bit!