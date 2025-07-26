import React, { useState } from 'react'

function TodoItem(props) {
  const [updating,setUpdating] = useState(false);

  function handleUpdate() {
    setUpdating(true); 
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const title = e.target.elements[0].value;
    const desc = e.target.elements[1].value;
    if (title && desc) {
            props.onUpdate(props.todo, { title, desc });
    } else {
        alert("Please fill in both fields");
    }
    setUpdating(false);
  }
  return (
    <div>
      {updating ?
        <div style={{
            maxWidth: "400px",
            margin: "40px auto",
            padding: "24px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            background: "#fafafa",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
        }}>
            <form 
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Todo Title"
                    defaultValue={props.todo.title}
                    style={{
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "16px"
                    }}
                />
                <textarea
                    placeholder="Description"
                    rows={3}
                    defaultValue={props.todo.desc}
                    style={{
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "16px",
                        resize: "vertical"
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "10px",
                        background: "#1976d2",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        fontSize: "16px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    Submit
                </button>
            </form>
        </div>:
        <div>
          <h3>{props.todo.title}</h3>
          <p>{props.todo.desc}</p>
          <button className="btn btn-sm btn-danger" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
          <button className="btn btn-sm btn-primary mx-2" onClick={handleUpdate}>Update</button>
          <hr />
        </div>
      }
    </div>
  )
}

export default TodoItem
