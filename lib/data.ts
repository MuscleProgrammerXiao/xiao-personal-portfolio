import intelligentReportEntryRobot from '@/public/intelligentReportEntryRobot.png';

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Skills: '我的技能',
    Projects: '我的项目',
}
export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "AI-powered Intelligent Report Entry Robot.",
        "title_zh": "AI智能报表录入机器人",
        "description":"The AI-powered report entry robot supports uploading various report formats, uses OCR for structured recognition, maps results into templates, and performs preprocessing through calculations and key information extraction. Final report entry is completed with minor manual adjustments.",
        "desc_zh": "AI智能报表录入机器人是一款支持上传多种格式的指定类型报表，通过OCR智能结构化识别，将识别结果映射进不同报表类型的模板科目，经过一系列计算关系和智能化提取关键信息，完成报表预处理。最后通过部分手工调整完成录入的AI产品。",
        "tags": ["React","JavaScript","Canvas"],
        "imageUrl": intelligentReportEntryRobot,
        "projectUrl": "https://github.com/MuscleProgrammerXiao",
        "demoUrl": "https://github.com/MuscleProgrammerXiao"
    },
]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Vue2",
    "Vue3",
    "Git",
    "Github",
    "Tailwind",
    "Chakra UI",
    "Boostrap",
    "UI/UX"
] 
