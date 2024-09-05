const grocery_helper = {
    title: "Afiniti",
    githubUrl: "",
    demoUrl: "https://www.afiniti.com/",
    shortDescription:
        "Data Scientist at Afiniti, a multinational company that makes AI models to boost call center sales.",
    longDescription:
        "At Afiniti (multinational company), I developed an AI model to intelligently pair customers with agents in call centers, enhancing interactions and increasing sales. Implemented a recommendation system that pairs customer with most appropriate service package. Models deployed at AT&T and TruGreen's sales and retention centers.",
    tools: ["Python", "R", "Stats", "ML", "MySQL"],
    // image: "/assets/images/projects/devProjects/afiniti.jpeg",
    webpImage: "/assets/images/projects/devProjects/afiniti.jpg",
    key: 0,
};

const lil_playlist = {
    title: "Smallcap.ai",
    githubUrl: "",
    demoUrl: "https://web3names.ai/",
    shortDescription: "Machine Learning engineer",
    longDescription:
        "Developed a Domain Naming System (DNS) tailored for Web3 applications using advanced text generation models (GPT, GorillaLLM, Cohere). Implemented digital asset generation capabilities (Dalle, StableDiffusion) and AI agents for high-frequency trading of these assets.",
    tools: ["Langchain", "OpenAI", "Databricks", "MERN"],
    // image: "/assets/images/projects/devProjects/lilPlaylist.jpg",
    webpImage: "/assets/images/projects/devProjects/smallcap.jpg",
    key: 1,
};

const student_dashboard = {
    title: "CryptoGPT",
    githubUrl: "https://github.com/MoizKhuzema/Automated-Crypto-Trading-Signal-Generator",
    demoUrl: "",
    shortDescription: "A model that generates trading signals",
    longDescription:
        "Developed a novel method to automate the generation of crypto trading signals by utilizing binance api for historical data, autoGPT for market/news sentiment, TALib for technical analysis, and OpenAI for language generation.",
    tools: ["Python", "Langchain", "Selenium", "Streamlit"],
    // image: "/assets/images/projects/devProjects/dashboard.jpg",
    webpImage: "/assets/images/projects/devProjects/cryptogpt.jpg",
    key: 2,
};

const superpy = {
    title: "Firesmart Community",
    githubUrl: "https://github.com/MoizKhuzema/FireSmart-Community",
    demoUrl: "",
    shortDescription: "A model that detects fire hazards",
    longDescription:
        "Wrote a script to combine aerial images of canadian communities into a 3d orthomosiac mesh (24000 x 24000 UAV Images), and trained a yolov5 model to detect potential fire hazards. The model generates reports on how many houses are near detected fire hazards and in immediate danger incase of fire. The model then suggests how to make community firesmart.",
    tools: ["PyTorch", "Yolov5", "Agisoft"],
    // image: "/assets/images/projects/devProjects/superpy.jpg",
    webpImage: "/assets/images/projects/devProjects/firesmart.jpg",
    key: 3,
};

const betsy = {
    title: "SkyClean Watch",
    githubUrl: "https://github.com/MoizKhuzema/Litter-Detection",
    videoDemoUrl: "",
    shortDescription: "A model to detect litter falling from high rise building",
    longDescription:
        "Developed a model to track litter falling from high-rise buildings. The model is capable of detecting litter in all weather conditions, through shaded areas or even at night!. It uses kalman filtering to track trajectory and map which window the littering was done from. Video evidence of littering is recorded and stored at a security dashboard.",
    tools: ["Python", "OpenCV"],
    // image: "/assets/images/projects/devProjects/betsy.jpg",
    webpImage: "/assets/images/projects/devProjects/skyclean.jpg",
    key: 4,
};

const wincHackathon = {
    title: "BlueprintGAN",
    githubUrl: "https://github.com/MoizKhuzema/Automated-FloorPlan-Generator",
    demoUrl: "",
    shortDescription:
        "GAN model to generate floorplan",
    longDescription:
        "Developed a GAN model that takes room dimensions as input and generates various blueprints/floorplans. Generated floorplans adhere to China's residential construction regulations. After generation of floorplan, the model converts it into 3d building facades.",
    tools: ["Python", "PyTorch"],
    // image: "",
    webpImage: "/assets/images/projects/devProjects/blueprintgan.jpg",
    key: 5,
};

const portfolio = {
    title: "AesthetiScore",
    githubUrl: "https://github.com/MoizKhuzema/WebsiteScorer",
    shortDescription: "A model for scoring website aesthetics",
    longDescription:
        "Developed a CNN model that takes screenshots of website using selenium and scores the website's aesthetics on a scale of 10. The model is capable of recognizing the genre of website (news, sports, entertainment, etc) and scoring respectively.",
    tools: ["Tensorflow", "Sk-Learn", "Selenium"],
    // image: "/assets/images/projects/devProjects/portfolio.png",
    webpImage: "/assets/images/projects/devProjects/aesthi.jpg",
    key: 6,
};

const tarot = {
    title: "GridironStream",
    githubUrl: "https://github.com/MoizKhuzema/NFL-Streamer",
    demoUrl: "",
    shortDescription:
        "live nfl streaming website",
    longDescription:
        "Created a website that scrapes nfl match schedules and live streaming links from https://reddit1.nflbite.com/ and allows user to view matches live for free.",
    tools: ["Mern Stack"],
    // image: "/assets/images/projects/devProjects/tarot.jpg",
    webpImage: "/assets/images/projects/devProjects/nfl.jpg",
    key: 7,
};


// reverse array to ensure last projects added to array appear on top
export const featured_projects = [
    grocery_helper,
    lil_playlist,
    student_dashboard,
    superpy,
    betsy,
    wincHackathon,
    portfolio,
    tarot
];