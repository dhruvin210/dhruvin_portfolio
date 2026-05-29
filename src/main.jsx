import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : "Something went wrong while loading the portfolio."
    };
  }

  componentDidCatch(error) {
    console.error("Portfolio bootstrap failed", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="grid min-h-screen place-items-center bg-ink-950 p-6">
          <div className="glass max-w-md rounded-3xl p-8 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Portfolio startup issue</p>
            <h1 className="mt-3 font-display text-2xl font-semibold">Something interrupted the page load.</h1>
            <p className="mt-3 text-sm text-slate-300">{this.state.message}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn-primary mt-6"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
);
