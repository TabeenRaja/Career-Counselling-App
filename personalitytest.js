

// personality test script


const questions = [
            {
                text: "How do you naturally recharge after a long day?",
                options: [
                    { text: "Spending time with friends or family", type: "E" },
                    { text: "Having quiet time alone to reflect", type: "I" },
                    { text: "Engaging in creative or artistic activities", type: "N" },
                    { text: "Organizing your space or planning tomorrow", type: "J" }
                ]
            },
            {
                text: "When facing a major life decision, what's your first instinct?",
                options: [
                    { text: "Research all facts and analyze pros/cons logically", type: "T" },
                    { text: "Consider how it will affect people you care about", type: "F" },
                    { text: "Trust your gut feeling and intuition", type: "N" },
                    { text: "Look at what has worked in similar situations before", type: "S" }
                ]
            },
            {
                text: "What type of conversations do you find most engaging?",
                options: [
                    { text: "Deep discussions about ideas, theories, and possibilities", type: "N" },
                    { text: "Practical conversations about real experiences and facts", type: "S" },
                    { text: "Emotional conversations about feelings and relationships", type: "F" },
                    { text: "Analytical discussions about systems and how things work", type: "T" }
                ]
            },
            {
                text: "How do you prefer to approach new challenges?",
                options: [
                    { text: "Jump in and figure it out as you go", type: "P" },
                    { text: "Create a detailed plan before starting", type: "J" },
                    { text: "Collaborate with others to tackle it together", type: "E" },
                    { text: "Research thoroughly and work through it independently", type: "I" }
                ]
            },
            {
                text: "What drives your sense of personal fulfillment?",
                options: [
                    { text: "Helping others grow and achieve their potential", type: "F" },
                    { text: "Mastering complex skills and solving difficult problems", type: "T" },
                    { text: "Creating something new and innovative", type: "N" },
                    { text: "Building reliable systems and achieving concrete results", type: "S" }
                ]
            },
            {
                text: "In group settings, you typically:",
                options: [
                    { text: "Take charge and guide the group's direction", type: "E" },
                    { text: "Listen carefully and contribute thoughtful insights", type: "I" },
                    { text: "Focus on maintaining harmony and including everyone", type: "F" },
                    { text: "Analyze the situation and provide logical solutions", type: "T" }
                ]
            },
            {
                text: "When you're stressed, you tend to:",
                options: [
                    { text: "Seek support and talk through problems with others", type: "E" },
                    { text: "Withdraw and process your thoughts privately", type: "I" },
                    { text: "Focus on immediate, practical solutions", type: "S" },
                    { text: "Imagine different scenarios and future possibilities", type: "N" }
                ]
            },
            {
                text: "What type of work environment energizes you most?",
                options: [
                    { text: "Structured with clear expectations and deadlines", type: "J" },
                    { text: "Flexible with freedom to adapt and improvise", type: "P" },
                    { text: "Collaborative with lots of team interaction", type: "E" },
                    { text: "Independent with minimal interruptions", type: "I" }
                ]
            },
            {
                text: "How do you naturally process information?",
                options: [
                    { text: "Focus on concrete details and step-by-step facts", type: "S" },
                    { text: "See patterns, connections, and big picture concepts", type: "N" },
                    { text: "Consider the human impact and emotional aspects", type: "F" },
                    { text: "Analyze objectively with logic and reasoning", type: "T" }
                ]
            },
            {
                text: "What gives you the greatest sense of accomplishment?",
                options: [
                    { text: "Completing projects on time with excellent quality", type: "J" },
                    { text: "Adapting successfully to unexpected changes", type: "P" },
                    { text: "Making a meaningful difference in people's lives", type: "F" },
                    { text: "Solving complex problems through innovative thinking", type: "T" }
                ]
            },
            {
                text: "How do you prefer to learn new skills?",
                options: [
                    { text: "Through hands-on practice and real examples", type: "S" },
                    { text: "By understanding theories and exploring possibilities", type: "N" },
                    { text: "In group settings with discussion and collaboration", type: "E" },
                    { text: "Through self-study and independent research", type: "I" }
                ]
            },
            {
                text: "What's your natural leadership style?",
                options: [
                    { text: "Inspiring and motivating others toward a vision", type: "N" },
                    { text: "Organizing resources and ensuring efficient execution", type: "S" },
                    { text: "Supporting team members and fostering collaboration", type: "F" },
                    { text: "Analyzing situations and making strategic decisions", type: "T" }
                ]
            }
        ];

        const personalityTypes = {
            "ENFP": {
                name: "The Innovator",
                description: "You're creative, enthusiastic, and people-focused. You thrive in dynamic environments where you can inspire others and bring new ideas to life.",
                careers: [
                    { name: "Marketing Manager", match: 95 },
                    { name: "Counselor", match: 92 },
                    { name: "Journalist", match: 88 },
                    { name: "Entrepreneur", match: 94 },
                    { name: "Creative Director", match: 96 },
                    { name: "Human Resources", match: 89 }
                ]
            },
            "ENFJ": {
                name: "The Mentor",
                description: "You're charismatic, empathetic, and natural leaders. You excel at inspiring and developing others to reach their full potential.",
                careers: [
                    { name: "Teacher", match: 97 },
                    { name: "Life Coach", match: 95 },
                    { name: "Training Manager", match: 93 },
                    { name: "Social Worker", match: 91 },
                    { name: "Public Relations", match: 88 },
                    { name: "Non-profit Director", match: 94 }
                ]
            },
            "ENTP": {
                name: "The Visionary",
                description: "You're innovative, adaptable, and love exploring new possibilities. You thrive on intellectual challenges and creative problem-solving.",
                careers: [
                    { name: "Innovation Consultant", match: 96 },
                    { name: "Product Manager", match: 93 },
                    { name: "Business Analyst", match: 90 },
                    { name: "Architect", match: 87 },
                    { name: "Venture Capitalist", match: 92 },
                    { name: "Research & Development", match: 94 }
                ]
            },
            "ENTJ": {
                name: "The Executive",
                description: "You're natural leaders with strong organizational skills. You excel at strategic planning and driving teams toward ambitious goals.",
                careers: [
                    { name: "CEO/Executive", match: 98 },
                    { name: "Management Consultant", match: 95 },
                    { name: "Investment Banker", match: 92 },
                    { name: "Operations Manager", match: 94 },
                    { name: "Business Development", match: 91 },
                    { name: "Project Manager", match: 89 }
                ]
            },
            "INFP": {
                name: "The Idealist",
                description: "You're deeply values-driven and creative. You seek meaningful work that aligns with your personal beliefs and allows for self-expression.",
                careers: [
                    { name: "Writer/Author", match: 96 },
                    { name: "Therapist", match: 94 },
                    { name: "Graphic Designer", match: 91 },
                    { name: "Social Worker", match: 89 },
                    { name: "Museum Curator", match: 87 },
                    { name: "Non-profit Worker", match: 93 }
                ]
            },
            "INFJ": {
                name: "The Advocate",
                description: "You're insightful, determined, and passionate about helping others. You excel in roles that combine creativity with meaningful impact.",
                careers: [
                    { name: "Psychologist", match: 97 },
                    { name: "Counselor", match: 95 },
                    { name: "Writer", match: 92 },
                    { name: "Human Rights Lawyer", match: 94 },
                    { name: "Healthcare Administrator", match: 88 },
                    { name: "Educational Consultant", match: 90 }
                ]
            },
            "INTP": {
                name: "The Thinker",
                description: "You're logical, independent, and love theoretical concepts. You thrive when analyzing complex systems and developing innovative solutions.",
                careers: [
                    { name: "Research Scientist", match: 97 },
                    { name: "Software Developer", match: 95 },
                    { name: "Data Scientist", match: 93 },
                    { name: "University Professor", match: 91 },
                    { name: "Systems Analyst", match: 94 },
                    { name: "Technical Writer", match: 88 }
                ]
            },
            "INTJ": {
                name: "The Strategist",
                description: "You're analytical, independent, and visionary. You excel at developing long-term strategies and solving complex problems.",
                careers: [
                    { name: "Software Architect", match: 96 },
                    { name: "Investment Analyst", match: 94 },
                    { name: "Management Consultant", match: 92 },
                    { name: "Research Scientist", match: 95 },
                    { name: "Systems Engineer", match: 93 },
                    { name: "Strategic Planner", match: 97 }
                ]
            },
            "ESFP": {
                name: "The Entertainer",
                description: "You're spontaneous, enthusiastic, and people-focused. You thrive in dynamic environments where you can interact with others and bring joy.",
                careers: [
                    { name: "Event Planner", match: 95 },
                    { name: "Sales Representative", match: 93 },
                    { name: "Tour Guide", match: 91 },
                    { name: "Recreation Worker", match: 89 },
                    { name: "Public Relations", match: 92 },
                    { name: "Customer Service Manager", match: 88 }
                ]
            },
            "ESFJ": {
                name: "The Supporter",
                description: "You're caring, organized, and people-oriented. You excel in roles where you can help others and create harmonious environments.",
                careers: [
                    { name: "Teacher", match: 96 },
                    { name: "Healthcare Administrator", match: 94 },
                    { name: "Social Worker", match: 92 },
                    { name: "Event Coordinator", match: 89 },
                    { name: "Customer Success Manager", match: 91 },
                    { name: "Nurse", match: 95 }
                ]
            },
            "ESTP": {
                name: "The Entrepreneur",
                description: "You're energetic, practical, and adaptable. You thrive in fast-paced environments where you can take action and solve immediate problems.",
                careers: [
                    { name: "Sales Manager", match: 96 },
                    { name: "Emergency Responder", match: 94 },
                    { name: "Real Estate Agent", match: 92 },
                    { name: "Marketing Specialist", match: 89 },
                    { name: "Athletic Coach", match: 91 },
                    { name: "Business Owner", match: 93 }
                ]
            },
            "ESTJ": {
                name: "The Administrator",
                description: "You're organized, practical, and natural leaders. You excel at managing people and processes to achieve concrete results.",
                careers: [
                    { name: "Operations Manager", match: 97 },
                    { name: "Financial Manager", match: 95 },
                    { name: "Project Manager", match: 93 },
                    { name: "Government Administrator", match: 91 },
                    { name: "Supply Chain Manager", match: 94 },
                    { name: "Bank Manager", match: 92 }
                ]
            },
            "ISFP": {
                name: "The Artist",
                description: "You're gentle, flexible, and deeply creative. You value personal freedom and seek work that allows for artistic expression and personal values.",
                careers: [
                    { name: "Graphic Designer", match: 96 },
                    { name: "Photographer", match: 94 },
                    { name: "Counselor", match: 91 },
                    { name: "Interior Designer", match: 93 },
                    { name: "Veterinarian", match: 89 },
                    { name: "Art Therapist", match: 95 }
                ]
            },
            "ISFJ": {
                name: "The Protector",
                description: "You're warm, responsible, and detail-oriented. You excel in supportive roles where you can help others and maintain stability.",
                careers: [
                    { name: "Nurse", match: 97 },
                    { name: "Elementary Teacher", match: 95 },
                    { name: "Administrative Assistant", match: 92 },
                    { name: "Social Worker", match: 94 },
                    { name: "Librarian", match: 90 },
                    { name: "Human Resources", match: 93 }
                ]
            },
            "ISTP": {
                name: "The Problem Solver",
                description: "You're practical, adaptable, and hands-on. You thrive when working with tools, systems, and solving immediate challenges.",
                careers: [
                    { name: "Engineer", match: 96 },
                    { name: "Mechanic", match: 95 },
                    { name: "Data Analyst", match: 92 },
                    { name: "Pilot", match: 94 },
                    { name: "Forensic Scientist", match: 91 },
                    { name: "Software Developer", match: 93 }
                ]
            },
            "ISTJ": {
                name: "The Inspector",
                description: "You're responsible, thorough, and value tradition. You excel in structured environments where attention to detail and reliability are crucial.",
                careers: [
                    { name: "Accountant", match: 97 },
                    { name: "Auditor", match: 96 },
                    { name: "Quality Control", match: 94 },
                    { name: "Government Worker", match: 92 },
                    { name: "Database Administrator", match: 93 },
                    { name: "Insurance Underwriter", match: 91 }
                ]
            }
        };

        let currentQuestion = 0;
        let answers = [];

        function initializeTest() {
            renderQuestion();
            updateProgress();
        }

        function renderQuestion() {
            const container = document.getElementById('questionsContainer');
            container.innerHTML = '';

            const questionCard = document.createElement('div');
            questionCard.className = 'question-card active';
            
            const question = questions[currentQuestion];
            
            questionCard.innerHTML = `
                <div class="question-number">Question ${currentQuestion + 1} of ${questions.length}</div>
                <div class="question-text">${question.text}</div>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <div class="option" onclick="selectOption(${index})" data-index="${index}">
                            ${option.text}
                        </div>
                    `).join('')}
                </div>
                <div class="navigation">
                    <button class="btn btn-secondary" onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>
                        Previous
                    </button>
                    <button class="btn btn-primary" onclick="nextQuestion()" id="nextBtn" disabled>
                        ${currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                    </button>
                </div>
            `;
            
            container.appendChild(questionCard);
        }

        function selectOption(index) {
            // Remove previous selection
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            
            // Add selection to clicked option
            document.querySelector(`[data-index="${index}"]`).classList.add('selected');
            
            // Store answer
            answers[currentQuestion] = questions[currentQuestion].options[index];
            
            // Enable next button
            document.getElementById('nextBtn').disabled = false;
        }

        function nextQuestion() {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                renderQuestion();
                updateProgress();
            } else {
                showResults();
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                renderQuestion();
                updateProgress();
                
                // Restore previous selection if exists
                if (answers[currentQuestion]) {
                    const selectedIndex = questions[currentQuestion].options.findIndex(
                        opt => opt.text === answers[currentQuestion].text
                    );
                    if (selectedIndex !== -1) {
                        selectOption(selectedIndex);
                    }
                }
            }
        }

        function updateProgress() {
            const progress = ((currentQuestion + 1) / questions.length) * 100;
            document.getElementById('progressFill').style.width = progress + '%';
            document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
        }

        function calculatePersonality() {
            const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
            
            answers.forEach(answer => {
                if (answer && answer.type) {
                    scores[answer.type]++;
                }
            });

            const personality = 
                (scores.E > scores.I ? 'E' : 'I') +
                (scores.S > scores.N ? 'S' : 'N') +
                (scores.T > scores.F ? 'T' : 'F') +
                (scores.J > scores.P ? 'J' : 'P');

            return personality;
        }

        function showResults() {
            const personality = calculatePersonality();
            const scores = calculateDetailedScores();
            const result = personalityTypes[personality] || personalityTypes['ENFP'];
            
            document.getElementById('questionsContainer').style.display = 'none';
            document.querySelector('.progress-container').style.display = 'none';
            
            document.getElementById('personalityType').textContent = personality;
            document.getElementById('personalityName').textContent = result.name;
            document.getElementById('personalityDescription').textContent = result.description;
            
            // Display personality breakdown
            const scoreGrid = document.getElementById('scoreGrid');
            const dimensions = [
                { 
                    label: scores.E > scores.I ? 'Extraverted' : 'Introverted',
                    value: scores.E > scores.I ? Math.round((scores.E / (scores.E + scores.I)) * 100) : Math.round((scores.I / (scores.E + scores.I)) * 100),
                    description: scores.E > scores.I ? 'Energized by others' : 'Energized by solitude'
                },
                {
                    label: scores.S > scores.N ? 'Sensing' : 'Intuitive',
                    value: scores.S > scores.N ? Math.round((scores.S / (scores.S + scores.N)) * 100) : Math.round((scores.N / (scores.S + scores.N)) * 100),
                    description: scores.S > scores.N ? 'Focus on details' : 'Focus on possibilities'
                },
                {
                    label: scores.T > scores.F ? 'Thinking' : 'Feeling',
                    value: scores.T > scores.F ? Math.round((scores.T / (scores.T + scores.F)) * 100) : Math.round((scores.F / (scores.T + scores.F)) * 100),
                    description: scores.T > scores.F ? 'Logic-based decisions' : 'Value-based decisions'
                },
                {
                    label: scores.J > scores.P ? 'Judging' : 'Perceiving',
                    value: scores.J > scores.P ? Math.round((scores.J / (scores.J + scores.P)) * 100) : Math.round((scores.P / (scores.J + scores.P)) * 100),
                    description: scores.J > scores.P ? 'Structured approach' : 'Flexible approach'
                }
            ];

            scoreGrid.innerHTML = dimensions.map(dim => 
                `<div class="score-item">
                    <div class="score-label">${dim.label}</div>
                    <div class="score-value">${dim.value}%</div>
                    <div class="score-description">${dim.description}</div>
                </div>`
            ).join('');
            
            const careerList = document.getElementById('careerList');
            careerList.innerHTML = result.careers.map(career => 
                `<div class="career-item">
                    <span class="career-name">${career.name}</span>
                    <span class="career-match">${career.match}%</span>
                </div>`
            ).join('');
            
            document.getElementById('resultsCard').classList.add('active');
        }

        function calculateDetailedScores() {
            const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
            
            answers.forEach(answer => {
                if (answer && answer.type) {
                    scores[answer.type]++;
                }
            });

            return scores;
        }
        function restartTest() {
            currentQuestion = 0;
            answers = [];
            
            document.getElementById('resultsCard').classList.remove('active');
            document.getElementById('questionsContainer').style.display = 'block';
            document.querySelector('.progress-container').style.display = 'block';
            
            initializeTest();
        }

        // Initialize the test when page loads
        initializeTest();

