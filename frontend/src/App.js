import { useState, useEffect } from "react";
import axios from "./axios";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
  });
  const [users, setUsers] = useState([]);

  const { firstname, lastname, gender } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("/users", {
        firstname: firstname[0],
        lastname: lastname[0],
        gender: gender[0],
      })
      .then(function (response) {
        setFormData({
          firstname: "",
          lastname: "",
          gender: "",
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get("/users").then((res) => {
      setUsers(res.data);
    });
  });

  return (
    <div className="container">
      <div className="row">
        <p className="h2">Enter The User Details</p>
        <div className="col-4">
          <form onSubmit={onSubmit}>
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Firstname"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="firstname"
                value={firstname}
                onChange={onChange}
              />
            </div>
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Lastname"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="lastname"
                value={lastname}
                onChange={onChange}
              />
            </div>
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Gender"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="gender"
                value={gender}
                onChange={onChange}
              />
            </div>
            <div className="d-grid gap-2 d-md-block mt-3">
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        </div>

        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Gender</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => {
                return (
                  <tr key={i}>
                    <td scope="col">{i + 1}</td>
                    <td scope="col">{user.firstname}</td>
                    <td scope="col">{user.lastname}</td>
                    <td scope="col">{user.gender}</td>
                    <td scope="col">
                      <button type="button" className="btn btn-success">
                        Update
                      </button>{" "}
                      <button type="button" className="btn btn-danger">
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
