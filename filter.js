document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filters button');
    const subfilterButtons = document.querySelectorAll('.sub-filters button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Filter by main category
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Activate/deactivate filter buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            // Reset subfilters
            subfilterButtons.forEach(subBtn => {
                subBtn.classList.remove('active');
            });
            document.querySelector('.sub-filters button[data-subfilter="all"]').classList.add('active');
        });
    });

    // Filter by subcategory within the selected main category
    subfilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const subfilter = button.getAttribute('data-subfilter');
            const activeFilter = document.querySelector('.filters button.active');

            portfolioItems.forEach(item => {
                const itemCategories = item.className.split(' ');

                if ((activeFilter.getAttribute('data-filter') === 'all' || item.classList.contains(activeFilter.getAttribute('data-filter'))) &&
                    (subfilter === 'all' || itemCategories.includes(subfilter))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Activate/deactivate subfilter buttons
            subfilterButtons.forEach(subBtn => {
                subBtn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
});