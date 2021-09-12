import React from "react";

/**
 * Props for headline
 */
interface HeadlineProps {
  /**
   * Image url for the background image.
   *
   * Example: images/headline/wedding.png
   */
  image: string;
}

/**
 * Headline background image to scroll over
 * and contain content.
 */
class Headline extends React.Component<HeadlineProps> {
  render() {
    return (
      <header
        className="headline"
        style={{
          backgroundImage: `url(${this.props.image})`,
        }}
      >
        <div className="overlay" />
        {this.props.children}
      </header>
    );
  }
}

/**
 * Exports the headline.
 *
 * Example:
 * <Headline image="images/headline/wedding.png">
 *   <Heading id="wedding" paddingTop="350px">
 *   ...
 *   </Heading>
 * </Heading>
 */
export default Headline;
