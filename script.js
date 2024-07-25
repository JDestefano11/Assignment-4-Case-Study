document.addEventListener('DOMContentLoaded', () => {
    // Function to handle hover effects on process steps
    function handleHoverEffects() {
        const processSteps = document.querySelectorAll('.process-step');

        processSteps.forEach(step => {
            step.addEventListener('mouseenter', () => {
                step.classList.add('hover');
            });

            step.addEventListener('mouseleave', () => {
                step.classList.remove('hover');
            });
        });
    }

    // Function to handle click events on process steps
    function handleClickEvents() {
        const processSteps = document.querySelectorAll('.process-step');

        processSteps.forEach(step => {
            step.addEventListener('click', () => {
                const isOpen = step.classList.toggle('open');
                const details = step.querySelector('.process-description');

                // Hide all other process descriptions
                processSteps.forEach(s => {
                    if (s !== step) {
                        s.classList.remove('open');
                        s.querySelector('.process-description')?.classList.add('hidden');
                    }
                });

                // Toggle visibility of the clicked process step
                if (isOpen) {
                    details?.classList.remove('hidden');
                } else {
                    details?.classList.add('hidden');
                }
            });
        });
    }

    // Initialize interactivity
    function init() {
        handleHoverEffects();
        handleClickEvents();
    }

    init();
});
