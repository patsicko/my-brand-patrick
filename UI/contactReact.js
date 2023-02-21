


function ContactForm() {
  const [names, setNames] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [namesError, setNamesError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [messageError, setMessageError] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    let hasError = false;
    if (!names.trim()) {
      setNamesError('Please enter your name');
      hasError = true;
    } else {
      setNamesError('');
    }
    if (!email.trim()) {
      setEmailError('Please enter your email');
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      hasError = true;
    } else {
      setEmailError('');
    }
    if (!message.trim()) {
      setMessageError('Please enter a message');
      hasError = true;
    } else {
      setMessageError('');
    }

    if (hasError) {
      return;
    }

    // Send message
    const token = localStorage.getItem('token');
    const response = await fetch('https://my-brand-backend.cyclic.app/api/createMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ names, email, message }),
    });

    const data = await response.json();

    if (data.status === 'success') {
      setIsSubmitted(true);
      setNames('');
      setEmail('');
      setMessage('');
    }
  };

  if (isSubmitted) {
    return <div className="confirmed">Message sent successfully</div>;
  }

  return (
    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="contact-names">Name</label>&nbsp;
      <input
        type="text"
        name="names"
        id="contact-names"
        placeholder="Your name"
        value={names}
        onChange={(e) => setNames(e.target.value)}
      />
      <br />
      <small id="names-error">{namesError}</small>
      <br /><br />

      <label htmlFor="contact-email">Email</label>&nbsp;&nbsp;
      <input
        type="email"
        name="contact-email"
        id="contact-email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <small id="email-error">{emailError}</small>
      <br /><br />

      <textarea
        name="text"
        id="textarea"
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <small id="text-error">{messageError}</small>
      <br/>

      <button type="submit">Submit</button> 

     
    </form>
     
  );
}





const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<ContactForm />);