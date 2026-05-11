// App State
let allWords = [
  {
    "word": "Abstraction",
    "translation": "抽象化",
    "difficulty": "進階"
  },
  {
    "word": "Accuracy",
    "translation": "準確率",
    "difficulty": "中階"
  },
  {
    "word": "Acquisition",
    "translation": "收購",
    "difficulty": "中階"
  },
  {
    "word": "Advantage",
    "translation": "優勢",
    "difficulty": "進階"
  },
  {
    "word": "Advertising",
    "translation": "廣告",
    "difficulty": "中階"
  },
  {
    "word": "Agreement",
    "translation": "協議",
    "difficulty": "進階"
  },
  {
    "word": "Algorithm",
    "translation": "演算法",
    "difficulty": "中階"
  },
  {
    "word": "Alliance",
    "translation": "聯盟",
    "difficulty": "中階"
  },
  {
    "word": "Amortization",
    "translation": "攤銷",
    "difficulty": "進階"
  },
  {
    "word": "Arbitrage",
    "translation": "套利",
    "difficulty": "進階"
  },
  {
    "word": "Array",
    "translation": "陣列",
    "difficulty": "初階"
  },
  {
    "word": "Asset",
    "translation": "資產",
    "difficulty": "初階"
  },
  {
    "word": "Attribute",
    "translation": "屬性",
    "difficulty": "中階"
  },
  {
    "word": "Audit",
    "translation": "審計",
    "difficulty": "初階"
  },
  {
    "word": "Authentication",
    "translation": "驗證",
    "difficulty": "中階"
  },
  {
    "word": "Authorization",
    "translation": "授權",
    "difficulty": "中階"
  },
  {
    "word": "Balance Sheet",
    "translation": "資產負債表",
    "difficulty": "進階"
  },
  {
    "word": "Bankruptcy",
    "translation": "破產",
    "difficulty": "進階"
  },
  {
    "word": "Benchmark",
    "translation": "基準",
    "difficulty": "中階"
  },
  {
    "word": "Bond",
    "translation": "債券",
    "difficulty": "初階"
  },
  {
    "word": "Brand",
    "translation": "品牌",
    "difficulty": "初階"
  },
  {
    "word": "Branding",
    "translation": "品牌建立",
    "difficulty": "中階"
  },
  {
    "word": "Budget",
    "translation": "預算",
    "difficulty": "初階"
  },
  {
    "word": "Business plan",
    "translation": "商業計畫書",
    "difficulty": "進階"
  },
  {
    "word": "Campaign",
    "translation": "行銷活動",
    "difficulty": "中階"
  },
  {
    "word": "Capital",
    "translation": "資本",
    "difficulty": "初階"
  },
  {
    "word": "Change",
    "translation": "更換",
    "difficulty": "初階"
  },
  {
    "word": "Check",
    "translation": "檢查",
    "difficulty": "初階"
  },
  {
    "word": "Class",
    "translation": "類別",
    "difficulty": "初階"
  },
  {
    "word": "Classification",
    "translation": "分類",
    "difficulty": "進階"
  },
  {
    "word": "Cloud",
    "translation": "雲端",
    "difficulty": "初階"
  },
  {
    "word": "Collateral",
    "translation": "擔保品",
    "difficulty": "中階"
  },
  {
    "word": "Commodity",
    "translation": "商品",
    "difficulty": "中階"
  },
  {
    "word": "Communication",
    "translation": "溝通",
    "difficulty": "中階"
  },
  {
    "word": "Compensation",
    "translation": "薪酬",
    "difficulty": "進階"
  },
  {
    "word": "Competition",
    "translation": "競爭",
    "difficulty": "初階"
  },
  {
    "word": "Competitor",
    "translation": "競爭者",
    "difficulty": "中階"
  },
  {
    "word": "Compiler",
    "translation": "編譯器",
    "difficulty": "中階"
  },
  {
    "word": "Complexity",
    "translation": "複雜度",
    "difficulty": "進階"
  },
  {
    "word": "Computer",
    "translation": "電腦",
    "difficulty": "初階"
  },
  {
    "word": "Constant",
    "translation": "常數",
    "difficulty": "中階"
  },
  {
    "word": "Consumer",
    "translation": "消費者",
    "difficulty": "初階"
  },
  {
    "word": "Contract",
    "translation": "合約",
    "difficulty": "初階"
  },
  {
    "word": "Credit",
    "translation": "信用",
    "difficulty": "初階"
  },
  {
    "word": "Currency",
    "translation": "貨幣",
    "difficulty": "中階"
  },
  {
    "word": "Customer",
    "translation": "顧客",
    "difficulty": "初階"
  },
  {
    "word": "Customer loyalty",
    "translation": "顧客忠誠度",
    "difficulty": "進階"
  },
  {
    "word": "Customer satisfaction",
    "translation": "顧客滿意度",
    "difficulty": "進階"
  },
  {
    "word": "Data",
    "translation": "資料",
    "difficulty": "初階"
  },
  {
    "word": "Database",
    "translation": "資料庫",
    "difficulty": "初階"
  },
  {
    "word": "Debt",
    "translation": "債務",
    "difficulty": "中階"
  },
  {
    "word": "Decision",
    "translation": "決策",
    "difficulty": "初階"
  },
  {
    "word": "Deficit",
    "translation": "赤字",
    "difficulty": "中階"
  },
  {
    "word": "Deflation",
    "translation": "通貨緊縮",
    "difficulty": "進階"
  },
  {
    "word": "Demand",
    "translation": "需求",
    "difficulty": "初階"
  },
  {
    "word": "Deployment",
    "translation": "部屬",
    "difficulty": "中階"
  },
  {
    "word": "Deposit",
    "translation": "存款",
    "difficulty": "初階"
  },
  {
    "word": "Depreciation",
    "translation": "折舊",
    "difficulty": "進階"
  },
  {
    "word": "Derivative",
    "translation": "衍生性金融商品",
    "difficulty": "中階"
  },
  {
    "word": "Discussion",
    "translation": "討論",
    "difficulty": "進階"
  },
  {
    "word": "Distribution",
    "translation": "配送／分銷",
    "difficulty": "進階"
  },
  {
    "word": "Diversification",
    "translation": "分散投資",
    "difficulty": "進階"
  },
  {
    "word": "Dividend",
    "translation": "股息",
    "difficulty": "中階"
  },
  {
    "word": "Document",
    "translation": "文件",
    "difficulty": "初階"
  },
  {
    "word": "Documentation",
    "translation": "文件",
    "difficulty": "進階"
  },
  {
    "word": "Economy",
    "translation": "經濟",
    "difficulty": "初階"
  },
  {
    "word": "Efficiency",
    "translation": "效率",
    "difficulty": "中階"
  },
  {
    "word": "Employee",
    "translation": "員工",
    "difficulty": "初階"
  },
  {
    "word": "Encapsulation",
    "translation": "封裝",
    "difficulty": "進階"
  },
  {
    "word": "Encryption",
    "translation": "加密",
    "difficulty": "中階"
  },
  {
    "word": "Entrepreneur",
    "translation": "創業家",
    "difficulty": "中階"
  },
  {
    "word": "Equity",
    "translation": "股權",
    "difficulty": "中階"
  },
  {
    "word": "Error",
    "translation": "錯誤",
    "difficulty": "初階"
  },
  {
    "word": "Evaluation",
    "translation": "評估",
    "difficulty": "進階"
  },
  {
    "word": "Expansion",
    "translation": "擴張",
    "difficulty": "進階"
  },
  {
    "word": "Feedback",
    "translation": "回饋",
    "difficulty": "初階"
  },
  {
    "word": "Field",
    "translation": "欄位",
    "difficulty": "初階"
  },
  {
    "word": "Finance",
    "translation": "財務",
    "difficulty": "初階"
  },
  {
    "word": "Firewall",
    "translation": "防火牆",
    "difficulty": "中階"
  },
  {
    "word": "Fiscal Year",
    "translation": "會計年度",
    "difficulty": "進階"
  },
  {
    "word": "Framework",
    "translation": "框架",
    "difficulty": "中階"
  },
  {
    "word": "Function",
    "translation": "函式 / 功能",
    "difficulty": "初階"
  },
  {
    "word": "Funding",
    "translation": "資金",
    "difficulty": "中階"
  },
  {
    "word": "Globalization",
    "translation": "全球化",
    "difficulty": "中階"
  },
  {
    "word": "Governance",
    "translation": "治理",
    "difficulty": "進階"
  },
  {
    "word": "Graph",
    "translation": "圖形",
    "difficulty": "初階"
  },
  {
    "word": "Growth",
    "translation": "成長",
    "difficulty": "初階"
  },
  {
    "word": "Income Statement",
    "translation": "損益表",
    "difficulty": "進階"
  },
  {
    "word": "Index",
    "translation": "索引",
    "difficulty": "初階"
  },
  {
    "word": "Inflation",
    "translation": "通貨膨脹",
    "difficulty": "進階"
  },
  {
    "word": "Inheritance",
    "translation": "繼承",
    "difficulty": "進階"
  },
  {
    "word": "Innovation",
    "translation": "創新",
    "difficulty": "初階"
  },
  {
    "word": "Interface",
    "translation": "介面",
    "difficulty": "中階"
  },
  {
    "word": "Inventory",
    "translation": "庫存",
    "difficulty": "中階"
  },
  {
    "word": "Investment",
    "translation": "投資",
    "difficulty": "初階"
  },
  {
    "word": "Investor",
    "translation": "投資人",
    "difficulty": "中階"
  },
  {
    "word": "Keyboard",
    "translation": "鍵盤",
    "difficulty": "初階"
  },
  {
    "word": "Kubernetes",
    "translation": "K8s，容器編排系統",
    "difficulty": "進階"
  },
  {
    "word": "Leverage",
    "translation": "槓桿",
    "difficulty": "進階"
  },
  {
    "word": "Liability",
    "translation": "負債",
    "difficulty": "初階"
  },
  {
    "word": "Liquidation",
    "translation": "清算",
    "difficulty": "進階"
  },
  {
    "word": "Liquidity",
    "translation": "流動性",
    "difficulty": "中階"
  },
  {
    "word": "Loan",
    "translation": "貸款",
    "difficulty": "初階"
  },
  {
    "word": "Logistics",
    "translation": "物流",
    "difficulty": "中階"
  },
  {
    "word": "Loss",
    "translation": "虧損",
    "difficulty": "初階"
  },
  {
    "word": "Machine Learning",
    "translation": "機器學習",
    "difficulty": "中階"
  },
  {
    "word": "Macroeconomics",
    "translation": "總體經濟學",
    "difficulty": "進階"
  },
  {
    "word": "Manager",
    "translation": "經理",
    "difficulty": "初階"
  },
  {
    "word": "Market",
    "translation": "市場",
    "difficulty": "初階"
  },
  {
    "word": "Market share",
    "translation": "市占率",
    "difficulty": "進階"
  },
  {
    "word": "Marketing",
    "translation": "行銷",
    "difficulty": "中階"
  },
  {
    "word": "Meeting",
    "translation": "會議",
    "difficulty": "初階"
  },
  {
    "word": "Merger",
    "translation": "合併",
    "difficulty": "中階"
  },
  {
    "word": "Message",
    "translation": "訊息",
    "difficulty": "初階"
  },
  {
    "word": "Method",
    "translation": "方法",
    "difficulty": "初階"
  },
  {
    "word": "Microeconomics",
    "translation": "個體經濟學",
    "difficulty": "進階"
  },
  {
    "word": "Model",
    "translation": "模型",
    "difficulty": "初階"
  },
  {
    "word": "Monopoly",
    "translation": "壟斷",
    "difficulty": "中階"
  },
  {
    "word": "Mortgage",
    "translation": "抵押貸款",
    "difficulty": "中階"
  },
  {
    "word": "Negotiation",
    "translation": "談判",
    "difficulty": "中階"
  },
  {
    "word": "Normalization",
    "translation": "正規化",
    "difficulty": "進階"
  },
  {
    "word": "Notice",
    "translation": "通知",
    "difficulty": "初階"
  },
  {
    "word": "Object",
    "translation": "物件",
    "difficulty": "初階"
  },
  {
    "word": "Office",
    "translation": "辦公室",
    "difficulty": "初階"
  },
  {
    "word": "Oligopoly",
    "translation": "寡占",
    "difficulty": "中階"
  },
  {
    "word": "Opportunity",
    "translation": "商機",
    "difficulty": "中階"
  },
  {
    "word": "Optimization",
    "translation": "最佳化",
    "difficulty": "進階"
  },
  {
    "word": "Packet",
    "translation": "封包",
    "difficulty": "中階"
  },
  {
    "word": "Partnership",
    "translation": "合作夥伴關係",
    "difficulty": "中階"
  },
  {
    "word": "Payable",
    "translation": "應付帳款",
    "difficulty": "進階"
  },
  {
    "word": "Penetration Testing",
    "translation": "滲透測試",
    "difficulty": "進階"
  },
  {
    "word": "Performance",
    "translation": "效能",
    "difficulty": "中階"
  },
  {
    "word": "Planning",
    "translation": "規劃",
    "difficulty": "初階"
  },
  {
    "word": "Policy",
    "translation": "政策",
    "difficulty": "初階"
  },
  {
    "word": "Polymorphism",
    "translation": "多型",
    "difficulty": "進階"
  },
  {
    "word": "Portfolio",
    "translation": "投資組合",
    "difficulty": "中階"
  },
  {
    "word": "Positioning",
    "translation": "市場定位",
    "difficulty": "中階"
  },
  {
    "word": "Presentation",
    "translation": "簡報",
    "difficulty": "中階"
  },
  {
    "word": "Price",
    "translation": "價格",
    "difficulty": "初階"
  },
  {
    "word": "Procurement",
    "translation": "採購",
    "difficulty": "中階"
  },
  {
    "word": "Product",
    "translation": "產品",
    "difficulty": "初階"
  },
  {
    "word": "Productivity",
    "translation": "生產力",
    "difficulty": "中階"
  },
  {
    "word": "Profit",
    "translation": "利潤",
    "difficulty": "初階"
  },
  {
    "word": "Promotion",
    "translation": "促銷",
    "difficulty": "中階"
  },
  {
    "word": "Proposal",
    "translation": "提案",
    "difficulty": "初階"
  },
  {
    "word": "Protocol",
    "translation": "協定",
    "difficulty": "中階"
  },
  {
    "word": "Quality",
    "translation": "品質",
    "difficulty": "初階"
  },
  {
    "word": "Query",
    "translation": "查詢",
    "difficulty": "初階"
  },
  {
    "word": "Queue",
    "translation": "佇列",
    "difficulty": "初階"
  },
  {
    "word": "Receivable",
    "translation": "應收帳款",
    "difficulty": "進階"
  },
  {
    "word": "Recession",
    "translation": "經濟衰退",
    "difficulty": "中階"
  },
  {
    "word": "Record",
    "translation": "紀錄",
    "difficulty": "初階"
  },
  {
    "word": "Recruitment",
    "translation": "招募",
    "difficulty": "進階"
  },
  {
    "word": "Recursion",
    "translation": "遞迴",
    "difficulty": "中階"
  },
  {
    "word": "Regression",
    "translation": "回歸",
    "difficulty": "中階"
  },
  {
    "word": "Regulation",
    "translation": "法規",
    "difficulty": "中階"
  },
  {
    "word": "Remittance",
    "translation": "匯款",
    "difficulty": "進階"
  },
  {
    "word": "Report",
    "translation": "報告",
    "difficulty": "初階"
  },
  {
    "word": "Repository",
    "translation": "儲存庫",
    "difficulty": "中階"
  },
  {
    "word": "Requirement",
    "translation": "需求",
    "difficulty": "中階"
  },
  {
    "word": "Risk",
    "translation": "風險",
    "difficulty": "初階"
  },
  {
    "word": "Router",
    "translation": "路由器",
    "difficulty": "中階"
  },
  {
    "word": "Runtime",
    "translation": "執行時間",
    "difficulty": "中階"
  },
  {
    "word": "Scalability",
    "translation": "可擴充性",
    "difficulty": "進階"
  },
  {
    "word": "Screen",
    "translation": "螢幕",
    "difficulty": "初階"
  },
  {
    "word": "Segmentation",
    "translation": "市場區隔",
    "difficulty": "中階"
  },
  {
    "word": "Select",
    "translation": "選擇",
    "difficulty": "初階"
  },
  {
    "word": "Service",
    "translation": "服務",
    "difficulty": "初階"
  },
  {
    "word": "Shareholder",
    "translation": "股東",
    "difficulty": "進階"
  },
  {
    "word": "Software",
    "translation": "軟體",
    "difficulty": "初階"
  },
  {
    "word": "Solvency",
    "translation": "償債能力",
    "difficulty": "中階"
  },
  {
    "word": "Specification",
    "translation": "規格",
    "difficulty": "進階"
  },
  {
    "word": "Stack",
    "translation": "堆疊",
    "difficulty": "初階"
  },
  {
    "word": "Stakeholder",
    "translation": "利益相關者",
    "difficulty": "進階"
  },
  {
    "word": "Start",
    "translation": "啟動",
    "difficulty": "初階"
  },
  {
    "word": "Startup",
    "translation": "新創公司",
    "difficulty": "中階"
  },
  {
    "word": "Status",
    "translation": "狀況",
    "difficulty": "初階"
  },
  {
    "word": "Stock",
    "translation": "股票",
    "difficulty": "初階"
  },
  {
    "word": "Strategy",
    "translation": "策略",
    "difficulty": "初階"
  },
  {
    "word": "Supply",
    "translation": "供給",
    "difficulty": "初階"
  },
  {
    "word": "Supply chain",
    "translation": "供應鏈",
    "difficulty": "進階"
  },
  {
    "word": "Support",
    "translation": "支援",
    "difficulty": "初階"
  },
  {
    "word": "Sustainability",
    "translation": "永續經營",
    "difficulty": "中階"
  },
  {
    "word": "Switch",
    "translation": "交換器",
    "difficulty": "中階"
  },
  {
    "word": "Syntax",
    "translation": "語法",
    "difficulty": "初階"
  },
  {
    "word": "Table",
    "translation": "資料表",
    "difficulty": "初階"
  },
  {
    "word": "Target",
    "translation": "目標",
    "difficulty": "初階"
  },
  {
    "word": "Tax",
    "translation": "稅",
    "difficulty": "初階"
  },
  {
    "word": "Testing",
    "translation": "測試",
    "difficulty": "初階"
  },
  {
    "word": "Trade",
    "translation": "貿易",
    "difficulty": "初階"
  },
  {
    "word": "Training",
    "translation": "訓練",
    "difficulty": "初階"
  },
  {
    "word": "Treasury",
    "translation": "國庫",
    "difficulty": "中階"
  },
  {
    "word": "Tree",
    "translation": "樹",
    "difficulty": "初階"
  },
  {
    "word": "Valuation",
    "translation": "估值",
    "difficulty": "進階"
  },
  {
    "word": "Variable",
    "translation": "變數",
    "difficulty": "初階"
  },
  {
    "word": "Version Control",
    "translation": "版本控制",
    "difficulty": "進階"
  },
  {
    "word": "Virtualization",
    "translation": "虛擬化",
    "difficulty": "進階"
  },
  {
    "word": "Volatility",
    "translation": "波動率",
    "difficulty": "中階"
  },
  {
    "word": "Vulnerability",
    "translation": "漏洞",
    "difficulty": "進階"
  }
];

