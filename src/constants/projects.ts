const STUDENT_ENROLLMENT_SYSTEM = '/projects/StudentEnrollment.png';
const POCKET_EXPRESS = '/projects/PocketExpress.png';
const SDPT_ACADEMY = '/projects/SDPTAcademy.png';
const GUIDE_BOT = '/projects/GuideBot.png';
const SURVEY_CORPS = '/projects/SurveyCorps.png';
const GABAY_AI = '/projects/GabayAI.png';

export const projects = [
    {
        photo: SDPT_ACADEMY,
        title: 'SDPT Academy',
        description:
        `AI-powered e-learning platform that streamlines course 
        delivery and provides chat-based assistance to improve 
        student learning experience and accessibility.`,
        technologies: ['TypeScript', 'Next.js', 'React', 'Bootstrap', 'Firebase', 'Vercel', 'OpenAI', 'RAG', 'LangChain'],
        link: 'https://sdpt-academy.vercel.app/',
        github: 'https://github.com/SeigiMondragon/SDPTAcademy',
    },
    {
        photo: GABAY_AI,
        title: 'Gabay AI',
        description: 
        `An AI study assistant that helps users summarize documents, generate AI 
        flashcards, stay focused with a Pomodoro timer, and organize study tasks.`,
        technologies: ['TypeScript', 'React', 'Tailwind', 'ShadCN', 'Node.js', 'Express', 'MongoDB', 'Render', 'Vercel'],
        link: 'https://gabay-ai-pi.vercel.app/',
        github: 'https://github.com/SamuelAlac/GabayAI',
    },
    {
        photo: SURVEY_CORPS,
        title: 'Survey Corps',
        description:
        `A drag-and-drop survey builder that allows users to quickly create 
        surveys, reducing manual setup time and simplifying form creation.`,
        technologies: ['TypeScript', 'React', 'Tailwind', 'DaisyUI' , 'Django', 'PostgreSQL', 'Render', 'Vercel'],
        link: 'https://custom-survey-and-analytics-platfor.vercel.app/',
        github: 'https://github.com/SamuelAlac/Custom-Survey-and-Analytics-Platform',
    },
    {
        photo: POCKET_EXPRESS,
        title: 'Pocket Express',
        description: 
        `An Android-based POS system that operates offline, replacing traditional 
        manual and paper-based sales tracking with a digital system for faster 
        transactions and efficient inventory tracking.`,
        technologies: ['Java', 'SQLite', 'Android Studio'],
        link: 'https://drive.google.com/drive/u/0/folders/16DOFnCdzdV8yEzICzs8w_LUf9RokLnxP',
        github: 'https://github.com/SamuelAlac/PocketExpress',
    },
    {
        photo: STUDENT_ENROLLMENT_SYSTEM,
        title: 'Student Enrollment System',
        description: 
        `Digitized enrollment workflows that streamline student registration, 
        reducing processing time by up to 2x compared to traditional paper-based enrollment.`,
        technologies: ['Java', 'MySQL', 'NetBeans', 'JDBC'],
        github: 'https://github.com/SamuelAlac/Enrollment-System',
    },
    {
        photo: GUIDE_BOT,
        title: 'Guide Bot',
        description: 
        `AI-powered Discord bot that answers user questions and automates 
        moderation and utility tasks, improving server efficiency and engagement.`,
        technologies: ['JavaScript', 'Discord.js', 'RAG', 'LangChain'],
        github: 'https://github.com/SamuelAlac/GuideBot',
    },
]