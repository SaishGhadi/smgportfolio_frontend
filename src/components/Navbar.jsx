

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

  }



<main>
    <form onSubmit={handleSubmit}>
        <input 
        name="name"
        type="text"
         placeholder="Enter your name" 
         required 
         />

        <input 
        name="email"
        type="email"
        placeholder="Enter your email"
        required
         />

        <input 
        name="phone"
        type="tel"
        placeholder="Enter your phone number"
        required
         />

        <textarea 
        name="message"
        placeholder="Enter your message"
        required
         />

        <button type="submit">Submit</button>

    </form>
</main>