let filteredWords = [];
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let history = [];

// DOM Elements
const screens = document.querySelectorAll('.screen');
const navBtns = {
    home: document.getElementById('btn-home'),
    vocab: document.getElementById('btn-vocab-list'),
    history: document.getElementById('btn-history')
};

// Initialization
function init() {
    loadHistory();
    setupEventListeners();
    showScreen('screen-home');
    registerServiceWorker();
}

// Navigation & Screen Management
function showScreen(screenId) {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    if (screenId === 'screen-vocab') renderVocabList();
    if (screenId === 'screen-history') renderHistory();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function setupEventListeners() {
    navBtns.home.onclick = () => showScreen('screen-home');
    navBtns.vocab.onclick = () => showScreen('screen-vocab');
    navBtns.history.onclick = () => showScreen('screen-history');

    document.getElementById('btn-start-quiz').onclick = startQuiz;
    document.getElementById('btn-restart').onclick = startQuiz;
    document.getElementById('btn-back-home').onclick = () => showScreen('screen-home');
    
    document.getElementById('btn-next-question').onclick = nextQuestion;
    document.getElementById('btn-submit-input').onclick = handleInputSubmit;
    document.getElementById('quiz-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleInputSubmit();
    });

    document.getElementById('btn-clear-history').onclick = clearHistory;

    // Search and Filter
    document.getElementById('vocab-search').oninput = (e) => {
        renderVocabList(e.target.value);
    };

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderVocabList(document.getElementById('vocab-search').value, btn.dataset.filter);
        };
    });
}

