(function() {
    // Helper function to wait for a short period
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Click all "Like" buttons found on the page
    async function clickAllLikeButtons() {
        console.log("Starting to click all Like buttons...");

        let previousHeight = document.body.scrollHeight;
        let buttonsClicked = 0;

        while (true) {
            // Scroll to the bottom of the page
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

            // Wait for the page to load more content
            await sleep(3000);

            // Find all "Like" buttons that haven't been clicked yet
            const likeButtons = document.querySelectorAll("button svg[data-test-icon='thumbs-up-outline-medium']");
            let uniqueButtons = Array.from(likeButtons).filter(button => !button.dataset.clicked);

            if (uniqueButtons.length === 0) {
                console.log("No new Like buttons found. Stopping...");
                break;
            }

            console.info(Found ${uniqueButtons.length} Like buttons on this page.);

            // Click each "Like" button
            for (const svg of uniqueButtons) {
                const button = svg.closest('button');
                if (button) {
                    console.log(Clicking Like button ${++buttonsClicked});
                    button.click();
                    svg.dataset.clicked = 'true'; // Mark this button as clicked
                    await sleep(2000); // Wait 2 seconds between clicks to avoid spamming
                }
            }

            // Check if scrolling reached the bottom of the page
            const newHeight = document.body.scrollHeight;
            if (newHeight === previousHeight) {
                console.log("Reached the bottom of the page. Stopping...");
                break;
            }
            previousHeight = newHeight;
        }

        console.info(Finished clicking Like buttons. Total buttons clicked: ${buttonsClicked});
    }

    // Run the function
    clickAllLikeButtons();
})();