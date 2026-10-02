export const content: Array<{
  title: string;
  date: string;
  keywords: Array<string>;
  desc: string;
  links: Array<{ label: string; link: string }>;
  img: string;
}> = [
  {
    title: "Password Manager",
    date: "",
    keywords: ["Python", "MySQL", "Tkinter", "PyMySQL"],
    desc: "Password Manager stores passwords securely using a MySQL Database. The source code is in python and is connected to a MySQL Database using PyMySQL. The passwords are stored in a computer's local MySQL database, which eliminates the risk of passwords being sold or exploited by a commercial password manager that sends data to its servers. If your computer fails, however, your passwords will also get deleted.",
    links: [
      { label: "Icon Source", link: "https://www.flaticon.com/free-icons/key" },
    ],
    img: "https://raw.githubusercontent.com/balajiofficial/Website-Old/main/content/Password_Manager.png",
  },
  {
    title: "Data Plotter",
    date: "",
    keywords: ["Python", "Graphs", "Plotting", "Matplotlib", "Tkinter"],
    desc: "Data Plotter is a software that can be used to read .xlsx and .csv files to plot different types of graphs. The GUI of the app has been created with tkinter. It has different GUI themes and all matplotlib's graph themes. The app uses pandas to read data files and uses matplotlib to plot this data to a graph. Data Plotter can be used by non developers and by developers who do not wish to spend time implementing their own programs.",
    links: [
      {
        label: "GitHub",
        link: "https://github.com/balajiofficial/DataPlotter",
      },
      {
        label: "Download",
        link: "https://github.com/balajiofficial/DataPlotter/releases/tag/5.0.0",
      },
    ],
    img: "https://raw.githubusercontent.com/balajiofficial/DataPlotter/main/images/Screenshot.png",
  },
  {
    title: "EncryptCLI",
    date: "",
    keywords: ["Go", "Encryption", "Command Line Tool", "Unicode", "ASCII"],
    desc: "EncryptCLI is a command line tool that encrypts documents. This program is written in golang and uses the golang standard library. It converts Windows 10 supported unicode text to an unintelligible document. It creates a pseudo-random key to encrypt each character in the document. It can run on Windows 7+, Intel 64-bit computers. Since it's a command line tool it uses the command prompt GUI in Windows to run.",
    links: [
      { label: "GitHub", link: "https://github.com/balajiofficial/EncryptCLI" },
      {
        label: "Download",
        link: "https://github.com/balajiofficial/EncryptCLI/releases/tag/5.0.0",
      },
    ],
    img: "https://raw.githubusercontent.com/balajiofficial/EncryptCLI/main/images/Screenshot.png",
  },
  {
    title: "Competitive Programming",
    date: "",
    keywords: ["C++", "Algorithms", "Data Structures", "Codeforces", "USACO"],
    desc: "This is a github repository is a library of my codes for some competitive programming problems and competitions. It includes codes for USACO, Codeforces and other such competitive programming platforms. It also has codes for several algorithms and data structures. The codes have been written in C++ because of its incredible fast runtime and the algorithm and data structures support provided by the C++ Standard Library.",
    links: [
      {
        label: "GitHub",
        link: "https://github.com/balajiofficial/CompetitiveProgramming",
      },
    ],
    img: "https://raw.githubusercontent.com/balajiofficial/CompetitiveProgramming/main/images/Screenshot.png",
  },
  {
    title: "Website",
    date: "",
    keywords: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Markdown",
    ],
    desc: "The site has been created using next.js, react and typescript. The site has been deployed on vercel. It stores the theme choice using local storage. The website uses Tailwind CSS for the UI and Heroicons for SVG Icons. Next.js enables the site to load web pages and images instantly. The blog posts are dynamically rendered and are markdown files converted to HTML. The github pages site that redirects to the main site.",
    links: [
      { label: "GitHub", link: "https://github.com/balajiofficial/Website" },
      { label: "Website", link: "/" },
    ],
    img: "https://raw.githubusercontent.com/balajiofficial/Website-Old/main/content/Screenshot.png",
  },
  {
    title: "Bala Notes",
    date: "",
    keywords: ["Javascript", "Electron", "Tailwind CSS", "GUI", "HTML"],
    desc: "Bala Notes is an open source desktop app created for taking notes. It was created using frontend technologies like HTML, CSS and Javascript. It uses a framework called Electron to convert web apps into functioning desktop apps. The app has a great UI thanks to the Tailwind CSS framework and works on high resolution systems as well but it is very ram and storage heavy because of the chromium engine used by electron.",
    links: [
      { label: "GitHub", link: "https://github.com/balajiofficial/BalaNotes" },
      {
        label: "Download",
        link: "https://github.com/balajiofficial/BalaNotes/releases/tag/7.0.0",
      },
    ],
    img: "https://raw.githubusercontent.com/balajiofficial/BalaNotes/main/images/Screenshot.png",
  },
];
