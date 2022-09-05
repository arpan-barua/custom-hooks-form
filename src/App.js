import useForm from "./useForm";

export default function App() {
  const register = () => {
    console.log(values);
  };
  const [values, handleChange, handleSubmit] = useForm(register);

return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={values.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={values.email}
          name="email"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

