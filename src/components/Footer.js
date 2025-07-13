import react from "react";

export default function Footer() {
    return (
        <>
        <footer className="bg-dark text-white text-center py-3">
            <p>© 2023 Todo List. All rights reserved.</p>
            <p>
            Follow us on{" "}
            <a href="#" className="text-white">
                Twitter
            </a>{" "}
            and{" "}
            <a href="#" className="text-white">
                Facebook
            </a>
            </p>
        </footer>
        </>
    );
}