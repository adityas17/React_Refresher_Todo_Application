import React from 'react';

function About() {
  return (
    <div className="container my-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4">About Us</h2>
          <p className="card-text">
            Welcome to our Todo List Manager! This application is designed to help you manage your daily tasks efficiently and stay organized.
          </p>
          <p className="card-text">
            Features include:
            <ul className="list-group list-group-flush my-3">
              <li className="list-group-item">✅ Add, delete, and view your todos</li>
              <li className="list-group-item">💾 Todos persist using localStorage</li>
              <li className="list-group-item">📱 Responsive Bootstrap UI</li>
            </ul>
          </p>
          <p className="card-text">
            This project is built using <strong>React</strong> and <strong>Bootstrap 5</strong>. We hope it improves your productivity!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