// Quiz Logic
function startQuiz() {
    const difficulty = document.getElementById('difficulty-select').value;
    const count = parseInt(document.getElementById('count-select').value);
    const mode = document.getElementById('mode-select').value;

    let pool = allWords;
    if (difficulty !== '全部') {
        pool = allWords.filter(w => w.difficulty === difficulty);
    }

    if (pool.length === 0) {
        alert('該難度下沒有單字！');
        return;
    }

    // Shuffle and pick
    currentQuiz = pool.sort(() => 0.5 - Math.random()).slice(0, Math.min(count, pool.length));
    currentQuestionIndex = 0;
    score = 0;

    showScreen('screen-quiz');
    showQuestion();
}

function showQuestion() {
    const q = currentQuiz[currentQuestionIndex];
    const mode = document.getElementById('mode-select').value;
    
    // UI Update
    document.getElementById('question-number').innerText = `第 ${currentQuestionIndex + 1} / ${currentQuiz.length} 題`;
    document.getElementById('current-difficulty').innerText = `難度：${q.difficulty}`;
    document.getElementById('quiz-progress').style.width = `${(currentQuestionIndex / currentQuiz.length) * 100}%`;
    document.getElementById('question-text').innerText = q.translation;
    
    // Determine if this specific question is choice or input
    let isChoice = mode === 'choice' || (mode === 'mixed' && Math.random() > 0.5);
    
    document.getElementById('choice-container').classList.add('hidden');
    document.getElementById('input-container').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('quiz-input').value = '';

    if (isChoice) {
        setupChoiceQuestion(q);
    } else {
        setupInputQuestion(q);
    }
}

