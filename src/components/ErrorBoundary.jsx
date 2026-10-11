import { Component } from "react";

// Shows a friendly message instead of a blank white page if something crashes.
// While developing (npm run dev) it also prints the error text so it is easy to copy.
export default class ErrorBoundary extends Component {
  state = { failed: false, message: "" };
  static getDerivedStateFromError(error) {
    return { failed: true, message: String((error && error.message) || error) };
  }
  componentDidCatch(error) { console.error(error); }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div style={{ padding: 48, textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
        <h2>Something went wrong · משהו השתבש</h2>
        <p><a href="./" onClick={() => window.location.reload()}>Reload · טעינה מחדש</a></p>
        {import.meta.env.DEV && (
          <pre style={{ textAlign: "left", direction: "ltr", whiteSpace: "pre-wrap", color: "#a33", fontSize: 13, maxWidth: 800, margin: "24px auto" }}>
            {this.state.message}
          </pre>
        )}
      </div>
    );
  }
}
