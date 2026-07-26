// Translation types and structure
export type Language = 'ru' | 'en';

export interface Translations {
  header: {
    title: string;
  };
  about: {
    title: string;
    jobTitle: string;
    badge: string;
    description: string[];
    avatarCaption: string;
  };
  stack: {
    title: string;
    backend: {
      title: string;
      items: string[];
    };
    databases: {
      title: string;
      items: string[];
    };
    tools: {
      title: string;
      items: string[];
    };
    other: {
      title: string;
      items: string[];
    };
    hobby: {
      title: string;
      items: string[];
    };
  };
  contact: {
    title: string;
    description: string;
    github: string;
    email: string;
    telegram: string;
  };
  sidebar: {
    portfolio: string;
    sections: string;
  };
  tabs: {
    about: string;
    stack: string;
    contact: string;
  };
  themes: {
    label: string;
    vscode: string;
    deepWine: string;
    lightSepia: string;   
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    header: {
      title: 'vlad_portfolio.dev',
    },
    about: {
      title: '# Обо мне',
      jobTitle: 'BACKEND',
      badge: 'Engineer',
      description: [
        'Backend Software Engineer со специализацией на <strong>Python</strong>. Проектирую отказоустойчивые API, событийно-ориентированные системы и LLM-интеграции с RAG. Опыт работы с микросервисами и модульными монолитами.',
        'Оптимизирую алгоритмы, тюнлю SQL-запросы, проектирую low-latency БД. Деплою и поддерживаю приложения на Linux-серверах.',
        'Второй язык — <strong>C#</strong> для системного программирования и геймдева. В свободное время разрабатываю <span class="badge-danger">OVERLIMIT</span> — аркадный гоночный симулятор на <strong>Unity</strong> с кастомной физикой. Весь публичный код на GitHub — production-grade.',
      ],
      avatarCaption: 'vlad_portfolio.dev',
    },
    stack: {
      title: '# Технологический стек',
      backend: {
        title: 'Core & Backend',
        items: ['Python 3.11+', 'asyncio', 'FastAPI', 'Pydantic', 'Swagger', 'uv', 'Logging', 'Pytest'],
      },
      databases: {
        title: 'AI & Machine Learning',
        items: ['AI Agents & LLM', 'RAG Architecture', 'LangChain', 'Ollama', 'Vector DBs', 'pandas'],
      },
      tools: {
        title: 'Architecture & Data',
        items: ['High-load Systems', 'Microservices', 'PostgreSQL', 'MySQL', 'Redis', 'Celery', 'Alembic'],
      },
      other: {
        title: 'DevOps & Infrastructure',
        items: ['Docker', 'Docker Compose', 'CI/CD', 'Git', 'Linux', 'Payment APIs'],
      },
      hobby: {
        title: 'Hobby / Second Stack',
        items: ['C#', 'Unity', 'Game Development', 'Custom Physics'],
      },
    },
    contact: {
      title: '# Контакты',
      description: 'Открыт для предложений и интересных проектов:',
      github: 'GitHub',
      email: 'Email',
      telegram: 'Telegram',
    },
    sidebar: {
      portfolio: 'PORTFOLIO',
      sections: 'Секции',
    },
    tabs: {
      about: 'ОБО МНЕ',
      stack: 'СТЕК',
      contact: 'КОНТАКТЫ',
    },
    themes: {
      label: 'Тема',
      vscode: 'VS Code Dark',
      deepWine: 'Wine',
      lightSepia: 'Light Sepia',
    },
  },
  en: {
    header: {
      title: 'vlad_portfolio.dev',
    },
    about: {
      title: '# About Me',
      jobTitle: 'BACKEND',
      badge: 'Engineer',
      description: [
        'Backend Software Engineer specialized in <strong>Python</strong>. Architect fault-tolerant APIs, event-driven systems, and LLM integrations with RAG. Experience with microservices and modular monoliths.',
        'Optimize algorithms, tune SQL queries, design low-latency databases. Deploy and maintain applications on Linux servers.',
        'Second stack — <strong>C#</strong> for systems programming and game development. Building <span class="badge-danger">OVERLIMIT</span> — arcade racing simulator on <strong>Unity</strong> with custom physics. All public code on GitHub is production-grade.',
      ],
      avatarCaption: 'vlad_portfolio.dev',
    },
    stack: {
      title: '# Tech Stack',
      backend: {
        title: 'Core & Backend',
        items: ['Python 3.11+', 'asyncio', 'FastAPI', 'Pydantic', 'Swagger', 'uv', 'Logging', 'Pytest'],
      },
      databases: {
        title: 'AI & Machine Learning',
        items: ['AI Agents & LLM', 'RAG Architecture', 'LangChain', 'Ollama', 'Vector DBs', 'pandas'],
      },
      tools: {
        title: 'Architecture & Data',
        items: ['High-load Systems', 'Microservices', 'PostgreSQL', 'MySQL', 'Redis', 'Celery', 'Alembic'],
      },
      other: {
        title: 'DevOps & Infrastructure',
        items: ['Docker', 'Docker Compose', 'CI/CD', 'Git', 'Linux', 'Payment APIs'],
      },
      hobby: {
        title: 'Hobby / Second Stack',
        items: ['C#', 'Unity', 'Game Development', 'Custom Physics'],
      },
    },
    contact: {
      title: '# Contact',
      description: 'Open for job opportunities and interesting projects:',
      github: 'GitHub',
      email: 'Email',
      telegram: 'Telegram',
    },
    sidebar: {
      portfolio: 'PORTFOLIO',
      sections: 'Sections',
    },
    tabs: {
      about: 'ABOUT ME',
      stack: 'STACK',
      contact: 'CONTACT',
    },
    themes: {
      label: 'Theme',
      vscode: 'VS Code Dark',
      deepWine: 'Wine',
      lightSepia: 'Light Sepia',
    },
  },
};