function setupChoiceQuestion(q) {
    document.getElementById('question-type-label').innerText = '選擇題 - 請選出正確單字';
    document.getElementById('choice-container').classList.remove('hidden');
    
    // Generate options
    const options = [q.word];
    const pool = allWords.filter(w => w.word !== q.word);
    const distractors = pool.sort(() => 0.5 - Math.random()).slice(0, 3).map(w => w.word);
    options.push(...distractors);
    options.sort(() => 0.5 - Math.random());

    const container = document.getElementById('choice-container');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => handleChoiceSelection(opt, btn, q.word);
        container.appendChild(btn);
    });
}

function setupInputQuestion(q) {
    document.getElementById('question-type-label').innerText = '填空題 - 請輸入對應單字';
    document.getElementById('input-container').classList.remove('hidden');
    setTimeout(() => document.getElementById('quiz-input').focus(), 100);
}

function handleChoiceSelection(selected, btn, correct) {
    // Disable all buttons
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    
    if (selected === correct) {
        btn.classList.add('correct');
        score++;
        showFeedback(true, `正確！ ${correct}`);
    } else {
        btn.classList.add('wrong');
        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.innerText === correct) b.classList.add('correct');
        });
        showFeedback(false, `錯誤。 正確答案是：${correct}`);
    }
}

