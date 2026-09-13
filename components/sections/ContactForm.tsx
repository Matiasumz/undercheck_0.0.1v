import { CONTACT_FORM_ACTION, CONTACT_FORM_REDIRECT } from "@/lib/constants";

const fieldClass =
  "peer w-full border-b border-border-strong bg-transparent py-3 text-text placeholder-transparent focus:border-accent focus:outline-none";
const labelClass =
  "pointer-events-none absolute left-0 top-3 text-text-muted transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent -top-3 text-xs";

export function ContactForm() {
  return (
    <form
      action={CONTACT_FORM_ACTION}
      method="POST"
      className="flex flex-col gap-8"
    >
      <input type="hidden" name="_next" value={CONTACT_FORM_REDIRECT} />
      <input type="hidden" name="_subject" value="Nuevo contacto — Undercheck" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="relative">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            className={fieldClass}
          />
          <label className={labelClass}>Nombre</label>
        </div>
        <div className="relative">
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            required
            className={fieldClass}
          />
          <label className={labelClass}>Apellido</label>
        </div>
      </div>

      <div className="relative">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={fieldClass}
        />
        <label className={labelClass}>Email</label>
      </div>

      <div className="relative">
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          required
          rows={4}
          className={fieldClass}
        />
        <label className={labelClass}>Mensaje</label>
      </div>

      <button
        type="submit"
        className="self-start rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-accent-hover"
      >
        Enviar
      </button>
    </form>
  );
}
