
/* ============================================
   AGRINHO 2026 - SCRIPT PRINCIPAL
   Concurso Agrinho 2026 - Categoria Front-End
   ============================================ */

// Quiz Data
const quizData = [
    {
        question: "Qual é o benefício principal da rotação de culturas?",
        options: [
            "Aumenta o preço do produto",
            "Restaura nutrientes do solo e reduz pragas",
            "Diminui a necessidade de água",
            "Acelera o crescimento das plantas"
        ],
        correct: 1,
        explanation: "A rotação de culturas restaura nutrientes do solo, reduz a propagação de pragas e doenças, e melhora a saúde geral do solo."
    },
    {
        question: "Qual prática ajuda a conservar água na agricultura?",
        options: [
            "Aumentar a irrigação",
            "Plantio em dias quentes",
            "Irrigação por gotejamento",
            "Remover toda a vegetação"
        ],
        correct: 2,
        explanation: "A irrigação por gotejamento entrega água diretamente às raízes das plantas, reduzindo o desperdício e aumentando a eficiência."
    },
    {
        question: "O que é agricultura de precisão?",
        options: [
            "Plantar em linhas retas",
            "Usar tecnologia para otimizar recursos e aumentar produtividade",
            "Trabalhar apenas à noite",
            "Evitar o uso de máquinas"
        ],
        correct: 1,
        explanation: "Agricultura de precisão usa dados, sensores e tecnologia para otimizar o uso de recursos como água, fertilizantes e pesticidas."
    },
    {
        question: "Qual é o impacto do reflorestamento na sustentabilidade?",
        options: [
            "Não tem impacto significativo",
            "Reduz biodiversidade",
            "Captura carbono e protege ecossistemas",
            "Aumenta a erosão do solo"
        ],
        correct: 2,
        explanation: "O reflorestamento captura dióxido de carbono, protege habitats naturais, previne erosão e contribui para a mitigação das mudanças climáticas."
    },
    {
        question: "Como o plantio direto beneficia o solo?",
        options: [
            "Reduz a matéria orgânica",
            "Aumenta a compactação",
            "Preserva a estrutura do solo e aumenta a matéria orgânica",
            "Elimina todos os microrganismos"
        ],
        correct: 2,
        explanation: "O plantio direto preserva a estrutura do solo, aumenta a matéria orgânica, melhora a retenção de água e reduz a erosão."
    }
];

// Tab Data
const tabData = {
    equilibrio: {
        title: "Equilíbrio Perfeito",
        description: "O verdadeiro sucesso agrícola vem do equilíbrio entre produção e preservação. Quando o agricultor trabalha em harmonia com a natureza, os resultados são extraordinários.",
        list: ["✓ Maior produtividade", "✓ Solos mais férteis", "✓ Ecossistemas resilientes"],
        emoji: "❤️",
        imageText: "Natureza e Produção em Harmonia"
    },
    producao: {
        title: "Produção Inteligente",
        description: "Tecnologia e tradição se unem para criar sistemas agrícolas mais eficientes e produtivos, sem prejudicar o meio ambiente.",
        list: ["✓ Plantio direto", "✓ Rotação de culturas", "✓ Agricultura de precisão"],
        emoji: "📊",
        imageText: "Crescimento Sustentável"
    },
    ambiente: {
        title: "Proteção Ambiental",
        description: "Preservar a natureza não é apenas responsabilidade, é investimento no futuro. Práticas ambientais geram retorno econômico e social.",
        list: ["✓ Conservação de biodiversidade", "✓ Proteção de mananciais", "✓ Reflorestamento"],
        emoji: "🌍",
        imageText: "Planeta Protegido"
    }
};

// Quiz State
let currentQuestion = 0;
let score = 0;
let answered = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initQuiz();
});

// ============ TAB FUNCTIONALITY ============
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tab = this.dataset.tab;
            switchTab(tab, tabButtons);
        });
    });
}