function handleInputSubmit() {
    const input = document.getElementById('quiz-input').value.trim();
    if (!input) return;
    
    const correct = currentQuiz[currentQuestionIndex].word;
    const isCorrect = input.toLowerCase() === correct.toLowerCase();
    
    if (isCorrect) {
        score++;
        showFeedback(true, `正確！ ${correct}`);
    } else {
        showFeedback(false, `錯誤。 正確答案是：${correct}`);
    }
}

function showFeedback(isCorrect, msg) {
    const feedback = document.getElementById('feedback');
    const msgEl = document.getElementById('feedback-msg');
    
    feedback.classList.remove('hidden');
    msgEl.innerText = msg;
    msgEl.style.color = isCorrect ? 'var(--success)' : 'var(--error)';
    
    document.getElementById('input-container').classList.add('hidden'); // Hide input after submit
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const total = currentQuiz.length;
    const finalScore = Math.round((score / total) * 100);
    
    document.getElementById('final-score').innerText = finalScore;
    document.getElementById('correct-count').innerText = score;
    document.getElementById('total-count').innerText = total;
    
    let msg = '繼續努力！';
    if (finalScore >= 90) msg = '太完美了！你是單字達人！';
    else if (finalScore >= 70) msg = '做得很好！穩定發揮。';
    else if (finalScore >= 50) msg = '不錯喔，再加把勁！';
    document.getElementById('result-message').innerText = msg;

    // Save History
    const attempt = {
        date: new Date().toLocaleString(),
        score: finalScore,
        correct: score,
        total: total,
        difficulty: document.getElementById('difficulty-select').value,
        mode: document.getElementById('mode-select').value
    };
    history.unshift(attempt);
    saveHistory();

    showScreen('screen-result');
}

