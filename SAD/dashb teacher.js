document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sidebar tab switching interaction
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Alisin ang 'active' class sa kasalukuyang active item
            const currentActive = document.querySelector('.nav-item.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            
            // Ilagay ang 'active' class sa pinindot na item
            item.classList.add('active');
        });
    });

    // 2. Click event para sa Upload Document na Button
    const uploadBtn = document.getElementById('uploadBtn');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            alert('Simula ng file upload... Pumili ng dokumento na ibabahagi.');
        });
    }

    // 3. Click event para sa bawat Document card item
    const docItems = document.querySelectorAll('.doc-item');
    docItems.forEach(item => {
        item.addEventListener('click', () => {
            const documentTitle = item.querySelector('h4').innerText;
            alert(`Binubuksan ang file: "${documentTitle}"`);
        });
    });
    
});