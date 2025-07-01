---
title: "How to export Google NotebookLM notes as PDF"
description: "this python script will help you to export your google notebooklm notes as pdf"
date: "Apr 26 2022"
---

Google’s **NotebookLM** is a handy tool for interacting with your documents and taking notes from them. But if you’ve tried exporting your saved notes, you’ll quickly run into a frustrating problem.

There’s **no export option in the app itself**. You can’t easily back up your notes, search through them offline, or move them to another tool. The only official way to get your notes is by downloading them all at once — but this comes with a big downside: it dumps everything together into a single file. This ruins the structure of individual notes and strips away important formatting, making the notes messy and harder to work with.

I faced this issue myself, so I decided to fix it.

## 🛠️ I Created a Python Script to Fix This

I built a simple Python script that grabs your exported NotebookLM notes and **neatly restructures them**. It separates each note cleanly, preserves the original formatting as much as possible, and makes it easier to search or convert them into any format you want.

---

## 📌 How My Script Solves It

Since NotebookLM doesn’t offer any public API, I had to build the solution differently.

The script works by:

- Parsing the raw HTML structure from the downloaded notes.
- Converting each note into clean, readable **Markdown**.
- Exporting them as individual **PDF files**.

This way, each note stays separate, well-formatted, and easy to search or archive.

---

## ⚙️ How to Work With the Script

1. **Open the NotebookLM Notebook** whose notes you want to export.
2. In the **Studio** section, you’ll find an option to **Convert all notes to source**.

![studio section in notebooklm to convert notes to source](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0ntzyz4pq62fqlea9b30.png)

3. Clicking this option will create a new file in your **Sources** section.

**Next: Get the Source of this file to feed it into the script.**

The script uses **BeautifulSoup4** to traverse through the source and converts it to **Markdown**.

---

### 📋 How to Grab the HTML Source Code:

- Press `F12` or right-click on the screen and select **Inspect**. This will open **DevTools**.
- In the top-left corner of the DevTools window, click on **Select an element in the page to inspect it**.
- Hover over the elements in the **Sources** section to find the HTML code of your notes.

![DevTools option to hover and select](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ufw45ffbg79y07stx2vx.png)

You’ll see all the notes code placed inside a `<div>` tag with the class `elements-container`.

![elements container div block where all the text resides](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ugfc0vme5h755ku9s7fy.png)

This is the **only manual step** in the process.

- **Right-click** on that `<div>` element.
- Choose **Copy > Copy element**.
- Paste it into a text file named `notes.txt`.  
  (You can rename the file, but you’ll have to update the script accordingly.)

---

## 📦 Setting Up the Script

You’ll need:

- **Python 3.10+**
- Install dependencies:

```bash
  pip install beautifulsoup4==4.13.4 markdown_pdf==1.7
```

- [Download the script](https://gist.github.com/vivekthedev/5bfe0655986d775d6d07661974ce414e) and save it in the same folder as notes.txt.

---

## 🚀 Running the Script

Open your terminal and run:

```bash
python export_note.py
```

Let the script do its thing.

Once finished, you’ll find all your notes exported as separate PDF files.

![exported pdf](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zcb2r3aectovnnmlq921.png)

---

## 📄 What You’ll Get

The exported PDF files preserve the Markdown formatting — including:

- Headings
- Bullet lists
- Code blocks
- Bold Text

One of the output PDF files from my notes looked like this:

![sample output pdf screenshot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lsv31mh6emthodvzcy8k.png)

---

If you’ve been stuck with the same problem, I hope this saves you some time and frustration.
It’s always fun turning annoying gaps in tools into working solutions.

If you face any problems, feel free to reach out — [DMs](https://www.linkedin.com/in/vivekthedev) are open!
