import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

/**
 * Props for Heading
 */
interface HeadingProps {
  /**
   * Id for anchor tags.
   *
   * Example: rsvp
   * Allows <a href="#rsvp" /> to scroll
   * to heading.
   */
  id: string;

  /**
   * Optional className to change
   * style of heading.
   *
   * Example: shifted to use shifted
   * className
   */
  className?: string;
}

/**
 * Heading component for containing content.
 *
 * Example:
 * <Heading id="wedding">
 *   <Heading.Title>Wedding</Heading.Title>
 *   <Heading.Subtitle>We can't wait to celebrate with you!</Heading.Subtitle>
 *   <Heading.Body>Additional content like images, text, etc.</Heading.Body>
 * </Heading>
 */
class Heading extends React.Component<HeadingProps> {
  render() {
    return (
      <div className={this.props.className}>
        <Container>
          <Row>
            <Col>
              <div id={this.props.id} className="heading rounded">
                {this.props.children}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

/**
 * Title of the heading.
 *
 * Example:
 * <Heading id="wedding">
 *   <Heading.Title>Wedding</Heading.Title>
 *   ...
 * </Heading>
 */
class HeadingTitle extends React.Component {
  render() {
    return <h3>{this.props.children}</h3>;
  }
}

/**
 * Subtitle of the heading.
 *
 * Example:
 * <Heading id="wedding">
 *   <Heading.Subtitle>We can't wait to celebrate with you!</Heading.Subtitle>
 *   ...
 * </Heading>
 */
class HeadingSubtitle extends React.Component {
  render() {
    return <h6>{this.props.children}</h6>;
  }
}

/**
 * Body of the heading.
 *
 * Example:
 * <Heading id="wedding">
 *   <Heading.Body>Additional content like images, text, etc.</Heading.Body>
 *   ...
 * </Heading>
 */
class HeadingBody extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

/**
 * Exports the Heading class with static
 * references to Title, Subtitle, and Body.
 */
export default Object.assign(Heading, {
  Title: HeadingTitle,
  Subtitle: HeadingSubtitle,
  Body: HeadingBody,
});
