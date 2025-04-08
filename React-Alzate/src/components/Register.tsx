import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    if (!email) {
      setError('El correo es obligatorio');
      return false;
    }
    // simple regex para validar formato básico de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Formato de correo inválido');
      return false;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    setError(null);
    return true;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setEmail('');
      setPassword('');
    } catch (err: any) {
      // Firebase devuelve un código de error en err.code
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('Este correo ya está registrado');
          break;
        case 'auth/invalid-email':
          setError('Correo inválido');
          break;
        case 'auth/weak-password':
          setError('Contraseña muy débil');
          break;
        default:
          setError('Error al registrar usuario');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} style={{ maxWidth: 320, margin: '0 auto' }}>
      <h2>Registro</h2>

      {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
      {success && <div style={{ color: 'green', marginBottom: 8 }}>¡Usuario registrado!</div>}

      <div style={{ marginBottom: 8 }}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={loading}
          style={{ width: '100%', padding: 8 }}
        />
      </div>

      <div style={{ marginBottom: 8 }}>
        <input
          type="password"
          placeholder="Contraseña (mínimo 6 caracteres)"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={loading}
          style={{ width: '100%', padding: 8 }}
        />
      </div>

      <button type="submit" disabled={loading} style={{ width: '100%', padding: 8 }}>
        {loading ? 'Registrando...' : 'Registrarse'}
      </button>
    </form>
  );
};

export default Register;
