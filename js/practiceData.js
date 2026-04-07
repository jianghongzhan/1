// 四级真题练习数据 - 包含听力、阅读、写作、翻译真题及解析

const PracticeData = {
  // ==================== 听力真题 ====================
  listening: {
    shortNews: [
      {
        id: "ln-001",
        title: "2023年6月真题 - 短篇新闻",
        audio: "新闻1.mp3",
        script: "A new study shows that reading books can help people live longer. Researchers found that people who read books for at least 30 minutes a day lived about two years longer than those who didn't read at all. The study followed 3,500 people for 12 years.",
        questions: [
          {
            q: "What does the study show about reading books?",
            options: ["It helps people make money", "It helps people live longer", "It helps people find jobs", "It helps people sleep better"],
            answer: 1,
            analysis: "新闻开头明确说明'reading books can help people live longer'，这是主旨信息。新闻通常采用倒金字塔结构，重要信息在前。"
          },
          {
            q: "How long should people read each day according to the study?",
            options: ["At least 10 minutes", "At least 30 minutes", "At least 1 hour", "At least 2 hours"],
            answer: 1,
            analysis: "关键词'at least 30 minutes a day'。听到数字时要立即记录，注意数字前的修饰词如'at least'。"
          },
          {
            q: "How many people were involved in the study?",
            options: ["1,200 people", "2,000 people", "3,500 people", "5,000 people"],
            answer: 2,
            analysis: "数字题，原文明确说'3,500 people'。注意新闻结尾常给出研究细节如样本量。"
          }
        ]
      },
      {
        id: "ln-002",
        title: "2023年6月真题 - 短篇新闻",
        script: "Scientists have discovered a new species of frog in the Amazon rainforest. The frog is bright orange and about 2 centimeters long. It was found by a team of researchers from Brazil and the United States. The discovery was published in the journal Nature.",
        questions: [
          {
            q: "What was discovered in the Amazon rainforest?",
            options: ["A new type of bird", "A new species of frog", "A new kind of plant", "A new insect"],
            answer: 1,
            analysis: "新闻开头第一句就是主旨：'discovered a new species of frog'。新闻首句通常包含最重要的信息。"
          },
          {
            q: "What color is the newly discovered frog?",
            options: ["Green", "Blue", "Orange", "Yellow"],
            answer: 2,
            analysis: "细节题，原文说'bright orange'。注意描述性形容词，如颜色、大小等常是考点。"
          },
          {
            q: "Where was the discovery published?",
            options: ["In a newspaper", "In the journal Nature", "On television", "On the internet"],
            answer: 1,
            analysis: "结尾信息，原文说'published in the journal Nature'。新闻结尾常交代消息来源或后续发展。"
          }
        ]
      }
    ],
    longDialogue: [
      {
        id: "ld-001",
        title: "2023年6月真题 - 长对话",
        script: `M: Hi Sarah, have you decided on your major yet?
W: Not really, John. I'm still hesitating between business and psychology.
M: That's a tough choice. What do you like about business?
W: Well, my parents run a small company, and I've always been interested in how businesses work. Plus, there are more job opportunities.
M: That makes sense. What about psychology?
W: I find the human mind fascinating. I've been reading a lot about it lately, and I think I could help people as a psychologist.
M: Have you talked to your parents about this?
W: Yes, they said they'd support whatever I choose. But my dad thinks business would be more practical.
M: What does your advisor say?
W: She suggested I take some introductory courses in both fields first, then decide.
M: That's good advice. When do you need to declare your major?
W: By the end of this semester, so I have about two months to decide.`,
        questions: [
          {
            q: "What is Sarah's dilemma?",
            options: ["Which university to attend", "Which major to choose", "Which job to take", "Which city to live in"],
            answer: 1,
            analysis: "对话开头Sarah说'hésitating between business and psychology'，这是对话的主题。长对话开头通常引入话题。"
          },
          {
            q: "Why does Sarah consider business?",
            options: ["Her parents want her to study it", "She likes math", "Her parents run a company and there are more job opportunities", "It's easier than psychology"],
            answer: 2,
            analysis: "Sarah提到两个原因：'parents run a small company'和'more job opportunities'。注意对话中的因果关系词如'Plus'。"
          },
          {
            q: "What does Sarah's father think about her choice?",
            options: ["He prefers psychology", "He thinks business is more practical", "He wants her to study art", "He doesn't care"],
            answer: 1,
            analysis: "关键句：'my dad thinks business would be more practical'。注意表达态度和观点的词汇。"
          },
          {
            q: "What does Sarah's advisor suggest?",
            options: ["Choose business immediately", "Take introductory courses in both fields first", "Ask her parents to decide", "Don't worry about the major"],
            answer: 1,
            analysis: "建议题，原文：'She suggested I take some introductory courses in both fields first'。注意suggest, recommend, advise等词后的内容。"
          }
        ]
      }
    ],
    passage: [
      {
        id: "lp-001",
        title: "2023年6月真题 - 听力篇章",
        script: `Today, I want to talk about the importance of sleep. Many people underestimate the value of a good night's sleep. Research shows that adults need between 7 and 9 hours of sleep each night. However, studies indicate that about one-third of adults don't get enough sleep.

Lack of sleep can have serious consequences. It can affect your memory, your ability to concentrate, and even your health. People who don't sleep enough are more likely to get sick and take longer to recover. They're also more likely to have accidents at work or while driving.

So what can you do to improve your sleep? First, try to go to bed and wake up at the same time every day, even on weekends. Second, avoid caffeine and alcohol before bedtime. Third, create a comfortable sleeping environment - keep your bedroom cool, dark, and quiet. Finally, if you can't sleep after 20 minutes, get up and do something relaxing until you feel tired.`,
        questions: [
          {
            q: "What is the main topic of this passage?",
            options: ["How to stay healthy", "The importance of sleep", "How to improve memory", "The causes of accidents"],
            answer: 1,
            analysis: "篇章开头说'I want to talk about the importance of sleep'，这是主题句。听力篇章首句通常是主旨。"
          },
          {
            q: "How many hours of sleep do adults need according to research?",
            options: ["5-6 hours", "6-7 hours", "7-9 hours", "10-12 hours"],
            answer: 2,
            analysis: "数字题：'adults need between 7 and 9 hours'。听到数字范围时要完整记录。"
          },
          {
            q: "What percentage of adults don't get enough sleep?",
            options: ["About 10%", "About 25%", "About one-third", "About half"],
            answer: 2,
            analysis: "关键句：'about one-third of adults don't get enough sleep'。百分比和分数都是高频考点。"
          },
          {
            q: "Which is NOT mentioned as a tip for better sleep?",
            options: ["Go to bed at the same time every day", "Avoid caffeine before bedtime", "Exercise before sleep", "Keep the bedroom cool and quiet"],
            answer: 2,
            analysis: "排除题。原文提到：规律作息、避免咖啡因、舒适的睡眠环境，但没有提到睡前运动。需要听完全文综合判断。"
          }
        ]
      }
    ]
  },

  // ==================== 阅读真题 ====================
  reading: {
    vocabulary: [
      {
        id: "rv-001",
        title: "2023年6月真题 - 选词填空",
        passage: `The concept of "lifelong learning" has become increasingly popular in recent years. As technology continues to __1__ our world, the skills we learned in school may quickly become __2__. Therefore, it's essential for workers to continuously __3__ their knowledge and abilities.

Many companies now offer training programs to help employees __4__ new skills. Online courses have also made education more __5__ to people around the world. However, some people find it difficult to __6__ learning while working full-time.

The key to successful lifelong learning is to __7__ it a habit. Setting aside just 30 minutes a day for learning can make a significant __8__. It's also important to choose topics that __9__ your career goals.

In conclusion, lifelong learning is no longer optional but __10__ in today's rapidly changing world.`,
        wordBank: [
          { word: "transform", meaning: "改变，转变", pos: "v." },
          { word: "outdated", meaning: "过时的", pos: "adj." },
          { word: "update", meaning: "更新", pos: "v." },
          { word: "acquire", meaning: "获得", pos: "v." },
          { word: "accessible", meaning: "可获得的", pos: "adj." },
          { word: "maintain", meaning: "维持", pos: "v." },
          { word: "make", meaning: "使成为", pos: "v." },
          { word: "difference", meaning: "差异，影响", pos: "n." },
          { word: "align", meaning: "使一致", pos: "v." },
          { word: "essential", meaning: "必要的", pos: "adj." }
        ],
        answers: [
          { blank: 1, answer: "transform", analysis: "空格后有宾语'our world'，需要动词。transform表示'改变'，符合语境：技术改变世界。" },
          { blank: 2, answer: "outdated", analysis: "空格前有become，需要形容词作表语。outdated表示'过时的'，符合语境：学校学的技能会过时。" },
          { blank: 3, answer: "update", analysis: "空格前有to（不定式），需要动词原形。update表示'更新'，搭配knowledge合理。" },
          { blank: 4, answer: "acquire", analysis: "空格前有help，需要动词原形。acquire skills是固定搭配，表示'获得技能'。" },
          { blank: 5, answer: "accessible", analysis: "空格前有more，需要形容词。accessible表示'可获得的'，符合语境：网络课程让教育更容易获得。" },
          { blank: 6, answer: "maintain", analysis: "空格前有to，需要动词原形。maintain learning表示'坚持学习'，符合语境。" },
          { blank: 7, answer: "make", analysis: "make it a habit是固定句型，表示'使它成为习惯'。" },
          { blank: 8, answer: "difference", analysis: "空格前有a significant，需要名词。make a difference是固定搭配，表示'产生重要影响'。" },
          { blank: 9, answer: "align", analysis: "空格前有情态动词should省略，需要动词原形。align with表示'与...一致'。" },
          { blank: 10, answer: "essential", analysis: "空格前有but，与optional形成对比。essential表示'必要的'，符合语境。" }
        ]
      }
    ],
    matching: [
      {
        id: "rm-001",
        title: "2023年6月真题 - 信息匹配",
        paragraphs: [
          { id: "A", text: "The sharing economy has transformed the way people travel, work, and consume goods. Platforms like Airbnb and Uber have created new opportunities for individuals to monetize their assets and skills. This economic model is based on the idea of access rather than ownership." },
          { id: "B", text: "Critics of the sharing economy argue that it exploits workers by classifying them as independent contractors rather than employees. This means workers often lack benefits like health insurance and paid leave. Some cities have implemented regulations to protect these workers." },
          { id: "C", text: "Environmental benefits of the sharing economy include reduced consumption and waste. When people share resources like cars and tools, fewer items need to be produced. Studies show that car-sharing programs can reduce the number of vehicles on the road by up to 20 percent." },
          { id: "D", text: "Trust is a crucial element in the sharing economy. Platforms use rating systems and reviews to build trust between strangers. Without these mechanisms, the sharing economy would not function effectively. Users rely on the experiences of others to make informed decisions." },
          { id: "E", text: "The sharing economy has disrupted traditional industries. Hotels and taxi companies have faced significant challenges from platforms like Airbnb and Uber. Some have adapted by offering their own sharing services, while others have lobbied for stricter regulations." },
          { id: "F", text: "Young people are more likely to participate in the sharing economy. A survey found that 70% of millennials have used sharing economy services. This generation values experiences over ownership, which aligns with the sharing economy's principles." }
        ],
        statements: [
          {
            q: "The sharing economy helps reduce the number of cars on the streets.",
            answer: "C",
            analysis: "关键词'reduce the number of cars'定位到C段'car-sharing programs can reduce the number of vehicles on the road'，同义替换：streets→road。"
          },
          {
            q: "Traditional hotels and taxi companies have been affected by the sharing economy.",
            answer: "E",
            analysis: "关键词'hotels and taxi companies'定位到E段，原文提到这些行业面临挑战。"
          },
          {
            q: "Workers in the sharing economy often miss out on employment benefits.",
            answer: "B",
            analysis: "关键词'employment benefits'定位到B段'lack benefits like health insurance and paid leave'。"
          },
          {
            q: "Young people prefer having experiences to owning things.",
            answer: "F",
            analysis: "关键词'young people'和'experiences over ownership'定位到F段'This generation values experiences over ownership'。"
          },
          {
            q: "Rating systems help establish trust in the sharing economy.",
            answer: "D",
            analysis: "关键词'rating systems'和'trust'定位到D段'Platforms use rating systems and reviews to build trust'。"
          }
        ]
      }
    ],
    carefulReading: [
      {
        id: "rc-001",
        title: "2023年6月真题 - 仔细阅读",
        passage: `Artificial intelligence (AI) is rapidly changing the job market. While some fear that AI will replace human workers, experts suggest a more nuanced picture. AI will likely automate certain tasks rather than entire jobs, and it will also create new positions that don't exist today.

According to a report by the World Economic Forum, AI and automation will displace 85 million jobs by 2025, but they will also create 97 million new roles. The key for workers is to develop skills that complement AI rather than compete with it. These include creativity, emotional intelligence, and complex problem-solving.

Some industries will be more affected than others. Manufacturing and transportation jobs are most at risk of automation. However, healthcare, education, and creative industries are expected to see growth. Jobs that require human interaction and judgment will remain important.

The transition will not be easy. Workers will need to be retrained, and education systems will need to adapt. Governments and businesses must work together to ensure that the benefits of AI are shared broadly. Without proper policies, AI could increase inequality.

Despite the challenges, many experts remain optimistic. They argue that throughout history, technology has created more jobs than it has destroyed. The key is to prepare for the changes ahead and embrace lifelong learning.`,
        questions: [
          {
            q: "What is the main idea of the passage?",
            options: ["AI will destroy all jobs", "AI will have both positive and negative effects on employment", "AI is not useful for the job market", "AI will only create problems"],
            answer: 1,
            analysis: "主旨题。文章讨论AI对就业市场的双重影响：displace jobs（负面）和create new roles（正面）。首段和尾段都体现了这个主题。"
          },
          {
            q: "According to the World Economic Forum report, how many new jobs will AI create by 2025?",
            options: ["85 million", "97 million", "100 million", "50 million"],
            answer: 1,
            analysis: "细节题。定位到第二段：'create 97 million new roles'。数字题要精确记录。"
          },
          {
            q: "Which skills are mentioned as complementing AI?",
            options: ["Programming and coding", "Creativity, emotional intelligence, and problem-solving", "Data analysis", "Machine learning"],
            answer: 1,
            analysis: "细节题。定位到第二段：'These include creativity, emotional intelligence, and complex problem-solving'。"
          },
          {
            q: "Which industries are expected to see growth according to the passage?",
            options: ["Manufacturing and transportation", "Healthcare, education, and creative industries", "Agriculture and mining", "Banking and finance"],
            answer: 1,
            analysis: "细节题。定位到第三段：'healthcare, education, and creative industries are expected to see growth'。"
          },
          {
            q: "What does the author suggest about AI's overall impact?",
            options: ["It will definitely cause mass unemployment", "Technology has historically created more jobs than it destroyed", "Governments should ban AI", "Workers don't need to change their skills"],
            answer: 1,
            analysis: "推断题。尾段说'throughout history, technology has created more jobs than it has destroyed'，作者持乐观态度。"
          }
        ]
      }
    ]
  },

  // ==================== 写作真题 ====================
  writing: {
    argumentative: [
      {
        id: "w-001",
        title: "2023年6月真题 - 议论文",
        topic: "Directions: For this part, you are allowed 30 minutes to write an essay on whether college students should take part-time jobs. You should write at least 120 words but no more than 180 words.",
        template: `Introduction:
Nowadays, whether college students should take part-time jobs has become a heated topic. Some people believe that part-time jobs distract students from their studies, while others argue that they provide valuable experience. In my opinion, I support the latter view.

Body:
There are several reasons for my position. First, part-time jobs help students gain practical experience and develop important skills such as time management and communication. Second, earning their own money teaches students the value of hard work and financial responsibility. Third, working experience can make students more competitive in the job market after graduation.

Conclusion:
In conclusion, I believe that taking part-time jobs is beneficial for college students. However, it is important to strike a balance between work and study. Students should prioritize their academic responsibilities while making the most of part-time job opportunities.`,
        keyPhrases: [
          "Nowadays, ... has become a heated topic",
          "Some people believe that..., while others argue that...",
          "In my opinion, I support the latter view",
          "There are several reasons for my position",
          "First,... Second,... Third,...",
          "In conclusion, I believe that..."
        ],
        tips: "议论文要点：1. 开头引入话题并表明立场；2. 中间分段论述，每段一个论据；3. 结尾总结观点。使用过渡词增强连贯性。"
      }
    ],
    application: [
      {
        id: "w-002",
        title: "2023年6月真题 - 应用文（书信）",
        topic: "Directions: For this part, you are allowed 30 minutes to write a letter to your foreign friend Jack, inviting him to visit your hometown during the summer vacation. You should write at least 120 words but no more than 180 words.",
        template: `Dear Jack,

I hope this letter finds you well. I am writing to invite you to visit my hometown during the upcoming summer vacation.

My hometown, Hangzhou, is a beautiful city famous for its West Lake and traditional tea culture. During summer, the lotus flowers in West Lake are in full bloom, creating a breathtaking scene. I would love to show you around the city and introduce you to local delicacies like Dongpo Pork and Longjing Shrimp.

I have already planned some activities for your visit. We can take a boat ride on West Lake, visit the Lingyin Temple, and enjoy a tea ceremony at a traditional teahouse. I am sure you will have an unforgettable experience.

Please let me know if you can come and when would be convenient for you. I will make all the necessary arrangements. I am looking forward to your reply.

Yours sincerely,
Li Ming`,
        keyPhrases: [
          "I hope this letter finds you well",
          "I am writing to...",
          "I would love to...",
          "Please let me know if...",
          "I am looking forward to your reply",
          "Yours sincerely"
        ],
        tips: "书信要点：1. 开头寒暄并说明写信目的；2. 中间详细阐述内容；3. 结尾表达期待并请求回复。注意书信格式。"
      }
    ],
    chart: [
      {
        id: "w-003",
        title: "2023年6月真题 - 图表文",
        topic: "Directions: For this part, you are allowed 30 minutes to write an essay based on the chart below which shows the changes in the number of students studying abroad from 2018 to 2022. You should write at least 120 words but no more than 180 words.",
        template: `Introduction:
The chart illustrates the changes in the number of Chinese students studying abroad from 2018 to 2022. As we can see, the number has experienced significant fluctuations during this period.

Body:
In 2018, approximately 660,000 students went abroad for their studies. This number increased steadily to reach its peak of around 700,000 in 2019. However, due to the global pandemic, there was a sharp decline in 2020 and 2021, with the number dropping to about 450,000. The situation improved in 2022, with numbers rebounding to approximately 520,000.

Several factors may account for these changes. The pandemic made international travel difficult and raised safety concerns. Meanwhile, online education became a temporary alternative. The recovery in 2022 suggests that students' interest in overseas education remains strong.

Conclusion:
In conclusion, while the pandemic temporarily affected the number of students studying abroad, the long-term trend suggests continued growth. Students and educational institutions need to adapt to the changing circumstances.`,
        keyPhrases: [
          "The chart illustrates...",
          "As we can see...",
          "In 2018, approximately...",
          "This number increased/decreased...",
          "Several factors may account for these changes",
          "In conclusion..."
        ],
        tips: "图表文要点：1. 开头描述图表主题；2. 中间分析数据变化趋势；3. 解释原因；4. 结尾总结或预测。注意数据描述词汇的多样性。"
      }
    ]
  },

  // ==================== 翻译真题 ====================
  translation: [
    {
      id: "t-001",
      title: "2023年6月真题 - 翻译",
      source: "中国书法是中国传统文化的重要组成部分，有着悠久的历史。它不仅是一种书写艺术，更是一种修身养性的方式。练习书法需要耐心和专注，能够帮助人们放松心情、减轻压力。如今，越来越多的人开始学习书法，将其作为一种兴趣爱好。许多学校也开设了书法课程，让学生从小接触这一传统艺术。",
      reference: "Chinese calligraphy is an important part of traditional Chinese culture, with a long history. It is not only a writing art but also a way of self-cultivation. Practicing calligraphy requires patience and concentration, which can help people relax and reduce stress. Nowadays, more and more people are learning calligraphy as a hobby. Many schools have also opened calligraphy courses to let students get in touch with this traditional art from an early age.",
      keyVocabulary: [
        { chinese: "中国书法", english: "Chinese calligraphy" },
        { chinese: "传统文化", english: "traditional culture" },
        { chinese: "重要组成部分", english: "an important part of" },
        { chinese: "悠久的历史", english: "a long history" },
        { chinese: "书写艺术", english: "writing art" },
        { chinese: "修身养性", english: "self-cultivation" },
        { chinese: "耐心和专注", english: "patience and concentration" },
        { chinese: "放松心情", english: "relax" },
        { chinese: "减轻压力", english: "reduce stress" },
        { chinese: "兴趣爱好", english: "hobby" }
      ],
      sentenceAnalysis: [
        {
          chinese: "中国书法是中国传统文化的重要组成部分，有着悠久的历史。",
          analysis: "两个分句，用with连接更简洁。'有着'处理为'with a...'结构。"
        },
        {
          chinese: "它不仅是一种书写艺术，更是一种修身养性的方式。",
          analysis: "'不仅...更...'用'not only...but also...'结构。'修身养性'可译为'self-cultivation'。"
        },
        {
          chinese: "练习书法需要耐心和专注，能够帮助人们放松心情、减轻压力。",
          analysis: "用which引导非限制性定语从句，使句子更流畅。'能够'处理为'can'。"
        }
      ],
      tips: "翻译要点：1. 理解中文句意，适当调整语序；2. 注意中英文句式差异，补充主语；3. 使用恰当的连接词使译文流畅；4. 文化词汇要准确翻译。"
    },
    {
      id: "t-002",
      title: "2022年12月真题 - 翻译",
      source: "中秋节是中国最重要的传统节日之一，在农历八月十五这一天庆祝。这个节日象征着家庭团圆，因此无论人们身在何处，都会尽力回家与家人共度佳节。中秋节的标志性食品是月饼，圆圆的月饼象征着团圆和美满。人们还会在这一天赏月、吃月饼、喝茶，共度美好的时光。",
      reference: "The Mid-Autumn Festival is one of the most important traditional festivals in China, celebrated on the 15th day of the eighth lunar month. This festival symbolizes family reunion, so no matter where people are, they will try their best to return home to celebrate with their families. The signature food of the Mid-Autumn Festival is mooncakes. The round mooncakes symbolize reunion and happiness. People also enjoy the moon, eat mooncakes, and drink tea on this day to spend a wonderful time together.",
      keyVocabulary: [
        { chinese: "中秋节", english: "Mid-Autumn Festival" },
        { chinese: "传统节日", english: "traditional festival" },
        { chinese: "农历", english: "lunar calendar" },
        { chinese: "象征", english: "symbolize" },
        { chinese: "家庭团圆", english: "family reunion" },
        { chinese: "尽力", english: "try one's best" },
        { chinese: "标志性食品", english: "signature food" },
        { chinese: "月饼", english: "mooncake" },
        { chinese: "美满", english: "happiness" },
        { chinese: "赏月", english: "enjoy the moon / admire the moon" }
      ],
      tips: "注意节日翻译的首字母大写，农历表达用lunar calendar，文化词汇如'团圆'需要意译为reunion。"
    }
  ],

  // ==================== 核心词汇 ====================
  vocabulary: {
    highFrequency: [
      { word: "abandon", meaning: "放弃，抛弃", example: "He abandoned his plan to study abroad." },
      { word: "absolute", meaning: "绝对的", example: "There is no absolute truth in science." },
      { word: "absorb", meaning: "吸收，吸引", example: "Plants absorb water from the soil." },
      { word: "abstract", meaning: "抽象的", example: "Love is an abstract concept." },
      { word: "abundant", meaning: "丰富的", example: "The region is abundant in natural resources." },
      { word: "accelerate", meaning: "加速", example: "The car accelerated to 100 km/h." },
      { word: "acceptable", meaning: "可接受的", example: "This solution is acceptable to both parties." },
      { word: "access", meaning: "进入，通道", example: "Students have access to the library." },
      { word: "accomplish", meaning: "完成，实现", example: "She accomplished her goal of losing weight." },
      { word: "accurate", meaning: "准确的", example: "The report provides accurate information." },
      { word: "achieve", meaning: "实现，达到", example: "He achieved great success in his career." },
      { word: "acknowledge", meaning: "承认，感谢", example: "She acknowledged her mistake." },
      { word: "acquire", meaning: "获得", example: "He acquired a lot of knowledge from books." },
      { word: "adapt", meaning: "适应", example: "It took time to adapt to the new environment." },
      { word: "adequate", meaning: "充足的", example: "We have adequate supplies for the trip." },
      { word: "adjust", meaning: "调整", example: "You need to adjust your schedule." },
      { word: "admire", meaning: "钦佩，欣赏", example: "I admire her courage." },
      { word: "adopt", meaning: "采纳，收养", example: "The company adopted a new policy." },
      { word: "advance", meaning: "前进，进步", example: "Technology continues to advance rapidly." },
      { word: "advantage", meaning: "优势", example: "Being bilingual is a great advantage." }
    ],
    phrases: [
      { phrase: "account for", meaning: "解释，占...比例", example: "Women account for 50% of the workforce." },
      { phrase: "appeal to", meaning: "吸引，呼吁", example: "The idea appeals to young people." },
      { phrase: "apply for", meaning: "申请", example: "He applied for a job at the bank." },
      { phrase: "break down", meaning: "分解，出故障", example: "The car broke down on the highway." },
      { phrase: "bring about", meaning: "导致，引起", example: "The policy brought about significant changes." },
      { phrase: "carry out", meaning: "执行，实施", example: "They carried out the experiment successfully." },
      { phrase: "come up with", meaning: "提出，想出", example: "She came up with a creative solution." },
      { phrase: "concentrate on", meaning: "专注于", example: "I need to concentrate on my studies." },
      { phrase: "deal with", meaning: "处理，应对", example: "How do you deal with stress?" },
      { phrase: "depend on", meaning: "依赖，取决于", example: "Success depends on hard work." },
      { phrase: "figure out", meaning: "弄清楚", example: "I can't figure out the answer." },
      { phrase: "focus on", meaning: "集中注意力于", example: "Let's focus on the main issue." },
      { phrase: "get rid of", meaning: "摆脱，除去", example: "We need to get rid of bad habits." },
      { phrase: "give up", meaning: "放弃", example: "Don't give up on your dreams." },
      { phrase: "go through", meaning: "经历，仔细检查", example: "She went through a difficult time." },
      { phrase: "look forward to", meaning: "期待", example: "I look forward to meeting you." },
      { phrase: "make up", meaning: "组成，编造", example: "Women make up half the population." },
      { phrase: "point out", meaning: "指出", example: "He pointed out the mistakes in my essay." },
      { phrase: "put off", meaning: "推迟", example: "The meeting was put off until next week." },
      { phrase: "take part in", meaning: "参加", example: "Many students take part in after-school activities." }
    ]
  }
};