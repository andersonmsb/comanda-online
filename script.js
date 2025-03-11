document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("service_89aps3i"); // Substitua pelo seu User ID do EmailJS

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Captura os valores do formulário
        let name = document.getElementById("nameInput").value;
        let email = document.getElementById("emailInput").value;
        let subject = document.getElementById("subject-Input").value;
        let message = document.querySelector("textarea[name='message']").value;

        // Configuração do EmailJS
        let templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        // Enviar o e-mail
        emailjs.send("service_89aps3i", "template_17zhinr", templateParams)
            .then(function (response) {
                console.log("E-mail enviado com sucesso!", response);
                document.getElementById("responseModal").classList.remove("hidden"); // Mostra modal de sucesso
                document.getElementById("contactForm").reset(); // Limpa o formulário
            })
            .catch(function (error) {
                console.error("Erro ao enviar o e-mail:", error);
                alert("Erro ao enviar o e-mail. Tente novamente.");
            });
    });

    // Fechar modal
    document.getElementById("close-Modal").addEventListener("click", function () {
        document.getElementById("responseModal").classList.add("hidden");
    });
});
