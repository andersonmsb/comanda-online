document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Seleciona o formulário
    const button = form.querySelector('button[type="submit"]'); // Seleciona o botão de envio
    const spinner = button.querySelector(".spinner-border"); // Seleciona o spinner

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita que o formulário recarregue a página

        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        // Exibir o spinner e desativar o botão
        spinner.classList.remove("d-none");
        button.setAttribute("disabled", "disabled");

        try {
            const response = await fetch("/api/v1/mails/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar o formulário");
            }

            const result = await response.json();
            alert("Mensagem enviada com sucesso!");

            form.reset(); // Limpa os campos do formulário
        } catch (error) {
            alert("Erro ao enviar a mensagem. Tente novamente.");
        } finally {
            // Ocultar spinner e reativar o botão
            spinner.classList.add("d-none");
            button.removeAttribute("disabled");
        }
    });
});