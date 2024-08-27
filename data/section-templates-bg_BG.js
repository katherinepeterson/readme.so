export const bg_BG = [
    {
      slug: 'title-and-description',
      name: 'Title and Description',
      markdown: `
  # Заглавие на проекта
  
  Кратко описание на това какво прави този проект и за кого е предназначен
  
  `,
    },
    {
      slug: 'installation',
      name: 'Installation',
      markdown: `
  ## Инсталация
  
  Инсталирайте моя проект с npm
  
  \`\`\`bash
    npm install my-project
    cd my-project
  \`\`\`
      `,
    },
    {
      slug: 'logo',
      name: 'Logo',
      markdown: `
  ![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)
  
  `,
    },
    {
      slug: 'run-locally',
      name: 'Run Locally',
      markdown: `
  ## Стартирайте локално
  
  Клонирайте проекта
  
  \`\`\`bash
    git clone https://link-to-project
  \`\`\`
  
  Отидете в директорията на проекта
  
  \`\`\`bash
    cd my-project
  \`\`\`
  
  Инсталиране на зависимости
  
  \`\`\`bash
    npm install
  \`\`\`
  
  Стартирайте сървъра
  
  \`\`\`bash
    npm run start
  \`\`\`
  
  `,
    },
    {
      slug: 'screenshots',
      name: 'Screenshots',
      markdown: `
  ## Екранни снимки
  
  ![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
  
  `,
    },
    {
      slug: 'env-variables',
      name: 'Environment Variables',
      markdown: `
  ## Променливи на средата
  
  За да стартирате този проект, ще трябва да добавите следните променливи на средата към вашия .env файл
  
  \`API_KEY\`
  
  \`ANOTHER_API_KEY\`
  
  `,
    },
    {
      slug: 'features',
      name: 'Features',
      markdown: `
  ## Характеристики
  
  - Превключване на светъл/тъмен режим
  - Визуализации на живо
  - Режим на цял екран
  - Cross platform
  
  `,
    },
    {
      slug: 'usage-examples',
      name: 'Usage/Examples',
      markdown: `
  ## Как да използваме/Примери
  
  \`\`\`javascript
  import Component from 'my-project'
  
  function App() {
    return <Component />
  }
  \`\`\`
  
  `,
    },
    {
      slug: 'api',
      name: 'API Reference',
      markdown: `
  ## Справка за API
  
  #### Вземете всички елементи
  
  \`\`\`http
    GET /api/items
  \`\`\`
  
  | Parameter | Type     | Description                |
  | :-------- | :------- | :------------------------- |
  | \`api_key\` | \`string\` | **Required**. Your API key |
  
  #### Get item
  
  \`\`\`http
    GET /api/items/$\{id}
  \`\`\`
  
  | Parameter | Type     | Description                       |
  | :-------- | :------- | :-------------------------------- |
  | \`id\`      | \`string\` | **Required**. Id of item to fetch |
  
  #### add(num1, num2)
  
  Взема две числа и връща сумата.
  
  `,
    },
    {
      slug: 'contributing',
      name: 'Contributing',
      markdown: `
  ## Принос
  
  Приносите винаги са добре дошли!
  
  See \`contributing.md\` for ways to get started.
  
  Моля, придържайте се към project's \`code of conduct\`.
  
  `,
    },
    {
      slug: 'tests',
      name: 'Running Tests',
      markdown: `
  ## Изпълнение на тестове
  
  За да стартирате тестове, изпълнете следната команда
  
  \`\`\`bash
    npm run test
  \`\`\`
  
  `,
    },
    {
      slug: 'license',
      name: 'License',
      markdown: `
  ## Лиценз
  
  [MIT](https://choosealicense.com/licenses/mit/)
  
  `,
    },
    {
      slug: 'badges',
      name: 'Badges',
      markdown: `
  ## Значки
  
  Добавете значки от някъде като: [shields.io](https://shields.io/)
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
  [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
  
  `,
    },
    {
      slug: 'roadmap',
      name: 'Roadmap',
      markdown: `
  ## Пътна карта
  
  - Допълнителна поддръжка на браузъра
  
  - Добавете още интеграции
  
  `,
    },
    {
      slug: 'authors',
      name: 'Authors',
      markdown: `
  ## Автори
  
  - [@octokatherine](https://www.github.com/octokatherine)
  
  `,
    },
    {
      slug: 'acknowledgement',
      name: 'Acknowledgements',
      markdown: `
  ## Благодарности
  
   - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
   - [Awesome README](https://github.com/matiassingers/awesome-readme)
   - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
  
  `,
    },
    {
      slug: 'support',
      name: 'Support',
      markdown: `
  ## Поддръжка
  
  За поддръжка, изпратете email fake@fake.com или се присъединете към нашия Slack канал.
  
  `,
    },
    {
      slug: 'feedback',
      name: 'Feedback',
      markdown: `
  ## Обратна връзка
  
  Ако имате обратна връзка, моля, свържете се с нас на fake@fake.com
  
  `,
    },
    {
      slug: 'related',
      name: 'Related',
      markdown: `
  ## Свързани
  
  Ето някои свързани проекти
  
  [Awesome README](https://github.com/matiassingers/awesome-readme)
  
  `,
    },
    {
      slug: 'demo',
      name: 'Demo',
      markdown: `
  ## Демонстрация
  
  Поставете gif или връзка към демонстрация
  
  `,
    },
    {
      slug: 'tech',
      name: 'Tech',
      markdown: `
  ## Технически стек
  
  **Client:** React, Redux, TailwindCSS
  
  **Server:** Node, Express
  
  `,
    },
    {
      slug: 'optimizations',
      name: 'Optimizations',
      markdown: `
  ## Оптимизации
  
  Какви оптимизации направихте в кода си? напр. рефактори, подобрения на производителността, достъпност
  
  `,
    },
    {
      slug: 'lessons',
      name: 'Lessons',
      markdown: `
  ## Научени уроци
  
  Какво научихте, докато изграждахте този проект? С какви предизвикателства се сблъскахте и как ги преодоляхте?
  
  `,
    },
    {
      slug: 'faq',
      name: 'FAQ',
      markdown: `
  ## ЧЕСТО ЗАДАВАНИ ВЪПРОСИ
  
  #### Въпрос 1
  
  Отговор 1
  
  #### Въпрос 2
  
  Отговор 2
  
  `,
    },
    {
      slug: 'used-by',
      name: 'Used By',
      markdown: `
  ## Използва се от
  
  Този проект се използва от следните компании:
  
  - Компания 1
  - Компания 2
  
  `,
    },
    {
      slug: 'documentation',
      name: 'Documentation',
      markdown: `
  ## Документация
  
  [Documentation](https://linktodocumentation)
  
  `,
    },
    {
      slug: 'deployment',
      name: 'Deployment',
      markdown: `
  ## Разгръщане
  
  За да разгърнете този проект, стартирайте
  
  \`\`\`bash
    npm run deploy
  \`\`\`
  
  `,
    },
    {
      slug: 'appendix',
      name: 'Appendix',
      markdown: `
  ## Приложение
  
  Всяка допълнителна информация отива тук
  
  `,
    },
    {
      slug: 'github-profile-intro',
      name: 'Github Profile - Introduction',
      markdown: `
  # Здравейте, аз съм Катрин! 👋
  
  `,
    },
    {
      slug: 'github-profile-about-me',
      name: 'Github Profile - About Me',
      markdown: `
  ## 🚀 За мен
  Аз съм разработчик на пълен стек...
  
  `,
    },
    {
      slug: 'github-profile-skills',
      name: 'Github Profile - Skills',
      markdown: `
  ## 🛠 Умения
  Javascript, HTML, CSS...
  
  `,
    },
    {
      slug: 'github-profile-links',
      name: 'Github Profile - Links',
      markdown: `
  ## 🔗 Линкове
  [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
  [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
  [![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
  
  `,
    },
    {
      slug: 'github-profile-other',
      name: 'Github Profile - Other',
      markdown: `
  ## Други често срещани секции на профили в Github
  👩‍💻 В момента работя върху...
  
  🧠 В момента уча...
  
  👯‍♀️ Търся да си сътруднича на...
  
  🤔 Търся помощ за...
  
  💬 Попитайте ме за...
  
  📫 Как да стигна до мен...
  
  😄 Местоимения...
  
  ⚡️ Забавен факт...
  
  `,
    },
    {
      slug: 'colorreference',
      name: 'Color Reference',
      markdown: `## Color Reference
  
  | Color             | Hex                                                                |
  | ----------------- | ------------------------------------------------------------------ |
  | Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
  | Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
  | Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
  | Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |
  
  `,
    },
  ]
  