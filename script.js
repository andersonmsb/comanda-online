document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.querySelector('button[type="submit"]');
    const spinner = submitButton.querySelector('.animate-spin');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('closeModal');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        // Captura os dados do formulário
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Exibe o spinner
        spinner.classList.remove('hidden');
        button.setAttribute('disabled', 'disabled');

        try {
            // Envia os dados para a API via fetch
            const response = await fetch('https://www.comandaon.com.br/api/v1/mails/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Falha ao enviar o e-mail');
            }

            // Exibe o modal
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        } catch (error) {
            console.error('Erro:', error);
            alert('Houve um erro ao enviar a mensagem.');
        } finally {
            // Esconde o spinner após o envio
            spinner.classList.add('hidden');
        }
    });

    // Fecha o modal ao clicar no botão "Fechar"
    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});
