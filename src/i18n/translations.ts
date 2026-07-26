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
      badge: 'Инженер',
      description: [
        'Backend Software Engineer, специализирующийся на production-ready разработке на Python. Опыт в проектировании отказоустойчивых API (Модульные монолиты / Микросервисы), событийно-ориентированных систем, real-time голосовых стеков и production LLM интеграций с использованием RAG паттернов.',
        'Глубокая фокусировка на оптимизации алгоритмов, тюнинге производительности сложных SQL-запросов и проектировании низколатентных баз данных. Умею разворачивать приложения на Linux серверах и поддерживать/расширять их.',
        'Использую <strong>C#</strong> как вторичный язык для системного программирования и разработки игровой механики. В свободное время разрабатываю <span class="badge-danger">OVERLIMIT</span> — кастомный аркадный гоночный симулятор на <strong>Unity и C#</strong>, применяя продвинутые принципы ООП, кастомную физику и строгую оптимизацию кода. Поддерживаю активную, чистую и production-grade кодовую базу во всех публичных репозиториях на GitHub.',
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
        items: ['AI Agents & LLM', 'RAG Architecture', 'LangChain', 'Ollama', 'Vector Databases', 'Machine Learning', 'pandas'],
      },
      tools: {
        title: 'Architecture & Data',
        items: ['High-load Systems', 'Microservices Architecture', 'Database Design', 'PostgreSQL', 'MySQL', 'Redis', 'Celery', 'Alembic', 'Payment Integration'],
      },
      other: {
        title: 'DevOps & Infrastructure',
        items: ['Docker', 'Docker-compose', 'CI/CD', 'Git', 'Linux'],
      },
      hobby: {
        title: 'Hobby / Second Language',
        items: ['C#', 'Unity Game Engine'],
      },
    },
    contact: {
      title: '# Контакты',
      description: 'Открыт для сотрудничества и интересных проектов. Свяжитесь со мной:',
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
        'Backend Software Engineer specializing in production-ready Python development. Experienced in architecting fault-tolerant APIs (Modular Monoliths / Microservices), event-driven systems, real-time voice stacks, and production LLM integrations using RAG patterns.',
        'Deeply focused on algorithm optimization, complex SQL performance tuning, and low-latency database design. Can deploy apps on Linux servers, and support/expand them.',
        'Leveraging <strong>C#</strong> as a secondary language for systems programming and gameplay engineering. In my spare time, I develop OVERLIMIT — a custom arcade racing simulator built with <strong>Unity and C#</strong>, applying advanced OOP principles, custom physics, and rigorous code optimization. I maintain an active, clean, and production-grade codebase across all public repositories on GitHub.',
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
        items: ['AI Agents & LLM', 'RAG Architecture', 'LangChain', 'Ollama', 'Vector Databases', 'Machine Learning', 'pandas'],
      },
      tools: {
        title: 'Architecture & Data',
        items: ['High-load Systems', 'Microservices Architecture', 'Database Design', 'PostgreSQL', 'MySQL', 'Redis', 'Celery', 'Alembic', 'Payment Integration'],
      },
      other: {
        title: 'DevOps & Infrastructure',
        items: ['Docker', 'Docker-compose', 'CI/CD', 'Git', 'Linux'],
      },
      hobby: {
        title: 'Hobby / Second Language',
        items: ['C#', 'Unity Game Engine'],
      },
    },
    contact: {
      title: '# Contact',
      description: 'Open for collaboration and interesting projects. Reach me out:',
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
      label: 'Тема',
      vscode: 'VS Code Dark',
      deepWine: 'Wine',
      lightSepia: 'Light Sepia',
    },
  },
};
