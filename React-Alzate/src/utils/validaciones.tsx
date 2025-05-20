export function validarNombre(nombre: string): string | null {
  if (!nombre.trim()) return "El nombre de usuario es obligatorio.";
  return null;
}

export function validarEmail(email: string): string | null {
  if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) return "Correo electrónico inválido.";
  return null;
}

export function validarPassword(password: string): string | null {
  if (password.length < 6) return "La contraseña debe tener al menos 6 caracteres.";
  return null;
}