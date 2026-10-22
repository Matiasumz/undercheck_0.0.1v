import { CONTACT_FORM_ACTION, CONTACT_FORM_REDIRECT } from "@/lib/constants";

export function ContactForm() {
  return (
    <form
      action={CONTACT_FORM_ACTION}
      method="POST"
      className="flex flex-col gap-6"
    >
      <input type="hidden" name="_next" value={CONTACT_FORM_REDIRECT} />
      <input type="hidden" name="_subject" value="Nuevo contacto Undercheck" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="nombre" className="label">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            autoComplete="given-name"
            required
            className="input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="apellido" className="label">
            Apellido
          </label>
          <input
            id="apellido"
            type="text"
            name="apellido"
            autoComplete="family-name"
            required
            className="input"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="nombre@empresa.com"
          required
          className="input"
          aria-describedby="email-help"
        />
        <p id="email-help" className="help">
          Te respondemos a esta dirección.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="mensaje" className="label">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          placeholder="Qué necesitás y para cuándo"
          required
          className="input"
        />
      </div>

      <button type="submit" className="btn btn-accent self-start">
        Enviar mensaje
      </button>
    </form>
  );
}
