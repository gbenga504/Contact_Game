import React, { PureComponent } from "react";
import "./index.css";

/**
 * @Component Success renders a success tool-tip like notifier to the user 
 */
class ToolTip extends PureComponent {
  componentDidUpdate() {
    if (this.toolTip !== null)
      if (this.props.type != null)
        window.setTimeout(() => {
          this.toolTip.style.top = "20px";
        });

    if (this.props.type !== "loading")
      window.setTimeout(() => {
        this.toolTip.style.top = "-60px";
      }, 6000);
  }

  render() {
    return (
      <div className="report" ref={ref => (this.toolTip = ref)}>
        <div
          className={`col-xs-offset-1 col-xs-10 col-sm-offset-4 col-sm-4 ${this.props.type}`}
        >
          <div className="toolTipText">{this.props.message}</div>
        </div>
      </div>
    );
  }
}

export default ToolTip;
