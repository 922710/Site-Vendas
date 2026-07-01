  import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Configuração do link do WhatsApp Business com mensagem personalizada
    const numeroWhatsapp = "5561995895972";
    const textoMensagem = `Olá! Meu nome é ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)}).%0A%0A${encodeURIComponent(formData.message)}`;
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${textoMensagem}`;
    
    // Redireciona o usuário para o WhatsApp
    window.open(urlWhatsapp, '_blank');
    
    // Limpa o formulário
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" style={{ padding: '60px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>Entre em Contato</h2>
      <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666' }}>
        Tem alguma dúvida ou proposta? Preencha o formulário abaixo para falar diretamente comigo pelo WhatsApp.
      </p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="name" style={{ fontWeight: 500 }}>Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="email" style={{ fontWeight: 500 }}>E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="message" style={{ fontWeight: 500 }}>Mensagem / Projeto</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '12px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background 0.2s'
          }}
        >
          Iniciar Conversa no WhatsApp
        </button>
      </form>
    </section>
  );
}