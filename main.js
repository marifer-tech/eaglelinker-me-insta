document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById('theme-toggle');
    const darkModeKey = "dark-mode-enabled"; // Chave para armazenar no localStorage

    // Verifica se há preferência armazenada no localStorage
    const isDarkModeStored = localStorage.getItem(darkModeKey);
    
    if (isDarkModeStored === null || isDarkModeStored === "true") {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }

    // Atualiza o botão com base no estado atual
    updateButtonText();

    // Evento de clique para alternar o modo
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        
        // Salva a preferência do usuário no localStorage
        const isDarkModeNow = document.body.classList.contains('dark-mode');
        localStorage.setItem(darkModeKey, isDarkModeNow);

        // Atualiza o botão novamente
        updateButtonText();
    });

    // Função para atualizar o texto e o ícone do botão
    function updateButtonText() {
        const isDarkModeNow = document.body.classList.contains('dark-mode');
        themeToggle.innerHTML = isDarkModeNow 
            ? '<i class="fa-solid fa-sun"></i> Modo Claro' 
            : '<i class="fa-solid fa-moon"></i> Modo Escuro';
    }
});
