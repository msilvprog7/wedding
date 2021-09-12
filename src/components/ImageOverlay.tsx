import React from "react";

/**
 * Props for an Image Overlay
 */
interface ImageOverlayProps {
  /**
   * Source of the image. If no href is
   * set, this will be opened in a blank
   * tab when clicked.
   *
   * Example: images/wedding/columbia.png
   */
  src: string;

  /**
   * Alt text of the image.
   *
   * Example: Columbia Winery.
   */
  alt: string;

  /**
   * Optional href link to be opened when
   * clicked. Otherwise, the src will be
   * opened. Links are always opened in
   * a blank tab.
   *
   * Example: https://goo.gl/maps/Kesg1mG5J8MGupKK6
   */
  href?: string;
}

/**
 * An image overlayed with text that links to
 * the provided href.
 *
 *
 * Example:
 * <ImageOverlay
 *    src="images/wedding/columbia.png"
 *    alt="Columbia Winery"
 *    href="https://goo.gl/maps/Kesg1mG5J8MGupKK6" />
 */
class ImageOverlay extends React.Component<ImageOverlayProps> {
  render() {
    const href = this.props.href ? this.props.href : this.props.src;
    return (
      <a href={href} target="blank">
        <div className="image-overlay">
          <div className="overlay-hover rounded"></div>
          <div className="body">
            <p>{this.props.alt}</p>
          </div>
          <img className="rounded" src={this.props.src} alt={this.props.alt} />
        </div>
      </a>
    );
  }
}

/**
 * Exports the ImageOverlay
 */
export default ImageOverlay;
