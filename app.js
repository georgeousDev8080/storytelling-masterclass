// Game Blueprint Generator - JavaScript Application
class GameBlueprintGenerator {
    constructor() {
        this.currentPhaseIndex = 0;
        this.phases = [
            'welcome', 'ideation', 'core-concept', 'world-building', 
            'character-creation', 'story-structure', 'technical-plan', 'blueprint'
        ];
        this.formData = {};
        this.totalQuestions = 48;
        
        // Ensure DOM is ready before initialization
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        console.log('Initializing Game Blueprint Generator');
        this.createParticles();
        this.bindEvents();
        this.updateProgress();
        this.loadSavedData();
        
        // Show progress bar
        const progressContainer = document.querySelector('.progress-container');
        if (progressContainer) {
            progressContainer.style.display = 'block';
        }
    }

    bindEvents() {
        console.log('Binding events');
        
        // Welcome phase - start journey button
        const startBtn = document.getElementById('start-journey');
        if (startBtn) {
            startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Start journey clicked');
                this.nextPhase();
            });
        }

        // Ideation phase navigation
        const ideationNext = document.getElementById('ideation-next');
        const ideationBack = document.getElementById('ideation-back');
        
        if (ideationNext) {
            ideationNext.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Ideation next clicked');
                this.nextPhase();
            });
        }
        
        if (ideationBack) {
            ideationBack.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Ideation back clicked');
                this.previousPhase();
            });
        }

        // Core concept phase navigation
        const coreNext = document.getElementById('core-concept-next');
        const coreBack = document.getElementById('core-concept-back');
        
        if (coreNext) {
            coreNext.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Core concept next clicked');
                this.nextPhase();
            });
        }
        
        if (coreBack) {
            coreBack.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Core concept back clicked');
                this.previousPhase();
            });
        }

        // World building phase navigation
        const worldNext = document.getElementById('world-building-next');
        const worldBack = document.getElementById('world-building-back');
        
        if (worldNext) {
            worldNext.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('World building next clicked');
                this.nextPhase();
            });
        }
        
        if (worldBack) {
            worldBack.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('World building back clicked');
                this.previousPhase();
            });
        }

        // Character creation phase navigation
        const charNext = document.getElementById('character-creation-next');
        const charBack = document.getElementById('character-creation-back');
        
        if (charNext) {
            charNext.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Character creation next clicked');
                this.nextPhase();
            });
        }
        
        if (charBack) {
            charBack.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Character creation back clicked');
                this.previousPhase();
            });
        }

        // Story structure phase navigation
        const storyNext = document.getElementById('story-structure-next');
        const storyBack = document.getElementById('story-structure-back');
        
        if (storyNext) {
            storyNext.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Story structure next clicked');
                this.nextPhase();
            });
        }
        
        if (storyBack) {
            storyBack.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Story structure back clicked');
                this.previousPhase();
            });
        }

        // Technical plan phase navigation
        const techBack = document.getElementById('technical-plan-back');
        const generateBtn = document.getElementById('generate-blueprint');
        
        if (techBack) {
            techBack.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Technical plan back clicked');
                this.previousPhase();
            });
        }
        
        if (generateBtn) {
            generateBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Generate blueprint clicked');
                this.generateBlueprint();
            });
        }

        // Blueprint phase buttons
        const blueprintBack = document.getElementById('blueprint-back');
        const downloadBtn = document.getElementById('download-blueprint');
        const startOverBtn = document.getElementById('start-over');
        
        if (blueprintBack) {
            blueprintBack.addEventListener('click', (e) => {
                e.preventDefault();
                this.previousPhase();
            });
        }
        
        if (downloadBtn) {
            downloadBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.downloadBlueprint();
            });
        }
        
        if (startOverBtn) {
            startOverBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startOver();
            });
        }

        // Auto-save on input changes
        document.addEventListener('input', (e) => {
            if (e.target.matches('.futuristic-input, .futuristic-textarea, .futuristic-select')) {
                this.autoSave();
                this.updateProgress();
            }
        });

        // Add focus effects to inputs
        document.addEventListener('focus', (e) => {
            if (e.target.matches('.futuristic-input, .futuristic-textarea, .futuristic-select')) {
                this.addFocusEffect(e.target);
            }
        }, true);

        document.addEventListener('blur', (e) => {
            if (e.target.matches('.futuristic-input, .futuristic-textarea, .futuristic-select')) {
                this.removeFocusEffect(e.target);
            }
        }, true);
    }

    createParticles() {
        const container = document.querySelector('.particles-container');
        if (!container) return;
        
        // Create floating particles
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                background: var(--color-teal-300);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                opacity: 0.4;
                animation: floatParticle ${8 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 4}s;
                box-shadow: 0 0 10px var(--color-teal-300);
            `;
            container.appendChild(particle);
        }
    }

    nextPhase() {
        console.log(`Advancing from phase ${this.currentPhaseIndex} to ${this.currentPhaseIndex + 1}`);
        if (this.currentPhaseIndex < this.phases.length - 1) {
            this.switchPhase(this.currentPhaseIndex + 1);
        }
    }

    previousPhase() {
        console.log(`Going back from phase ${this.currentPhaseIndex} to ${this.currentPhaseIndex - 1}`);
        if (this.currentPhaseIndex > 0) {
            this.switchPhase(this.currentPhaseIndex - 1);
        }
    }

    switchPhase(newIndex) {
        console.log(`Switching from ${this.phases[this.currentPhaseIndex]} to ${this.phases[newIndex]}`);
        
        const currentPhase = document.getElementById(`phase-${this.phases[this.currentPhaseIndex]}`);
        const newPhase = document.getElementById(`phase-${this.phases[newIndex]}`);

        if (!currentPhase || !newPhase) {
            console.error('Phase elements not found');
            return;
        }

        // Save current form data before switching
        this.collectFormData();

        // Fade out current phase
        currentPhase.style.opacity = '0';
        currentPhase.style.transform = 'translateY(-30px)';

        setTimeout(() => {
            currentPhase.classList.remove('active');
            newPhase.classList.add('active');
            
            // Reset phase animations
            newPhase.style.opacity = '1';
            newPhase.style.transform = 'translateY(0)';
            
            // Trigger animations for new phase
            setTimeout(() => {
                this.triggerPhaseAnimations(this.phases[newIndex]);
            }, 100);

            this.currentPhaseIndex = newIndex;
            this.updateProgress();
            
            // Scroll to top smoothly
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
            
        }, 400);
    }

    triggerPhaseAnimations(phaseName) {
        const phase = document.getElementById(`phase-${phaseName}`);
        if (!phase) return;
        
        const questionCards = phase.querySelectorAll('.question-card');
        
        // Reset and trigger question card animations
        questionCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150 + 200);
        });
    }

    updateProgress() {
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        
        if (!progressFill || !progressText) return;
        
        let percentage = 0;
        
        if (this.currentPhaseIndex === 0) {
            // Welcome phase
            percentage = 0;
        } else if (this.currentPhaseIndex === this.phases.length - 1) {
            // Blueprint phase
            percentage = 100;
        } else {
            // Calculate based on phase completion and answered questions
            const basePercentage = (this.currentPhaseIndex / (this.phases.length - 2)) * 80; // 80% for reaching phases
            const answeredQuestions = this.getAnsweredQuestionsCount();
            const questionBonus = (answeredQuestions / this.totalQuestions) * 20; // 20% for answered questions
            percentage = Math.min(Math.round(basePercentage + questionBonus), 95);
        }
        
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}% Complete`;
        
        console.log(`Progress updated: ${percentage}%`);
    }

    getAnsweredQuestionsCount() {
        let count = 0;
        
        // Count all answered questions across all phases
        this.phases.forEach(phaseName => {
            if (phaseName === 'welcome' || phaseName === 'blueprint') return;
            
            const phase = document.getElementById(`phase-${phaseName}`);
            if (!phase) return;
            
            const inputs = phase.querySelectorAll('.futuristic-input, .futuristic-textarea, .futuristic-select');
            inputs.forEach(input => {
                if (input.value && input.value.trim()) {
                    count++;
                }
            });
        });
        
        return count;
    }

    autoSave() {
        this.collectFormData();
        
        // Simple storage without localStorage dependency
        console.log('Auto-saving form data', Object.keys(this.formData).length, 'fields');
    }

    loadSavedData() {
        // No persistent storage in this version
        console.log('Data loading skipped (no persistent storage)');
    }

    collectFormData() {
        const oldDataSize = Object.keys(this.formData).length;
        this.formData = {};
        
        this.phases.forEach(phaseName => {
            if (phaseName === 'welcome' || phaseName === 'blueprint') return;
            
            const phase = document.getElementById(`phase-${phaseName}`);
            if (!phase) return;
            
            const questionCards = phase.querySelectorAll('[data-question]');
            questionCards.forEach(questionCard => {
                const questionId = questionCard.dataset.question;
                const input = questionCard.querySelector('.futuristic-input, .futuristic-textarea, .futuristic-select');
                
                if (input && input.value && input.value.trim()) {
                    this.formData[questionId] = input.value.trim();
                }
            });
        });
        
        const newDataSize = Object.keys(this.formData).length;
        if (newDataSize !== oldDataSize) {
            console.log(`Form data updated: ${newDataSize} fields`);
        }
    }

    addFocusEffect(element) {
        element.style.boxShadow = '0 0 20px rgba(50, 184, 198, 0.4)';
        element.style.borderColor = 'var(--color-teal-300)';
    }

    removeFocusEffect(element) {
        element.style.boxShadow = '';
        element.style.borderColor = 'rgba(50, 184, 198, 0.3)';
    }

    generateBlueprint() {
        console.log('Generating blueprint...');
        this.collectFormData();
        
        // Show loading animation
        const blueprintContent = document.getElementById('blueprint-content');
        if (blueprintContent) {
            blueprintContent.innerHTML = `
                <div class="text-center" style="padding: 60px;">
                    <div class="loading-spinner"></div>
                    <p style="margin-top: 20px; color: var(--color-teal-300); font-size: 18px;">Generating your game blueprint...</p>
                </div>
            `;
        }
        
        // Switch to blueprint phase
        this.switchPhase(this.phases.length - 1);
        
        // Generate blueprint content after delay for effect
        setTimeout(() => {
            this.renderBlueprint();
            this.showSuccessAnimation();
        }, 2500);
    }

    renderBlueprint() {
        const content = document.getElementById('blueprint-content');
        if (!content) return;
        
        const blueprint = `
            <div class="blueprint-section">
                <h3>🎮 Executive Summary</h3>
                <div class="blueprint-item">
                    <span class="blueprint-label">Game Title:</span>
                    <div class="blueprint-value">${this.formData['game-title'] || 'Untitled Game'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Genre:</span>
                    <div class="blueprint-value">${this.formData['game-type'] || 'Not specified'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">One-Line Description:</span>
                    <div class="blueprint-value">${this.formData['one-sentence'] || 'Not provided'}</div>
                </div>
            </div>

            <div class="blueprint-section">
                <h3>💡 Core Concept</h3>
                <div class="blueprint-item">
                    <span class="blueprint-label">Player Goal:</span>
                    <div class="blueprint-value">${this.formData['player-goal'] || 'Not defined'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Main Obstacle:</span>
                    <div class="blueprint-value">${this.formData['main-obstacle'] || 'Not defined'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Creative Inspiration:</span>
                    <div class="blueprint-value">${this.getCreativeInspiration()}</div>
                </div>
            </div>

            <div class="blueprint-section">
                <h3>🌍 World Design</h3>
                <div class="blueprint-item">
                    <span class="blueprint-label">Setting:</span>
                    <div class="blueprint-value">${this.formData['time-period'] || 'Undefined time'} in ${this.formData['location'] || 'an undefined location'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">What Makes It Special:</span>
                    <div class="blueprint-value">${this.formData['world-special'] || 'Not specified'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">World Rules:</span>
                    <div class="blueprint-value">${this.formData['world-rules'] || 'Standard physics apply'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Core Conflict:</span>
                    <div class="blueprint-value">${this.formData['world-problem'] || 'Not defined'}</div>
                </div>
            </div>

            <div class="blueprint-section">
                <h3>👤 Character Profiles</h3>
                <div style="display: grid; gap: 20px;">
                    <div style="background: rgba(50, 184, 198, 0.1); padding: 20px; border-radius: 8px; border-left: 4px solid var(--color-teal-300);">
                        <h4 style="color: var(--color-teal-300); margin-bottom: 12px;">Main Character</h4>
                        <div class="blueprint-item">
                            <span class="blueprint-label">Name:</span>
                            <div class="blueprint-value">${this.formData['hero-name'] || 'Unnamed Hero'}</div>
                        </div>
                        <div class="blueprint-item">
                            <span class="blueprint-label">Appearance:</span>
                            <div class="blueprint-value">${this.formData['hero-appearance'] || 'Not described'}</div>
                        </div>
                        <div class="blueprint-item">
                            <span class="blueprint-label">Main Skill:</span>
                            <div class="blueprint-value">${this.formData['hero-skill'] || 'Not specified'}</div>
                        </div>
                        <div class="blueprint-item">
                            <span class="blueprint-label">Core Desire:</span>
                            <div class="blueprint-value">${this.formData['hero-want'] || 'Not defined'}</div>
                        </div>
                        <div class="blueprint-item">
                            <span class="blueprint-label">Greatest Fear:</span>
                            <div class="blueprint-value">${this.formData['hero-fear'] || 'Not specified'}</div>
                        </div>
                    </div>
                    
                    <div style="background: rgba(192, 21, 47, 0.1); padding: 20px; border-radius: 8px; border-left: 4px solid var(--color-red-500);">
                        <h4 style="color: var(--color-red-500); margin-bottom: 12px;">Main Opposition</h4>
                        <div class="blueprint-item">
                            <span class="blueprint-label">Name/Description:</span>
                            <div class="blueprint-value">${this.formData['antagonist-name'] || 'Unnamed Antagonist'}</div>
                        </div>
                        <div class="blueprint-item">
                            <span class="blueprint-label">Goal & Conflict:</span>
                            <div class="blueprint-value">${this.formData['antagonist-goal'] || 'Not defined'}</div>
                        </div>
                        <div class="blueprint-item">
                            <span class="blueprint-label">What Makes Them Dangerous:</span>
                            <div class="blueprint-value">${this.formData['antagonist-danger'] || 'Not specified'}</div>
                        </div>
                        <div class="blueprint-item">
                            <span class="blueprint-label">Weakness:</span>
                            <div class="blueprint-value">${this.formData['antagonist-weakness'] || 'Seemingly invincible'}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="blueprint-section">
                <h3>📖 Story Structure</h3>
                <div class="blueprint-item">
                    <span class="blueprint-label">Opening Hook:</span>
                    <div class="blueprint-value">${this.formData['story-beginning'] || 'Not defined'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">First Challenge:</span>
                    <div class="blueprint-value">${this.formData['first-challenge'] || 'Not specified'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Character Growth:</span>
                    <div class="blueprint-value">${this.formData['middle-skills'] || 'Not planned'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Major Turning Point:</span>
                    <div class="blueprint-value">${this.formData['biggest-obstacle'] || 'Not defined'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Final Challenge:</span>
                    <div class="blueprint-value">${this.formData['final-challenge'] || 'Not planned'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Conclusion:</span>
                    <div class="blueprint-value">${this.formData['story-ending'] || 'Not planned'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Emotional Journey:</span>
                    <div class="blueprint-value">${this.formData['emotional-journey'] || 'Not specified'}</div>
                </div>
            </div>

            <div class="blueprint-section">
                <h3>⚙️ Technical Specifications</h3>
                <div class="blueprint-item">
                    <span class="blueprint-label">Target Platform:</span>
                    <div class="blueprint-value">${this.formData['target-platform'] || 'Not specified'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Art Style:</span>
                    <div class="blueprint-value">${this.formData['art-style'] || 'Not decided'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Target Audience:</span>
                    <div class="blueprint-value">${this.formData['target-audience'] || 'General audience'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Estimated Playtime:</span>
                    <div class="blueprint-value">${this.formData['estimated-playtime'] || 'Not estimated'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Similar Games:</span>
                    <div class="blueprint-value">${this.formData['similar-games'] || 'Not researched'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Unique Selling Points:</span>
                    <div class="blueprint-value">${this.formData['unique-features'] || 'To be determined'}</div>
                </div>
            </div>

            <div class="blueprint-section">
                <h3>🚀 Development Roadmap</h3>
                <div class="blueprint-item">
                    <span class="blueprint-label">First Milestone:</span>
                    <div class="blueprint-value">${this.formData['first-milestone'] || 'Not planned'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Development Timeline:</span>
                    <div class="blueprint-value">${this.formData['development-timeline'] || 'Not set'}</div>
                </div>
                <div class="blueprint-item">
                    <span class="blueprint-label">Immediate Next Steps:</span>
                    <div class="blueprint-value">${this.formData['next-steps'] || 'Begin research and planning'}</div>
                </div>
            </div>

            <div class="blueprint-section">
                <h3>✨ Key Recommendations</h3>
                <div class="blueprint-value">
                    ${this.generateRecommendations()}
                </div>
            </div>
        `;
        
        content.innerHTML = blueprint;
    }

    getCreativeInspiration() {
        const inspirations = [
            this.formData['whatif1'],
            this.formData['whatif2'],
            this.formData['whatif3'],
            this.formData['whatif4'],
            this.formData['whatif5']
        ].filter(item => item && item.trim());
        
        return inspirations.length > 0 ? inspirations.join(' • ') : 'Creative brainstorming session needed';
    }

    generateRecommendations() {
        const recommendations = [];
        
        if (!this.formData['game-title']) {
            recommendations.push("• Spend time brainstorming a compelling game title that captures your core concept");
        }
        
        if (!this.formData['similar-games']) {
            recommendations.push("• Research similar games to understand the market and differentiate your concept");
        }
        
        if (!this.formData['first-milestone']) {
            recommendations.push("• Define your first concrete development milestone to get started");
        }
        
        recommendations.push("• Create a simple prototype to test your core gameplay mechanic");
        recommendations.push("• Consider creating mood boards or concept art to visualize your world");
        recommendations.push("• Start building a small team or network of collaborators");
        recommendations.push("• Document your vision clearly to maintain consistency throughout development");
        
        return recommendations.join('<br>');
    }

    showSuccessAnimation() {
        const container = document.getElementById('blueprint-content');
        if (!container) return;
        
        const successDiv = document.createElement('div');
        successDiv.className = 'success-animation';
        successDiv.innerHTML = `
            <div class="success-icon">✓</div>
            <h3 style="color: var(--color-teal-300); margin-top: 16px;">Blueprint Generated Successfully!</h3>
            <p style="color: var(--color-text-secondary);">Your game development plan is ready!</p>
        `;
        
        container.insertBefore(successDiv, container.firstChild);
    }

    downloadBlueprint() {
        const title = this.formData['game-title'] || 'Game Blueprint';
        const content = document.getElementById('blueprint-content');
        if (!content) return;
        
        const textContent = content.innerText || content.textContent;
        
        const blob = new Blob([`GAME DEVELOPMENT BLUEPRINT\n\n${title}\n${'='.repeat(title.length + 25)}\n\n${textContent}`], 
            { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_blueprint.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log('Blueprint downloaded');
    }

    startOver() {
        if (confirm('Are you sure you want to start over? All your progress will be lost.')) {
            this.formData = {};
            
            // Reset all form fields
            document.querySelectorAll('.futuristic-input, .futuristic-textarea, .futuristic-select').forEach(input => {
                input.value = '';
            });
            
            // Go back to welcome phase
            this.switchPhase(0);
            
            console.log('Application reset');
        }
    }
}

// Initialize the application
let gameGenerator;

// Ensure proper initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        gameGenerator = new GameBlueprintGenerator();
    });
} else {
    gameGenerator = new GameBlueprintGenerator();
}

// Add some additional interactive effects
document.addEventListener('mousemove', (e) => {
    let cursor = document.querySelector('.cursor-glow');
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.className = 'cursor-glow';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(50, 184, 198, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(cursor);
    }
    
    cursor.style.left = (e.clientX - 10) + 'px';
    cursor.style.top = (e.clientY - 10) + 'px';
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.matches('input.futuristic-input')) {
        e.preventDefault();
        const nextInput = e.target.closest('.question-card').nextElementSibling?.querySelector('.futuristic-input, .futuristic-textarea, .futuristic-select');
        if (nextInput) {
            nextInput.focus();
        }
    }
});