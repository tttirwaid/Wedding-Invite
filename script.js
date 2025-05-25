document.addEventListener('DOMContentLoaded', function() {
    const flipContainer = document.getElementById('flipContainer');

    if (flipContainer) {
        flipContainer.addEventListener('click', function(e) {
            // Prevent any default behavior
            e.preventDefault();
            e.stopPropagation();

            // Toggle the flipped state
            this.classList.toggle('flipped');
        });

        // Prevent context menu on long press (mobile)
        flipContainer.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // For touch devices, also handle touch events to ensure reliable flipping
        flipContainer.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Toggle the flipped state
            this.classList.toggle('flipped');
        });
    }
});