function switchTab(tab, buttons) {
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    
    // Update content
    const data = tabData[tab];
    document.getElementById('tab-title').textContent = data.title;
    document.getElementById('tab-description').textContent = data.description;
    document.getElementById('tab-image-text').textContent = data.imageText;
    
    // Update list
    const tabList = document.getElementById('tab-list');
    tabList.innerHTML = data.list.map(item => `<li>${item}</li>`).join('');
    
    // Update image emoji
    document.querySelector('.image-placeholder').textContent = data.emoji;
}

// ============ QUIZ FUNCTIONALITY ============
function initQuiz() {
    loadQuestion();
    document.getElementById('quiz-button').addEventListener('click', nextQuestion);
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);
}

function loadQuestion() {
    const question = quizData[currentQuestion];
    const progressPercent = ((currentQuestion + 1) / quizData.length) * 100;
    
    // Update progress bar
    document.getElementById('progress-bar').style.width = progressPercent + '%';
    
    // Update question
    document.getElementById('quiz-question').textContent = question.question;
    
    // Update options
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionDiv);
    });
    
    // Hide explanation and button
    document.getElementById('quiz-explanation').classList.add('hidden');
    document.getElementById('quiz-button').classList.add('hidden');
}

function selectAnswer(index) {
    if (answered) return;
    
    answered = true;
    const question = quizData[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    
    // Mark options
    options.forEach((option, i) => {
        option.classList.add('disabled');
        if (i === question.correct) {
            option.classList.add('correct');
        } else if (i === index && i !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    
    // Update score
    if (index === question.correct) {
        score++;
    }
    
    // Show explanation
    document.getElementById('explanation-text').textContent = question.explanation;
    document.getElementById('quiz-explanation').classList.remove('hidden');
    document.getElementById('quiz-button').classList.remove('hidden');
    
    // Update button text
    if (currentQuestion === quizData.length - 1) {
        document.getElementById('quiz-button').textContent = 'Ver Resultado';
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        answered = false;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    
    // Hide quiz content
    document.getElementById('quiz-question').classList.add('hidden');
    document.getElementById('quiz-options').classList.add('hidden');
    document.getElementById('quiz-explanation').classList.add('hidden');
    document.getElementById('quiz-button').classList.add('hidden');
    
    // Show results
    document.getElementById('quiz-results').classList.remove('hidden');
    document.getElementById('final-score').textContent = percentage + '%';
    document.getElementById('quiz-message').textContent = `Você acertou ${score} de ${quizData.length} questões`;
    
    // Feedback message
    let feedbackText = '';
    if (percentage === 100) {
        feedbackText = '🌟 Excelente! Você é um especialista em sustentabilidade agrícola!';
    } else if (percentage >= 80) {
        feedbackText = '✅ Muito bom! Você tem sólido conhecimento sobre práticas sustentáveis.';
    } else if (percentage >= 60) {
        feedbackText = '👍 Bom trabalho! Continue aprendendo sobre sustentabilidade.';
    } else {
        feedbackText = '📚 Continue estudando! Há muito a aprender sobre o agro sustentável.';
    }
    
    document.getElementById('feedback-text').textContent = feedbackText;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    
    // Show quiz content
    document.getElementById('quiz-question').classList.remove('hidden');
    document.getElementById('quiz-options').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    
    // Reset button text
    document.getElementById('quiz-button').textContent = 'Próxima Questão';
    
    loadQuestion();
}

// ============ SMOOTH SCROLL SUPPORT ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============ ACCESSIBILITY ============
// Keyboard navigation for tabs
document.querySelectorAll('.tab-btn').forEach((btn, index) => {
    btn.addEventListener('keydown', (e) => {
        let nextBtn = null;
        if (e.key === 'ArrowRight') {
            nextBtn = document.querySelectorAll('.tab-btn')[index + 1];
        } else if (e.key === 'ArrowLeft') {
            nextBtn = document.querySelectorAll('.tab-btn')[index - 1];
        }
        
        if (nextBtn) {
            e.preventDefault();
            nextBtn.focus();
            nextBtn.click();
        }
    });
});