// Data Management
function saveHistory() {
    localStorage.setItem('vocab_quiz_history', JSON.stringify(history));
}

function loadHistory() {
    const saved = localStorage.getItem('vocab_quiz_history');
    if (saved) history = JSON.parse(saved);
}

function clearHistory() {
    if (confirm('確定要清除所有歷史紀錄嗎？')) {
        history = [];
        saveHistory();
        renderHistory();
    }
}

function renderHistory() {
    const container = document.getElementById('history-container');
    container.innerHTML = '';
    
    if (history.length === 0) {
        container.innerHTML = '<p class="text-muted" style="text-align:center; padding: 2rem;">尚無測驗紀錄。</p>';
        return;
    }

    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item glass';
        div.innerHTML = `
            <div class="history-info">
                <span class="date">${item.date}</span>
                <span class="summary">${item.difficulty} • ${item.total} 題 (${item.mode})</span>
            </div>
            <div class="history-score">${item.score}</div>
        `;
        container.appendChild(div);
    });
}

function renderVocabList(search = '', filter = '全部') {
    const container = document.getElementById('vocab-container');
    container.innerHTML = '';
    
    const list = allWords.filter(w => {
        const matchesSearch = w.word.toLowerCase().includes(search.toLowerCase()) || 
                             w.translation.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === '全部' || w.difficulty === filter;
        return matchesSearch && matchesFilter;
    });

    list.forEach(w => {
        const div = document.createElement('div');
        div.className = 'vocab-item';
        div.innerHTML = `
            <div class="vocab-word">${w.word}</div>
            <div class="vocab-trans">${w.translation}</div>
            <span class="vocab-difficulty">${w.difficulty}</span>
        `;
        container.appendChild(div);
    });
    
    if (list.length === 0) {
        container.innerHTML = '<p class="text-muted" style="grid-column: 1/-1; text-align:center; padding: 2rem;">找不到相符的單字。</p>';
    }
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('Service Worker registered!', reg))
                .catch(err => console.log('Service Worker registration failed: ', err));
        });
    }
}

// Start the app
init();
