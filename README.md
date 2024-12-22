## Falah-fe Repository

Welcome to the Falah-fe repository! This project combines various frontends using module federation to create a cohesive and modular experience. Below is a detailed overview of how the repository works and its core features.

🛠 How It Works
	•	Module Federation
All frontends are combined using module federation to allow seamless integration.
	•	Each module can be developed and run independently.
	•	Run all frontends using:

npx lerna run dev


	•	Central Host Folder
	•	The main host folder acts as the central router for the application.
	•	This is where all modules are brought together and served as a single application.

🎯 Project Goals

We aim to build a multi-functional application with the following features:
	•	Events Application (Meet - Commit)
	•	Audio Player (Audio - Transmition)
	•	Includes a Quran player.
	•	Book Reader (Iqra - Primer)
	•	Forms

🗂 Application Modules

Here are the planned application pages and their purposes:
	•	Homepage
	•	/ - Pocket (General Homepage)
	•	/2 - Salient (For mosque staff)
	•	Reader
	•	/Iqra - Primer (Book Reader)
	•	Audio Player
	•	/Audio - Transmition (Audio Player for Quran and more)
	•	Events
	•	/Meet - Commit (Events Management)
	•	Organisations Spotlight
	•	/Spotlight - Spotlight (For showcasing organisations)

🚀 How to Get Started
	1.	Clone the repository:

git clone https://github.com/your-repo/falah-fe.git


	2.	Install dependencies:

npm install


	3.	Run the development environment:

npx lerna run dev


	4.	Navigate to the central host folder to view the application.

📝 Contribution Guidelines
	•	Use the module federation pattern for integrating new modules.
	•	Follow naming conventions for all new modules and pages.
	•	Test thoroughly before pushing to the central host.

Happy coding! ✨
