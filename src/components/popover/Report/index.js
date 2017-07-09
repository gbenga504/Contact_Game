import React, { PureComponent } from "react";
import "./index.css";

export class Report extends PureComponent {
  componentDidUpdate() {
    if (this.report !== null)
      if (this.props.type != null)
        window.setTimeout(() => {
          this.report.style.top = "20px";
        });

    if (this.props.type !== "loading")
      window.setTimeout(() => {
        this.report.style.top = "-60px";
      }, 6000);
  }

  render() {
    return (
      <div className="report" ref={ref => (this.report = ref)}>
        <div
          className={`col-xs-offset-1 col-xs-10 col-sm-offset-4 col-sm-4 ${this
            .props.type}`}
        >
          <div className="reportText">
            {this.props.message}
          </div>
        </div>
      </div>
    );
  }
}
