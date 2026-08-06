class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    this.messageContainer = null;
    if (this.form) {
      this.url = this.form.getAttribute("action");
      this.createMessageContainer();
    }
    this.sendForm = this.sendForm.bind(this);
  }

  createMessageContainer() {
    this.messageContainer = document.createElement('div');
    this.messageContainer.classList.add('form-message');
    this.form.appendChild(this.messageContainer);
  }

  displaySuccess() {
    this.messageContainer.innerHTML = this.settings.success;
    this.messageContainer.classList.remove('error');
    this.messageContainer.classList.add('success');
    this.hideMessageAfterTimeout(); // Adiciona o temporizador
  }

  displayError(message = this.settings.error) {
    this.messageContainer.innerHTML = message;
    this.messageContainer.classList.remove('success');
    this.messageContainer.classList.add('error');
    this.hideMessageAfterTimeout(); // Adiciona o temporizador
  }

  hideMessageAfterTimeout() {
    setTimeout(() => {
      this.messageContainer.innerHTML = ""; // Limpa a mensagem após 5 segundos
      this.messageContainer.classList.remove('success', 'error'); // Remove as classes de estilo
    }, 5000); // Define 5 segundos para esconder a mensagem
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  validateForm() {
    const fields = this.form.querySelectorAll("[name]");
    let valid = true;
    fields.forEach((field) => {
      if (!field.value.trim()) {
        valid = false;
        field.classList.add("error"); // Adiciona uma classe de erro ao campo vazio
      } else {
        field.classList.remove("error");
      }
    });
    return valid;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    event.preventDefault();
    
    if (this.validateForm()) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    } else {
      this.displayError("<h1 class='error'>Todos os campos são obrigatórios.</h1>");
    }
    event.target.disabled = false;
    event.target.innerText = "Enviar";
  }

  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Mensagem enviada com sucesso!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();
