import React , { Component } from "react";

class ErrorBoundary extends Component<{children:any},{hasError:boolean}> {
    constructor(props:any) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error:any) {
      return { hasError: true };
    }
  
    componentDidCatch(error:any, info:any) {
        console.log(error,info)
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <div>You've some how managed to break this. Give the page a refresh and see if that fixes it</div>
        )
      }
  
      return this.props.children;
    }
  }

export default ErrorBoundary;