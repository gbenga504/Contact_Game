import React from "react";

export class Loader extends React.PureComponent {
  shouldRenderLoaderText = () => {
    if (this.props.showLoaderText)
      return <div style={styles.loaderText}>ALL IMAGES LOADING</div>;
    return null;
  };

  render() {
    const className = "preloader-wrapper small";
    return (
      <div
        className="row"
        style={this.props.show !== true ? styles.loader : styles.displayLoader}
      >
        <div
          className={
            this.props.show !== true ? `${className}` : `${className} active`
          }
        >
          <div className="spinner-layer spinner-blue">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>

          <div className="spinner-layer spinner-red">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>

          <div className="spinner-layer spinner-yellow">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>

          <div className="spinner-layer spinner-green">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
        {this.shouldRenderLoaderText()}
      </div>
    );
  }
}

const styles = {
  loader: {
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    display: "none"
  },
  displayLoader: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    flexDirection: "column"
  },
  loaderText:{
    fontFamily: "raleway_bold",
    color: "#333",
    fontSize: 14,
    marginTop: "20px",
  }
};
