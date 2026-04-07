const WordRoots = [
  {
    id: 1,
    root: "听力理解 - 短篇新闻",
    origin: "听力部分",
    meaning: "听取3篇短新闻，每篇2-3题，共7题",
    description: "短篇新闻听力是四级考试新增题型，材料来源于BBC、VOA等国际新闻广播。每篇新闻长度约150-200词，语速适中。考察学生对新闻主旨、细节信息的抓取能力。答题技巧：预读选项预测内容，抓住新闻开头的关键信息（新闻通常采用倒金字塔结构，重要信息在前），注意数字、时间、地点等细节。",
    examples: [
      {
        word: "真题示例1",
        meaning: "新闻主旨题",
        breakdown: { root: "听力理解" },
        explanation: "Q: What is the news report mainly about? 技巧：听新闻开头第一句，通常包含主旨信息。选项中找与开头信息匹配的关键词。"
      },
      {
        word: "真题示例2",
        meaning: "细节信息题",
        breakdown: { root: "听力理解" },
        explanation: "Q: How many people were injured in the accident? 技巧：听到数字时立即记录，注意数字的变化（increase/decrease/by/to等词）。"
      },
      {
        word: "真题示例3",
        meaning: "因果关系题",
        breakdown: { root: "听力理解" },
        explanation: "Q: Why did the company decide to close the factory? 技巧：注意because, due to, as a result of等因果词，答案往往紧跟这些词。"
      }
    ],
    quiz: {
      question: "短篇新闻听力的最佳答题策略是什么？",
      options: ["从头到尾完整听完再作答", "预读选项预测内容，抓住开头关键信息", "只关注数字和时间信息", "不需要提前阅读选项"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "听力理解 - 长对话",
    origin: "听力部分",
    meaning: "听取2篇长对话，每篇5-7题，共8题",
    description: "长对话听力是四级传统题型，对话长度约250-300词，涉及日常交流场景如校园生活、职场面试、旅行计划等。对话双方轮流发言，信息分布较均匀。考察学生对对话主题、人物关系、事件发展的理解。答题技巧：注意对话开头的场景设定，关注说话人的态度和情感，抓住问题关键词对应的信息点。",
    examples: [
      {
        word: "校园场景对话",
        meaning: "学生与教授讨论论文",
        breakdown: { root: "长对话" },
        explanation: "常见话题：课程安排、作业提交、学术讨论。注意：deadline、requirement、suggestion等词，往往涉及题目答案。"
      },
      {
        word: "职场场景对话",
        meaning: "面试或工作讨论",
        breakdown: { root: "长对话" },
        explanation: "常见话题：职位要求、薪资待遇、工作职责。注意：experience、skill、salary等关键词，对应细节题答案。"
      },
      {
        word: "生活场景对话",
        meaning: "旅行或购物计划",
        breakdown: { root: "长对话" },
        explanation: "常见话题：行程安排、预订确认、费用预算。注意：date、location、price等具体信息，需要即时记录。"
      }
    ],
    quiz: {
      question: "长对话听力中，对话开头通常包含什么关键信息？",
      options: ["具体的数字和时间", "场景设定和话题引入", "问题的最终答案", "说话人的个人隐私"],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    root: "听力理解 - 听力篇章",
    origin: "听力部分",
    meaning: "听取3篇短文，每篇3-4题，共10题",
    description: "听力篇章是四级听力最难部分，文章长度约200-250词，题材包括故事叙述、科普介绍、社会现象等。文章结构完整，信息密度高。考察学生对文章主旨、段落逻辑、细节信息的综合理解。答题技巧：预读选项建立信息框架，听时抓住文章首尾句（主旨句），注意转折词后的重要信息。",
    examples: [
      {
        word: "故事叙述类",
        meaning: "人物经历或事件发展",
        breakdown: { root: "听力篇章" },
        explanation: "关注：人物身份、事件时间线、因果关系。故事开头往往介绍背景，结尾给出启示或结论。"
      },
      {
        word: "科普介绍类",
        meaning: "科学知识或技术发展",
        breakdown: { root: "听力篇章" },
        explanation: "关注：研究对象、发现过程、应用价值。科普文章结构清晰，注意定义、原因、结果的对应关系。"
      },
      {
        word: "社会现象类",
        meaning: "社会问题或文化话题",
        breakdown: { root: "听力篇章" },
        explanation: "关注：现象描述、原因分析、解决建议。社会类文章常有观点表达，注意speaker的态度和立场。"
      }
    ],
    quiz: {
      question: "听力篇章答题时，最重要的策略是什么？",
      options: ["只听数字和专有名词", "预读选项建立信息框架，抓住首尾句", "不需要理解文章结构", "只关注说话人的语气"],
      correctAnswer: 1
    }
  },
  {
    id: 4,
    root: "阅读理解 - 词汇理解",
    origin: "阅读部分",
    meaning: "选词填空，15选10，共10题",
    description: "词汇理解是四级阅读第一部分，一篇200-250词文章，挖空10处，提供15个备选词汇。考察学生对词汇意义、词性搭配、语境理解的综合能力。答题技巧：首先分析备选词汇的词性（名词/动词/形容词/副词），然后根据空格位置的语法要求筛选候选词，最后根据语境语义确定最终答案。",
    examples: [
      {
        word: "词性判断",
        meaning: "空格前有冠词a/an/the",
        breakdown: { root: "词汇理解" },
        explanation: "空格前有冠词，后面需要名词。如：The ___ of the book... 答案应为名词形式。"
      },
      {
        word: "动词判断",
        meaning: "空格前后有主语和宾语",
        breakdown: { root: "词汇理解" },
        explanation: "句子缺谓语动词，注意时态和语态。如：Scientists ___ that... 需填动词（过去式/现在时）。"
      },
      {
        word: "形容词判断",
        meaning: "空格后有名词",
        breakdown: { root: "词汇理解" },
        explanation: "形容词修饰名词。如：a ___ impact on... 需填形容词描述impact的性质。"
      }
    ],
    quiz: {
      question: "词汇理解题型中，空格前有不定冠词'a'时，最可能需要填入什么词性？",
      options: ["动词", "形容词", "名词", "副词"],
      correctAnswer: 2
    }
  },
  {
    id: 5,
    root: "阅读理解 - 长篇阅读",
    origin: "阅读部分",
    meaning: "信息匹配，10个句子匹配段落",
    description: "长篇阅读是四级新增题型，一篇1000词左右的长文章，分为10-15个段落，需要将10个句子匹配到对应段落。考察学生快速定位信息和理解段落主旨的能力。答题技巧：先读句子找关键词（人名、地名、数字、专有名词），然后在文章中快速扫描定位，注意段落首尾句和转折句。",
    examples: [
      {
        word: "关键词定位",
        meaning: "人名、地名、数字",
        breakdown: { root: "长篇阅读" },
        explanation: "专有名词最容易定位。如句子含'Harvard University'，直接在文章找这个词，答案段落必包含它。"
      },
      {
        word: "同义替换",
        meaning: "关键词的同义表达",
        breakdown: { root: "长篇阅读" },
        explanation: "有时句子关键词与段落表述不同。如句子说'increase'，段落可能用'rise/grow/climb'等同义词。"
      },
      {
        word: "段落主旨",
        meaning: "首尾句总结",
        breakdown: { root: "长篇阅读" },
        explanation: "无法直接定位时，读段落首尾句判断主题。句子描述的内容与段落主旨相符即为匹配。"
      }
    ],
    quiz: {
      question: "长篇阅读中，句子包含数字'2024'时，最佳策略是什么？",
      options: ["逐段阅读全文", "在文章中快速扫描'2024'", "猜测答案不定位", "只看文章开头"],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    root: "阅读理解 - 仔细阅读",
    origin: "阅读部分",
    meaning: "传统阅读理解，2篇文章共10题",
    description: "仔细阅读是四级阅读核心题型，2篇300-350词文章，每篇5题。文章题材多样，包括社会文化、经济科技、教育心理等。题型包括主旨题、细节题、推理题、态度题。答题技巧：先读题目了解考察重点，然后带着问题阅读文章，注意文章结构和逻辑关系，细节题要回文定位。",
    examples: [
      {
        word: "主旨题",
        meaning: "文章/段落主旨",
        breakdown: { root: "仔细阅读" },
        explanation: "问题：What is the main idea of the passage? 技巧：读首段和尾段，找文章的核心观点。答案往往是首段主题句的改写。"
      },
      {
        word: "细节题",
        meaning: "具体信息定位",
        breakdown: { root: "仔细阅读" },
        explanation: "问题：According to the passage, what... 技巧：根据题干关键词回文定位，答案在定位句附近，注意同义替换。"
      },
      {
        word: "推理题",
        meaning: "推断隐含信息",
        breakdown: { root: "仔细阅读" },
        explanation: "问题：What can be inferred from... 技巧：答案不在文中直接出现，需要根据文中信息合理推断，不可过度推断。"
      },
      {
        word: "态度题",
        meaning: "作者观点态度",
        breakdown: { root: "仔细阅读" },
        explanation: "问题：What is the author's attitude toward... 技巧：找表达态度的形容词、副词，注意褒贬义词（positive/negative/neutral）。"
      }
    ],
    quiz: {
      question: "仔细阅读的主旨题，答案最可能出现在文章的什么位置？",
      options: ["文章中间段落", "首段和尾段", "任意段落", "文章标题"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    root: "写作 - 短文写作",
    origin: "写作部分",
    meaning: "30分钟写120-180词短文",
    description: "四级写作是考试第一部分，时间30分钟，要求写120-180词的短文。题型包括：议论文（观点论述）、应用文（书信/通知）、图表文（数据描述）。评分标准：内容切题、结构清晰、语言准确、表达多样。写作技巧：提前准备模板框架，开头引入话题，中间分段论述，结尾总结升华。",
    examples: [
      {
        word: "议论文模板",
        meaning: "观点论述类",
        breakdown: { root: "写作" },
        explanation: "开头：引出话题+表达观点。中间：2-3个论据支撑（分点论述）。结尾：总结观点+建议/展望。常用模板：Nowadays, ... has become a hot topic. In my opinion, ..."
      },
      {
        word: "应用文模板",
        meaning: "书信/通知类",
        breakdown: { root: "写作" },
        explanation: "书信格式：Dear XX, 开头说明写信目的，中间详细阐述，结尾表达期待，Yours sincerely, XX。通知格式：标题+正文（时间地点事件要求）。"
      },
      {
        word: "图表文模板",
        meaning: "数据描述类",
        breakdown: { root: "写作" },
        explanation: "开头：描述图表主题。中间：分析数据变化趋势（increase/decrease/stable），对比关键数据。结尾：总结原因或预测趋势。"
      }
    ],
    quiz: {
      question: "四级写作评分最重要的标准是什么？",
      options: ["字数越多越好", "使用复杂词汇", "内容切题、结构清晰、语言准确", "模仿范文不创新"],
      correctAnswer: 2
    }
  },
  {
    id: 8,
    root: "翻译 - 汉译英",
    origin: "翻译部分",
    meaning: "段落翻译，5-7分钟完成",
    description: "四级翻译是考试最后一部分，要求将一段100-150字的中文段落翻译成英文。题材多为中国文化、历史、社会发展等。评分标准：译文准确、语法正确、表达流畅。翻译技巧：理解原文结构和逻辑，使用简单句避免语法错误，注意核心词汇的积累（文化类词汇常考）。",
    examples: [
      {
        word: "文化词汇",
        meaning: "中国传统节日",
        breakdown: { root: "翻译" },
        explanation: "常见考点：春节(Spring Festival)、中秋节(Mid-Autumn Festival)、端午节(Dragon Boat Festival)、元宵节(Lantern Festival)。"
      },
      {
        word: "历史词汇",
        meaning: "历史人物和事件",
        breakdown: { root: "翻译" },
        explanation: "常见考点：丝绸之路(Silk Road)、四大发明(Four Great Inventions)、儒家思想(Confucianism)、传统中医(traditional Chinese medicine)。"
      },
      {
        word: "句式转换",
        meaning: "中文句式→英文句式",
        breakdown: { root: "翻译" },
        explanation: "技巧：中文多用无主句，英文需补主语。中文定语前置，英文可后置。中文流水句，英文需断句。如：'中国历史悠久'→'China has a long history.'"
      }
    ],
    quiz: {
      question: "翻译时遇到'春节'，最准确的英文表达是什么？",
      options: ["New Year", "Chinese New Year", "Spring Festival", "Lunar New Year"],
      correctAnswer: 2
    }
  },
  {
    id: 9,
    root: "听力技巧 - 预读选项",
    origin: "答题策略",
    meaning: "利用播放前时间预读选项",
    description: "预读选项是听力答题的核心策略。在音频播放前，快速阅读题目选项，预测可能的内容和关键词。预读时要关注：选项的共性（找共同关键词）、选项的差异（找不同点对应可能的考点）、选项的类型（数字题/地点题/态度题）。有效预读能让听音过程更有目的性。",
    examples: [
      {
        word: "找共性关键词",
        meaning: "选项共同提及的内容",
        breakdown: { root: "预读技巧" },
        explanation: "如选项A/B/C都出现'university'，说明话题与大学相关，听时重点关注校园类信息。"
      },
      {
        word: "分析选项差异",
        meaning: "找矛盾的选项",
        breakdown: { root: "预读技巧" },
        explanation: "如选项A说'支持'，B说'反对'，C说'中立'，说明考察态度，听时注意speaker的情感词。"
      },
      {
        word: "判断题型",
        meaning: "选项特征判断题型",
        breakdown: { root: "预读技巧" },
        explanation: "选项全是数字→数字题，听时记数字。选项全是地点→地点题，听时注意where问句。选项是完整句子→细节/主旨题。"
      }
    ],
    quiz: {
      question: "预读选项时发现所有选项都包含数字，说明什么？",
      options: ["考察文章主旨", "考察数字信息", "考察说话人态度", "考察因果关系"],
      correctAnswer: 1
    }
  },
  {
    id: 10,
    root: "听力技巧 - 关键词抓取",
    origin: "答题策略",
    meaning: "听音时抓住问题对应的关键词",
    description: "关键词抓取是听力答题的核心能力。听音过程中，要根据预读的选项，有意识地抓取与题目相关的关键词。常见关键词类型：转折词（but/however/actually后常是答案）、因果词（because/so/lead to）、强调词（in fact/most importantly）、数字和时间词。",
    examples: [
      {
        word: "转折词",
        meaning: "but/however/actually",
        breakdown: { root: "关键词" },
        explanation: "转折词后的信息往往是答案。如：'I thought it was easy, but actually it's quite difficult.' 答案是difficult。"
      },
      {
        word: "因果词",
        meaning: "because/so/due to",
        breakdown: { root: "关键词" },
        explanation: "因果题答案紧跟因果词。如：'The flight was delayed due to bad weather.' 答案是bad weather。"
      },
      {
        word: "强调词",
        meaning: "in fact/most importantly",
        breakdown: { root: "关键词" },
        explanation: "强调词引出重要信息。如：'The most important thing is to practice every day.' 答案是practice every day。"
      }
    ],
    quiz: {
      question: "听力中听到'but actually'后，最可能是什么？",
      options: ["无关的背景信息", "答案的关键信息", "说话人的个人经历", "需要忽略的干扰项"],
      correctAnswer: 1
    }
  },
  {
    id: 11,
    root: "阅读技巧 - 回文定位",
    origin: "答题策略",
    meaning: "根据题干关键词定位原文",
    description: "回文定位是阅读细节题的核心技巧。题干中的关键词（人名、地名、数字、专有名词、核心动词）是定位的线索。定位步骤：找题干关键词→扫描文章找匹配词→定位到具体句子→在定位句附近找答案。注意：答案往往不是原句，而是定位句的同义改写。",
    examples: [
      {
        word: "专有名词定位",
        meaning: "人名/地名/机构名",
        breakdown: { root: "回文定位" },
        explanation: "题干含'Harvard'→文章找'Harvard'→答案在该句附近。专有名词最易定位，是首选线索。"
      },
      {
        word: "数字定位",
        meaning: "年份/百分比/数量",
        breakdown: { root: "回文定位" },
        explanation: "题干含'50%'→文章找'50%'或'half'→答案在该句附近。数字可能被同义替换。"
      },
      {
        word: "核心动词定位",
        meaning: "题干的主要动作",
        breakdown: { root: "回文定位" },
        explanation: "题干说'promote'→文章找'promote/encourage/boost'等同义词→答案在附近。动词常被同义替换。"
      }
    ],
    quiz: {
      question: "回文定位时，题干关键词在文章中被同义替换了，应该怎么办？",
      options: ["放弃定位，随意选择", "找关键词的同义词进行定位", "只找完全相同的词", "只看文章开头"],
      correctAnswer: 1
    }
  },
  {
    id: 12,
    root: "阅读技巧 - 同义替换",
    origin: "答题策略",
    meaning: "识别选项与原文的同义表达",
    description: "同义替换是四级阅读的核心难点。正确答案往往不是原文的照搬，而是对原文信息的改写和同义转换。常见替换方式：词汇替换（单词→同义词）、句式替换（主动→被动、肯定→否定）、概括替换（具体→抽象）。识别同义替换是突破阅读的关键能力。",
    examples: [
      {
        word: "词汇替换",
        meaning: "单词→同义词",
        breakdown: { root: "同义替换" },
        explanation: "原文：'increase' → 选项：'rise/grow/climb/expand'。原文：'difficult' → 选项：'challenging/hard/tough'。"
      },
      {
        word: "句式替换",
        meaning: "主动→被动",
        breakdown: { root: "同义替换" },
        explanation: "原文：'Scientists discovered...' → 选项：'...was discovered by scientists'。注意主被动转换。"
      },
      {
        word: "概括替换",
        meaning: "具体→抽象",
        breakdown: { root: "同义替换" },
        explanation: "原文：'apples, oranges, bananas' → 选项：'fruits'。原文列举具体例子，选项概括类别。"
      }
    ],
    quiz: {
      question: "原文说'The price increased significantly'，选项最可能怎么改写？",
      options: ["The price remained stable", "The price dropped sharply", "The price rose dramatically", "The price was unchanged"],
      correctAnswer: 2
    }
  },
  {
    id: 13,
    root: "写作技巧 - 模板准备",
    origin: "答题策略",
    meaning: "提前准备常用写作模板",
    description: "模板准备是写作提分的有效方法。提前准备不同类型文章的框架模板：议论文模板（观点引入+论据支撑+总结升华）、应用文模板（书信格式+通知格式）、图表文模板（图表描述+趋势分析+原因总结）。模板能让写作更有条理，节省构思时间，避免结构混乱。",
    examples: [
      {
        word: "议论文开头模板",
        meaning: "引入话题+表达观点",
        breakdown: { root: "写作模板" },
        explanation: "模板：'Nowadays, ... has become a widely discussed topic. Some people believe that..., while others argue that... In my opinion, I support the former/latter view.'"
      },
      {
        word: "议论文中间模板",
        meaning: "分点论述",
        breakdown: { root: "写作模板" },
        explanation: "模板：'There are several reasons for my view. First/Firstly, ... Second/Secondly, ... Third/Thirdly/Finally, ...' 使用过渡词让论述更有层次。"
      },
      {
        word: "议论文结尾模板",
        meaning: "总结+展望",
        breakdown: { root: "写作模板" },
        explanation: "模板：'In conclusion/To sum up, I believe that... Therefore, we should/it is important to... Only in this way can we...' 升华主题。"
      }
    ],
    quiz: {
      question: "议论文中间段落，最常用的过渡词是什么？",
      options: ["And/But/Or", "First/Second/Finally", "Yes/No/Maybe", "Here/There/Where"],
      correctAnswer: 1
    }
  },
  {
    id: 14,
    root: "写作技巧 - 语言多样化",
    origin: "答题策略",
    meaning: "避免重复，使用多样的表达",
    description: "语言多样化是写作高分的关键。避免同一个词反复出现，使用同义词替换；避免简单句过多，使用并列句和复合句；避免表达平淡，使用恰当的修饰词。多样化让文章更有表现力，展现语言能力。同时要注意：多样化不是堆砌复杂词，而是恰当地使用。",
    examples: [
      {
        word: "词汇多样化",
        meaning: "同义词替换",
        breakdown: { root: "语言多样化" },
        explanation: "避免：'I think... I think... I think...' 改用：'I believe/In my view/From my perspective/I consider that...' 交替使用。"
      },
      {
        word: "句式多样化",
        meaning: "简单句→复合句",
        breakdown: { root: "语言多样化" },
        explanation: "避免全是简单句：'It is important. We should do it.' 改用：'It is important that we take action to...' 使用从句丰富句式。"
      },
      {
        word: "修饰词使用",
        meaning: "增强表达力度",
        breakdown: { root: "语言多样化" },
        explanation: "避免：'good/bad/important' 改用：'beneficial/harmful/crucial/vital/significant' 更精准的修饰词提升表达。"
      }
    ],
    quiz: {
      question: "写作中避免重复使用'I think'，可以替换成什么？",
      options: ["I think again", "I believe/In my view", "I think very much", "I think so"],
      correctAnswer: 1
    }
  },
  {
    id: 15,
    root: "翻译技巧 - 核心词汇",
    origin: "答题策略",
    meaning: "积累常考的文化/历史词汇",
    description: "核心词汇积累是翻译的基础。四级翻译题材集中在中国文化、历史、社会发展，需要掌握相关领域的专业词汇。高频考点词汇：传统节日类（春节、中秋）、历史名词类（丝绸之路、四大发明）、文化概念类（儒家、中医）、社会现象类（改革开放、经济发展）。",
    examples: [
      {
        word: "节日类词汇",
        meaning: "中国传统节日",
        breakdown: { root: "翻译词汇" },
        explanation: "春节：Spring Festival；中秋：Mid-Autumn Festival；端午：Dragon Boat Festival；元宵：Lantern Festival；清明：Qingming Festival/Tomb-Sweeping Day。"
      },
      {
        word: "历史类词汇",
        meaning: "历史名词翻译",
        breakdown: { root: "翻译词汇" },
        explanation: "丝绸之路：Silk Road；四大发明：Four Great Inventions；长城：Great Wall；故宫：Palace Museum/Forbidden City；兵马俑：Terracotta Warriors。"
      },
      {
        word: "文化类词汇",
        meaning: "文化概念翻译",
        breakdown: { root: "翻译词汇" },
        explanation: "儒家思想：Confucianism；道家思想：Taoism；传统中医：traditional Chinese medicine；京剧：Peking Opera；书法：calligraphy。"
      }
    ],
    quiz: {
      question: "'儒家思想'的正确英文翻译是什么？",
      options: ["Ru Jia", "Chinese Philosophy", "Confucianism", "Confucius Thought"],
      correctAnswer: 2
    }
  },
  {
    id: 16,
    root: "翻译技巧 - 句式转换",
    origin: "答题策略",
    meaning: "处理中英文句式差异",
    description: "中英文句式差异是翻译的难点。中文特点：无主句多、定语前置、流水句式、被动少。英文特点：主语必明、定语可后置、句子需分界、被动常见。翻译时要进行句式转换：补主语、调定语、断句子、换语态。转换能力决定翻译质量。",
    examples: [
      {
        word: "补主语",
        meaning: "中文无主句→英文补主语",
        breakdown: { root: "句式转换" },
        explanation: "中文：'学好英语很重要'（无主）→英文：'It is important to learn English well.'（补'It'作主语）。"
      },
      {
        word: "定语调整",
        meaning: "中文定语前置→英文可后置",
        breakdown: { root: "句式转换" },
        explanation: "中文：'历史悠久的城市'（前置）→英文：'a city with a long history'（后置）或'a city that has a long history'（从句）。"
      },
      {
        word: "断句处理",
        meaning: "中文流水句→英文分句",
        breakdown: { root: "句式转换" },
        explanation: "中文：'他去了北京，参观了故宫，拍了很多照片'（流水）→英文：'He went to Beijing, visited the Palace Museum, and took many photos.'（分句）。"
      }
    ],
    quiz: {
      question: "中文'学好英语很重要'翻译成英文时，主语应该是什么？",
      options: ["学好英语", "英语", "It", "我们"],
      correctAnswer: 2
    }
  },
  {
    id: 17,
    root: "听力核心词汇 - 新闻类",
    origin: "词汇积累",
    meaning: "新闻听力常见词汇",
    description: "新闻听力词汇特点是正式、客观、信息密集。高频词汇包括：事件类（accident/crash/disaster/earthquake）、经济类（economy/inflation/market/trade）、政治类（government/policy/election/leader）、科技类（technology/research/innovation/discovery）。掌握这些词汇能快速理解新闻内容。",
    examples: [
      {
        word: "事件类词汇",
        meaning: "突发事件报道",
        breakdown: { root: "新闻词汇" },
        explanation: "accident：事故；crash：碰撞/坠毁；disaster：灾难；earthquake：地震；flood：洪水；fire：火灾；injury：伤害；victim：受害者。"
      },
      {
        word: "经济类词汇",
        meaning: "经济新闻术语",
        breakdown: { root: "新闻词汇" },
        explanation: "economy：经济；inflation：通货膨胀；market：市场；trade：贸易；export：出口；import：进口；growth：增长；decline：下降。"
      },
      {
        word: "科技类词汇",
        meaning: "科技发展报道",
        breakdown: { root: "新闻词汇" },
        explanation: "technology：技术；research：研究；innovation：创新；discovery：发现；experiment：实验；breakthrough：突破；development：发展。"
      }
    ],
    quiz: {
      question: "新闻中听到'inflation'，最可能是什么话题？",
      options: ["自然灾害", "经济形势", "科技发展", "体育比赛"],
      correctAnswer: 1
    }
  },
  {
    id: 18,
    root: "听力核心词汇 - 校园类",
    origin: "词汇积累",
    meaning: "校园生活常见词汇",
    description: "校园类词汇是长对话和听力篇章的高频考点。核心词汇包括：学业类（course/exam/assignment/grade）、设施类（library/cafeteria/dormitory/classroom）、活动类（club/competition/volunteer/sports）、关系类（professor/student/advisor/counselor）。熟悉这些词汇能更好地理解校园场景。",
    examples: [
      {
        word: "学业类词汇",
        meaning: "课程和学习",
        breakdown: { root: "校园词汇" },
        explanation: "course：课程；exam：考试；assignment：作业；grade：成绩；deadline：截止日期；lecture：讲座；seminar：研讨会；thesis：论文。"
      },
      {
        word: "设施类词汇",
        meaning: "校园场所",
        breakdown: { root: "校园词汇" },
        explanation: "library：图书馆；cafeteria：餐厅；dormitory：宿舍；classroom：教室；laboratory：实验室；gym：体育馆；campus：校园。"
      },
      {
        word: "关系类词汇",
        meaning: "人物关系",
        breakdown: { root: "校园词汇" },
        explanation: "professor：教授；student：学生；advisor：导师；counselor：顾问；roommate：室友；classmate：同学；tutor：家教。"
      }
    ],
    quiz: {
      question: "校园对话中提到'deadline'，最可能是什么意思？",
      options: ["考试时间", "作业提交截止日期", "上课时间", "放假日期"],
      correctAnswer: 1
    }
  },
  {
    id: 19,
    root: "阅读核心词汇 - 同义词组",
    origin: "词汇积累",
    meaning: "阅读常考同义替换词",
    description: "同义词替换是阅读理解的难点，需要掌握常见的同义词组。高频替换：increase组（rise/grow/climb/expand/boost）、decrease组（drop/fall decline/reduce/diminish）、important组（crucial/vital/significant/essential）、difficult组（hard/tough/challenging/complex）。积累同义词组能快速识别选项改写。",
    examples: [
      {
        word: "increase替换词",
        meaning: "增长类同义词",
        breakdown: { root: "同义词组" },
        explanation: "increase = rise/grow/climb/expand/boost/enhance/raise/augment。注意：rise多指价格/数量，grow多指规模/发展，boost多指推动/促进。"
      },
      {
        word: "important替换词",
        meaning: "重要类同义词",
        breakdown: { root: "同义词组" },
        explanation: "important = crucial/vital/significant/essential/key/central/indispensable。注意：crucial强调关键性，vital强调必要性。"
      },
      {
        word: "difficult替换词",
        meaning: "困难类同义词",
        breakdown: { root: "同义词组" },
        explanation: "difficult = hard/tough/challenging/complex/complicated/demanding。注意：challenging带有积极意味，complex强调复杂性。"
      }
    ],
    quiz: {
      question: "原文用'crucial'，选项最可能用什么词替换？",
      options: ["unimportant", "important", "difficult", "easy"],
      correctAnswer: 1
    }
  },
  {
    id: 20,
    root: "时间管理 - 听力部分",
    origin: "考试策略",
    meaning: "合理分配听力答题时间",
    description: "听力部分共25分钟，需要合理分配时间。时间分配建议：预读时间（利用音频播放前）约30秒/题，答题时间边听边选不需要额外时间，检查时间（每部分结束后）约10秒。关键原则：听音时专注听不要犹豫选，不确定的先标记，结束后快速检查。",
    examples: [
      {
        word: "预读时间分配",
        meaning: "音频播放前的黄金时间",
        breakdown: { root: "时间管理" },
        explanation: "短篇新闻：每篇约30秒预读；长对话：每篇约45秒预读；听力篇章：每篇约50秒预读。预读时间有限，优先读选项找关键词。"
      },
      {
        word: "答题原则",
        meaning: "听音时的策略",
        breakdown: { root: "时间管理" },
        explanation: "听到答案立即选，不要犹豫；不确定的题目先标记第一印象答案；不要因为一道题纠结影响后续题目；错过就错过，不要回头看。"
      },
      {
        word: "检查时间",
        meaning: "每部分结束后的检查",
        breakdown: { root: "时间管理" },
        explanation: "短篇新闻结束后有约10秒检查时间；长对话结束后有约10秒；听力篇章结束后有约15秒。快速检查标记题目，不要改确定答案。"
      }
    ],
    quiz: {
      question: "听力答题时错过一道题，最佳策略是什么？",
      options: ["立即回头看题目", "纠结犹豫影响后续", "放弃该题专注后续", "暂停音频重听"],
      correctAnswer: 2
    }
  },
  {
    id: 21,
    root: "时间管理 - 阅读部分",
    origin: "考试策略",
    meaning: "合理分配阅读答题时间",
    description: "阅读部分共40分钟，需要精打细算。时间分配建议：词汇理解约10分钟（1分钟/题），长篇阅读约15分钟（1.5分钟/题），仔细阅读约15分钟（3分钟/篇+0.5分钟/题）。关键原则：不要在某一道题上耗时过长，词汇理解快速完成，长篇阅读先易后难。",
    examples: [
      {
        word: "词汇理解时间",
        meaning: "选词填空约10分钟",
        breakdown: { root: "时间管理" },
        explanation: "步骤：词性分类约2分钟→填空约6分钟→检查约2分钟。技巧：先填容易的，难的留到最后，利用排除法。"
      },
      {
        word: "长篇阅读时间",
        meaning: "信息匹配约15分钟",
        breakdown: { root: "时间管理" },
        explanation: "步骤：读句子找关键词约5分钟→定位匹配约8分钟→检查约2分钟。技巧：先匹配关键词明显的，难的留到最后。"
      },
      {
        word: "仔细阅读时间",
        meaning: "传统阅读约15分钟",
        breakdown: { root: "时间管理" },
        explanation: "步骤：读题目约2分钟→读文章约5分钟→答题约6分钟→检查约2分钟。技巧：先读题再读文，带着问题读更高效。"
      }
    ],
    quiz: {
      question: "阅读部分时间紧张时，应该优先完成什么？",
      options: ["最难的题目", "分值最高的仔细阅读", "不确定的题目", "任意顺序"],
      correctAnswer: 1
    }
  },
  {
    id: 22,
    root: "备考规划 - 基础阶段",
    origin: "备考策略",
    meaning: "考前2-3月的基础夯实",
    description: "基础阶段是四级备考的起点，目标：词汇量达到4000+，语法基础扎实，听力入门训练。核心任务：背单词（每天50-80词，总量4000）、学语法（重点时态语态、从句结构）、练听力（VOA慢速英语、四级真题听力）。时间投入：每天1.5-2小时，持续2-3个月。",
    examples: [
      {
        word: "词汇任务",
        meaning: "每天背50-80词",
        breakdown: { root: "基础阶段" },
        explanation: "使用APP或词汇书，每天50-80词，复习前一天词汇。重点：高频词汇（前3000）、核心搭配、常见同义词。方法：词根词缀记忆法。"
      },
      {
        word: "语法任务",
        meaning: "掌握核心语法点",
        breakdown: { root: "基础阶段" },
        explanation: "重点语法：时态（过去/现在/将来）、语态（主动/被动）、从句（定语/状语/名词性）、非谓语（不定式/动名词）。方法：语法书+练习题。"
      },
      {
        word: "听力入门",
        meaning: "适应英语语音",
        breakdown: { root: "基础阶段" },
        explanation: "材料：VOA慢速英语、BBC Learning English、四级真题听力（旧题）。方法：精听（反复听懂每句）+泛听（适应语速）。"
      }
    ],
    quiz: {
      question: "基础阶段背单词，每天建议背多少词？",
      options: ["10-20词", "50-80词", "200词以上", "不需要背单词"],
      correctAnswer: 1
    }
  },
  {
    id: 23,
    root: "备考规划 - 强化阶段",
    origin: "备考策略",
    meaning: "考前1-2月的专项训练",
    description: "强化阶段是四级备考的核心，目标：各题型技巧掌握，真题熟练度高。核心任务：听力专项（短篇新闻、长对话、篇章技巧）、阅读专项（词汇理解、长篇阅读、仔细阅读技巧）、写作专项（模板准备、限时练习）、翻译专项（核心词汇、句式转换）。时间投入：每天2-3小时，持续1-2个月。",
    examples: [
      {
        word: "听力专项",
        meaning: "掌握各题型技巧",
        breakdown: { root: "强化阶段" },
        explanation: "短篇新闻：预读技巧、关键词抓取；长对话：场景预测、态度判断；篇章：主旨抓取、细节定位。每天练习1套真题听力。"
      },
      {
        word: "阅读专项",
        meaning: "突破各题型难点",
        breakdown: { root: "强化阶段" },
        explanation: "词汇理解：词性判断、搭配识别；长篇阅读：关键词定位、同义替换；仔细阅读：回文定位、推理判断。每天练习1套真题阅读。"
      },
      {
        word: "写作专项",
        meaning: "准备模板限时练",
        breakdown: { root: "强化阶段" },
        explanation: "准备：议论文/应用文/图表文模板；练习：每周2-3篇限时写作（30分钟）；修改：对照范文找出问题，逐步改进。"
      }
    ],
    quiz: {
      question: "强化阶段听力专项，每天建议练习什么？",
      options: ["随意听英文歌曲", "1套真题听力", "只听新闻不练题", "听中文材料"],
      correctAnswer: 1
    }
  },
  {
    id: 24,
    root: "备考规划 - 冲刺阶段",
    origin: "备考策略",
    meaning: "考前2周的模拟实战",
    description: "冲刺阶段是四级备考的收官，目标：适应考试节奏，查漏补缺。核心任务：全真模拟（每周2-3套完整真题）、错题回顾（整理错题本，分析错误原因）、重点突破（弱项题型强化训练）、心态调整（保持自信，避免焦虑）。时间投入：每天2小时，持续2周。",
    examples: [
      {
        word: "全真模拟",
        meaning: "完整流程模拟",
        breakdown: { root: "冲刺阶段" },
        explanation: "每周2-3套真题，严格按照考试时间（听力25分钟+阅读40分钟+写作30分钟+翻译5分钟）。模拟真实考场环境，适应考试节奏。"
      },
      {
        word: "错题回顾",
        meaning: "分析错误原因",
        breakdown: { root: "冲刺阶段" },
        explanation: "整理强化阶段的错题，按题型分类。分析：知识盲点（词汇/语法）、技巧缺失（定位/替换）、心态问题（紧张/犹豫）。针对性改进。"
      },
      {
        word: "心态调整",
        meaning: "保持自信放松",
        breakdown: { root: "冲刺阶段" },
        explanation: "考前焦虑正常，但不要过度紧张。技巧：每天适度运动放松、保持规律作息、相信自己已充分准备、考试当天保持平常心态。"
      }
    ],
    quiz: {
      question: "冲刺阶段每周应该完成多少套全真模拟？",
      options: ["不需要模拟", "1套", "2-3套", "每天1套"],
      correctAnswer: 2
    }
  },
  {
    id: 25,
    root: "真题使用 - 精练方法",
    origin: "真题策略",
    meaning: "真题不是做完就扔",
    description: "真题精练是四级备考的核心方法。原则：每套真题至少做3遍。第一遍：模拟考试，限时完成，记录分数；第二遍：逐题分析，理解考点，总结技巧；第三遍：间隔一周后重做，检验掌握程度。精练一套胜过粗做十套。",
    examples: [
      {
        word: "第一遍做真题",
        meaning: "模拟考试限时完成",
        breakdown: { root: "真题精练" },
        explanation: "严格限时，不查字典不看答案。记录：总分数、各部分分数、用时。模拟真实考场，暴露真实水平。"
      },
      {
        word: "第二遍分析真题",
        meaning: "逐题理解考点",
        breakdown: { root: "真题精练" },
        explanation: "对答案后，逐题分析：为什么对？为什么错？考点是什么？技巧是什么？整理错题，总结规律，记录到错题本。"
      },
      {
        word: "第三遍重做真题",
        meaning: "检验掌握程度",
        breakdown: { root: "真题精练" },
        explanation: "间隔一周后，限时重做同一套真题。对比分数：进步说明掌握，没进步说明没理解。重点关注反复错的题目。"
      }
    ],
    quiz: {
      question: "真题精练方法中，每套真题至少应该做几遍？",
      options: ["1遍做完就行", "2遍", "3遍以上", "越多越好不需要分析"],
      correctAnswer: 2
    }
  },
  {
    id: 26,
    root: "真题使用 - 错题分析",
    origin: "真题策略",
    meaning: "错题是提分的金矿",
    description: "错题分析比做题更重要。每道错题背后都有原因：知识盲点（词汇/语法不熟）、技巧缺失（定位/替换不会）、心态问题（紧张/犹豫）。分析步骤：记录错题→分类原因→针对性改进→定期回顾。错题本是最好的复习资料。",
    examples: [
      {
        word: "知识盲点类",
        meaning: "词汇/语法不熟",
        breakdown: { root: "错题分析" },
        explanation: "如：选项词不认识→背该词及同义词；语法结构不理解→学该语法点；搭配不熟悉→积累该搭配。知识盲点要补，否则反复错。"
      },
      {
        word: "技巧缺失类",
        meaning: "答题方法不会",
        breakdown: { root: "错题分析" },
        explanation: "如：定位不准→练回文定位技巧；同义替换不识别→积累替换词组；时间不够→练时间管理。技巧问题要针对性训练。"
      },
      {
        word: "心态问题类",
        meaning: "紧张犹豫失误",
        breakdown: { root: "错题分析" },
        explanation: "如：紧张漏听→练模拟适应紧张；犹豫改错答案→建立选后不改原则；时间焦虑导致失误→练时间分配。心态问题要模拟调整。"
      }
    ],
    quiz: {
      question: "错题分析中，发现选项词不认识导致错误，应该怎么办？",
      options: ["跳过该题", "背该词及同义词", "猜答案", "不需要处理"],
      correctAnswer: 1
    }
  },
  {
    id: 27,
    root: "考试心态 - 检查原则",
    origin: "考场技巧",
    meaning: "检查要讲策略",
    description: "考试检查是重要环节，但要讲策略。原则：只检查不确定的题目，确定的题目不要改。原因：第一印象往往是对的，犹豫改答案反而容易改错。检查重点：明显错误（涂错卡、漏题）、不确定题目（标记的题目）、时间分配（是否有题未做）。",
    examples: [
      {
        word: "只查不确定题",
        meaning: "不要改确定答案",
        breakdown: { root: "检查原则" },
        explanation: "确定的题目不要检查不要改。统计显示：犹豫后改答案，70%是改错的。第一印象基于直觉，往往更准确。"
      },
      {
        word: "检查涂卡",
        meaning: "确保答案正确填写",
        breakdown: { root: "检查原则" },
        explanation: "重点检查：是否漏题（答案卡有空）、是否涂错（题号对应）、是否涂清（机器可识别）。涂卡错误是最可惜的失误。"
      },
      {
        word: "检查时间",
        meaning: "确保所有题做完",
        breakdown: { root: "检查原则" },
        explanation: "考试结束前2分钟，快速检查是否有漏题。有时间再做不确定题目，没时间就按第一印象选择。不留空白题。"
      }
    ],
    quiz: {
      question: "考试检查时，确定的答案应该怎么办？",
      options: ["反复检查确认", "改答案更保险", "不要检查不要改", "问问旁边的同学"],
      correctAnswer: 2
    }
  },
  {
    id: 28,
    root: "考试心态 - 应对紧张",
    origin: "考场技巧",
    meaning: "紧张是正常的，关键是调节",
    description: "考试紧张是正常现象，适度紧张有助于专注，过度紧张影响发挥。调节方法：考前准备充分（信心来源于准备）、考场深呼吸（紧张时深呼吸3次）、专注当下题目（不要想整体分数）、接受失误正常（一道题错了不要影响后续）。心态稳，成绩稳。",
    examples: [
      {
        word: "考前准备充分",
        meaning: "信心来源于准备",
        breakdown: { root: "心态调节" },
        explanation: "充分准备是最好的心态调节。准备充分→自信→紧张减少。考前复习错题本，提醒自己已掌握技巧，建立信心。"
      },
      {
        word: "考场深呼吸",
        meaning: "紧张时的即时调节",
        breakdown: { root: "心态调节" },
        explanation: "感到紧张时：闭眼深呼吸3次→默念'我准备好了'→专注第一道题。深呼吸放松身体，默念建立信心，专注进入状态。"
      },
      {
        word: "专注当下题目",
        meaning: "不要想整体分数",
        breakdown: { root: "心态调节" },
        explanation: "做题时只关注当前题目，不要想：'这道错了会不会不及格'、'最后分数是多少'。想整体分数会增加焦虑，影响专注。"
      }
    ],
    quiz: {
      question: "考场感到紧张时，最佳调节方法是什么？",
      options: ["放弃考试", "深呼吸3次并默念'我准备好了'", "紧张是坏事无法调节", "想整体分数"],
      correctAnswer: 1
    }
  },
  {
    id: 29,
    root: "听力速记 - 数字记录",
    origin: "速记技巧",
    meaning: "听到数字立即记下",
    description: "数字是听力高频考点，必须即时记录。记录原则：听到数字立即写，不依赖记忆。记录方法：阿拉伯数字直接写，时间用点号分隔，价格用符号标记。常见考点：年份、日期、时间、价格、数量、百分比。数字题答案就是听到的数字。",
    examples: [
      {
        word: "时间记录",
        meaning: "年份/日期/时刻",
        breakdown: { root: "数字速记" },
        explanation: "年份：2024直接写'2024'；日期：March 15写'3.15'；时刻：9:30 AM写'9:30a'。用简写节省时间。"
      },
      {
        word: "价格记录",
        meaning: "金额信息",
        breakdown: { root: "数字速记" },
        explanation: "价格：$50写'$50'或'50d'；折扣：20% off写'-20%'；总价：total $120写'tot120'。用符号标记类型。"
      },
      {
        word: "数量记录",
        meaning: "人数/物品数",
        breakdown: { root: "数字速记" },
        explanation: "人数：50 people写'50p'；距离：100 miles写'100m'；年龄：25 years old写'25yo'。字母标记类型。"
      }
    ],
    quiz: {
      question: "听力中听到'March 15, 2024'，速记应该怎么写？",
      options: ["March fifteen", "3.15.2024", "不用记", "随便写"],
      correctAnswer: 1
    }
  },
  {
    id: 30,
    root: "听力速记 - 关键词记录",
    origin: "速记技巧",
    meaning: "关键词用简写或符号",
    description: "关键词速记能帮助回忆听力内容。记录原则：只记关键词，不记完整句子。记录方法：专有名词首字母、常用词简写、逻辑关系用符号。常见简写：increase→↑、decrease→↓、because→∵、result→→。速记要自己能看懂，考试前建立简写系统。",
    examples: [
      {
        word: "专有名词简写",
        meaning: "首字母或关键词",
        breakdown: { root: "关键词速记" },
        explanation: "人名：John Smith→'JS'或'John'；地名：Harvard University→'HU'或'Hvd'；机构：World Bank→'WB'。用首字母或关键词。"
      },
      {
        word: "常用词简写",
        meaning: "缩写节省时间",
        breakdown: { root: "关键词速记" },
        explanation: "increase→'inc'或'↑'；decrease→'dec'或'↓'；important→'imp'；problem→'pro'；solution→'sol'。建立自己的简写系统。"
      },
      {
        word: "逻辑符号",
        meaning: "关系用符号表示",
        breakdown: { root: "关键词速记" },
        explanation: "因果关系：because→'∵'、result→'→'；对比关系：but→'≠'、however→'↔'；强调关系：important→'!'。符号比文字更快。"
      }
    ],
    quiz: {
      question: "听力速记中，'increase'最可能用什么简写？",
      options: ["完整写increase", "inc或↑", "不记录", "写中文'增加'"],
      correctAnswer: 1
    }
  }
];