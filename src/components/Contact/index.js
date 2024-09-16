// Contact.js
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent successfully!");
    
  };

  return (
    <div style={styles.container}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name.message}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Entered value does not match email format",
              },
            })}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email.message}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            style={styles.textarea}
          ></textarea>
          {errors.message && <p style={styles.error}>{errors.message.message}</p>}
        </div>

        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    height: "100px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "0.9em",
  },
};

export default Contact;
