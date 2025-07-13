import React from 'react'

export default function AddTodos(props) {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page reload
        const title = event.target.elements[0].value;
        const desc = event.target.elements[1].value;
        console.log("Adding Todo:", title, desc);
        if (title && desc) {
            props.addTodo(title, desc);
            event.target.reset();
        } else {
            alert("Please fill in both fields");
        }
    };

    return (
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
                    Add Todo
                </button>
            </form>
        </div>
    );
}
